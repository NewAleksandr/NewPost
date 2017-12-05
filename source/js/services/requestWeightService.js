NewpostApp.factory('requestWeightService' , function ($http) {
    return{
        getWeightListAjax: function (callback) {
            //data and parameters for ajax request
            //----------------------------------------------------------------------------------------------------------
            var DataWeightRequest =         {
                                            "modelName": "Common",
                                            "calledMethod": "getCargoTypes",
                                            "methodProperties": {},
                                                "apiKey": "3d76ec0d4321c8f2b8080d510ceba9cc"
                                        };
           var ParametersWeightRequest =    {           
                                            url: "https://api.novaposhta.ua/v2.0/json/",
                                            method: "POST", 
                                            data: JSON.stringify(DataWeightRequest), 
                                            headers: { 
                                                        "Content-Type": "application/json; charset=utf-8" 
                                                    } 
                                            }; 
            //----------------------------------------------------------------------------------------------------------
            //ajax request
            //----------------------------------------------------------------------------------------------------------
            $http(ParametersWeightRequest).then(function(response) {

                callback(response);

            }, function myError(response) {

            });     //----------------------------------------------------------------------------------------------------------
        }
    }
});
