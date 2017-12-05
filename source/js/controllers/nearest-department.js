//nearest-departmentPageController
//----------------------------------------------------------------------------------------------------------------------
NewpostApp.controller('nearest-departmentPageController',
    ['$scope',
     '$http',
     'CityList',
     'DepartmentList',
    function($scope,
             $http,
             CityList,
             DepartmentList) {
    //title page
    $scope.pageName = "Найближче відділення";
    //reset
    $scope.ChangeCityInput = function () {

        $scope.ifSityList = true;
        $scope.ifDepartmentList = false;
        $scope.ifDepartmentListTop = false;
        $scope.valDepInput = "";
        $scope.dataStringDepName = null;
        $scope.dataStringCityName = null;
        $scope.DepInfo = null;
    };

    //get city list
    //------------------------------------------------------------------------------------------------------------------
    CityList.getCityListAjax(function (response) {

        $scope.ifSityList = true;
        $scope.ifDepartmentList = false;
        //$scope.ifDepartmentListInput = false;
        
        $scope.SitiesList = response;

    });
    //------------------------------------------------------------------------------------------------------------------

    $scope.ListItemClick = function ($event) {

        var target = $event.target;

        if(target.tagName == 'LI'){

            var StringCityName = String(target.innerText);
            $scope.valCityInput = String(target.innerText);
            $scope.ifSityList = false;
            $scope.ifDepartmentList = true;
            $scope.ifDepartmentListTop = true;

            DepartmentListAjax(StringCityName);

        }

    };
    function DepartmentListAjax(StringCityName) {

        DepartmentList.getDepartmentListAjax(StringCityName , function (response) {

            //show values about quantity departments in city was chosen
            $scope.DepInfo = DepartmentsCounter(response.data.data);

            $scope.DepartmentList = response.data.data;

            // GoogleMap.AddDepartmentMarkers(DataCoordinateArrayCreator(response.data.data));
            $
            scope.arr = DataCoordinateArrayCreator(response.data.data);

            $scope.TypeDepartmentSort = function ($item) {
                var ToFilteringWord = String($item.ItemTypeDepartment);
                var DepartmentListJson = response.data.data;

                TypeDepartmentSortSwitcher(DepartmentListJson, ToFilteringWord);
            };

            $scope.DepItemClick = function ($event) {

                var target = $event.target;

                while (target != 'LI') {

                    if (target.tagName == 'LI') {

                        var targetLI = target;

                        for (var i = 0; i < targetLI.childNodes.length; i++){

                            if (targetLI.childNodes[i].nodeType != 1) continue;

                            var DataTableAttr = targetLI.childNodes[i].getAttribute('data-table');
                            
                            if(DataTableAttr == 'hide'){
                                targetLI.childNodes[i].setAttribute("style", "display: block;");
                                targetLI.childNodes[i].setAttribute("data-table", "show");
                            }

                            if(DataTableAttr == 'show'){
                                targetLI.childNodes[i].setAttribute("style", "display: none;");
                                targetLI.childNodes[i].setAttribute("data-table", "hide");
                            }

                        }

                        return;
                    }

                    target = target.parentNode;
                }

            }

        });

    }


    //mouseover event on city list item
    $scope.MouseSityItem = function ($event) {
        var target = $event.target;

        if(target.tagName == 'LI'){

            $scope.dataStringCityName = String(target.innerText);

        }

    };
    

    //mouseover event on department list item
    $scope.MouseDepartmentItem = function ($event) {
        var target = $event.target;

        if(target.tagName == 'LI'){

            var StringDepName = String(target.innerText);
            var AjaxDepartmentList = $scope.DepartmentList;

            for(var i = 0; i < AjaxDepartmentList.length; i++){

                var DepartmentValue = AjaxDepartmentList[i].Description;
                if(StringDepName == DepartmentValue){

                    $scope.DepartmentObject = AjaxDepartmentList[i];

                }

            }

        }

    };


    //DepartmentsCounter(ResponseData)
    //------------------------------------------------------------------------------------------------------------------
    function DepartmentsCounter(ResponseData){

        var DepartmentCounter = 0;
        var PostmashineCounter = 0;

        var DepartmentsTypeQantity = {
            departmentTitle: "відділень",
            department: 0,
            postmashineTitle: "поштоматів",
            postmashine: 0,
            postmashinewarning: ""
        };

        for(var i = 0; i < ResponseData.length; i++){

            if (ResponseData[i].Description.indexOf('Відділення') != -1){
                DepartmentsTypeQantity.department = ++DepartmentCounter;
            }

            if (ResponseData[i].Description.indexOf('Поштомат') != -1){
                DepartmentsTypeQantity.postmashine = ++PostmashineCounter;
            }

        }

        if(PostmashineCounter == 0){
            DepartmentsTypeQantity.postmashinewarning = "Увага ! Поштомати відсутні !!!";
        }

        return DepartmentsTypeQantity;
    }
    //------------------------------------------------------------------------------------------------------------------


    //TypeDepartmentList
    $scope.SortTypeDepartment = [
        {ItemTypeDepartment: "Всі типи"},
        {ItemTypeDepartment: "Відділення"},
        {ItemTypeDepartment: "Поштомати"}
    ];


    //TypeDepartmentFilter
    //------------------------------------------------------------------------------------------------------------------
    function TypeDepartmentFilter(DepartmentListJson , ToFilteringWord) {

        var newDeprtmentListJson = [];

        for (var i = 0; i < DepartmentListJson.length; i++){
            var str = DepartmentListJson[i].Description;
                if(~str.indexOf(ToFilteringWord)){

                newDeprtmentListJson.push(DepartmentListJson[i]);

            }
        }

        if ((newDeprtmentListJson.length) > 0){

            return newDeprtmentListJson;

        }

        if ((newDeprtmentListJson.length) == 0){

            return DepartmentListJson;

        }

    }//TypeDepartmentFilter
    //------------------------------------------------------------------------------------------------------------------


    //type department sort switcher
    function TypeDepartmentSortSwitcher(DepartmentListJson, ToFilteringWord) {

        var CoordinatesArray;

        //initialise
        var initToFilteringWord = "";

        if(ToFilteringWord == 'Відділення'){
            initToFilteringWord = 'Відділення';
        }

        if(ToFilteringWord == 'Поштомати'){
            initToFilteringWord = 'Поштомат';
        }

        //switcher
        switch (ToFilteringWord){
            
            case 'Відділення':{
                $scope.DepartmentList = TypeDepartmentFilter(DepartmentListJson, initToFilteringWord);
                CoordinatesArray = TypeDepartmentFilter(DepartmentListJson, initToFilteringWord);

                //GoogleMap.AddDepartmentMarkers(DataCoordinateArrayCreator(CoordinatesArray));
                $scope.arr = DataCoordinateArrayCreator(CoordinatesArray);

                break;
            }

            case 'Поштомати':{
                $scope.DepartmentList = TypeDepartmentFilter(DepartmentListJson, initToFilteringWord);
                CoordinatesArray = TypeDepartmentFilter(DepartmentListJson, initToFilteringWord);

                //GoogleMap.AddPostmashineMarkers(DataCoordinateArrayCreator(CoordinatesArray));
                $scope.arr = DataCoordinateArrayCreator(CoordinatesArray);

                break;
            }

            case 'Всі типи':{
                $scope.DepartmentList = TypeDepartmentFilter(DepartmentListJson, initToFilteringWord);
                CoordinatesArray = TypeDepartmentFilter(DepartmentListJson, initToFilteringWord);

                //GoogleMap.AddAllMarkers(DataCoordinateArrayCreator(CoordinatesArray));
                $scope.arr = DataCoordinateArrayCreator(CoordinatesArray);

                break;
            }

        }

    }

    function DataCoordinateArrayCreator(CoordinatesArray) {
        var DataCoordinateArray = [];

        var dataDescription;
        var dataLatitude;
        var dataLongitude;
        var dataZindex;

        for(var i = 0; i < CoordinatesArray.length; i++){

            var ParametersArray = [];

            dataDescription = String(CoordinatesArray[i].Description);
            dataLatitude = Number(CoordinatesArray[i].Latitude);
            dataLongitude = Number(CoordinatesArray[i].Longitude);
            dataZindex = i;

            ParametersArray.push(dataDescription);
            ParametersArray.push(dataLatitude);
            ParametersArray.push(dataLongitude);
            ParametersArray.push(dataZindex);

            if(i == 0){
                ParametersArray.push(FocusCoordinate(CoordinatesArray));
            }

            DataCoordinateArray.push(ParametersArray);

        }

        function FocusCoordinate(CoordinatesArray) {
            var FocusCoordinateObj = {};
                FocusCoordinateObj.FocusLat = Number(CoordinatesArray[0].Latitude);
                FocusCoordinateObj.FocusLng = Number(CoordinatesArray[0].Longitude);

            return FocusCoordinateObj;
        }

        return DataCoordinateArray;
    }

}]);
//end nearest-departmentPageController
//----------------------------------------------------------------------------------------------------------------------



















