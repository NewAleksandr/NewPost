NewpostApp.factory('requestServiceService' , function ($http) {
    return{
        getServiceListAjax: function (callback) {
            //data and parameters for ajax request
            //----------------------------------------------------------------------------------------------------------
          
            var ServiceTypeRequest =        {
                                    "modelName": "Common",
                                    "calledMethod": "getServiceTypes",
                                    "apiKey": "3d76ec0d4321c8f2b8080d510ceba9cc",
                                    "methodProperties": {}
                            };
           
            var ParametersServiceTypeRequest = { 
                                    url: "https://api.novaposhta.ua/v2.0/json/",
                                    method: "POST", 
                                    data: JSON.stringify(ServiceTypeRequest), 
                                    headers: { 
                                                "Content-Type": "application/json; charset=utf-8" 
                                            } 
                                };
            //----------------------------------------------------------------------------------------------------------
            //ajax request
            //----------------------------------------------------------------------------------------------------------
            $http(ParametersServiceTypeRequest).then(function(response) {

                callback(response);

            }, function myError(response) {

            });     //----------------------------------------------------------------------------------------------------------
        }
    }
});