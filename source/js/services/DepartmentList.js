//DepartmentList factory
//----------------------------------------------------------------------------------------------------------------------
NewpostApp.factory('DepartmentList' , function ($http) {
    return{
        getDepartmentListAjax: function (city , callback) {
            //data and parameters for ajax request
            //----------------------------------------------------------------------------------------------------------
            var DataRequest = {
                "modelName": "AddressGeneral",
                "calledMethod": "getWarehouses",
                "methodProperties": {
                    "CityName": city
                },
                "apiKey": "e3c2d7bf93ccd4cc3f34e1d5113d51cf"
            };
            
            var ParametersRequest = {
                url: "http://api.novaposhta.ua/v2.0/json/AddressGeneral/getWarehouses",
                method: "POST",
                data: DataRequest,
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            };
            //----------------------------------------------------------------------------------------------------------

            //ajax request
            //----------------------------------------------------------------------------------------------------------
            $http(ParametersRequest).then(function(response) {

                callback(response);

            }, function myError(response) {

            });     //----------------------------------------------------------------------------------------------------------
        }
    }
});// end NewpostApp.factory('DepartmentList'
//----------------------------------------------------------------------------------------------------------------------