
//CityList factory
//----------------------------------------------------------------------------------------------------------------------
NewpostApp.factory('CityList' , function ($http) {

    return{

        getCityListAjax: function (callback) {

            //data and parameters for ajax request
            //----------------------------------------------------------------------------------------------------------
            var DataRequest = {
                "modelName": "Address",
                "calledMethod": "getCities",
                "apiKey": "e3c2d7bf93ccd4cc3f34e1d5113d51cf"
            };

            var ParametersRequest = {
                url: "http://api.novaposhta.ua/v2.0/json/Address/getCities",
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

                var ChooseResponseData = response.data.data;

                var SityListArr = [];

                for(var i = 0; i < ChooseResponseData.length; i++){

                    var SityListObj = {};
                    SityListObj.Description = ChooseResponseData[i].Description;
                    SityListObj.DescriptionRu = ChooseResponseData[i].DescriptionRu;

                    SityListArr.push(SityListObj);

                }

                callback(SityListArr);

            }, function myError(response) {

            });
            //----------------------------------------------------------------------------------------------------------
        }

    }

});// end NewpostApp.factory('CityList'
//----------------------------------------------------------------------------------------------------------------------
