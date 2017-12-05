////xxxxxxx not all together
NewpostApp.factory('requestReturnService', function ($http) {
    var factory = {
        getReturnListAjax: function (callback) {
            var DataReturnRequest={
                                "modelName": "Common",
                                "calledMethod": "getBackwardDeliveryCargoTypes",
                                "apiKey": "3d76ec0d4321c8f2b8080d510ceba9cc"
                                };
            var ParametersReturnRequest = {                         
                                     url: "http://api.novaposhta.ua/v2.0/json/common/getBackwardDeliveryCargoTypes",
                                     method: "POST", 
                                     data: JSON.stringify(DataReturnRequest), 
                                     headers: { "Content-Type": "application/json; charset=utf-8" } 
                                     };
            $http(ParametersReturnRequest).then(function(response) {
                     callback(response);
            }, function myError(response) {});
        },

        //getReturn: function () {

//        }
        
    
        getPackListAjax: function (callback) {
            //data and parameters for ajax request
            //----------------------------------------------------------------------------------------------------------
            var DataPackRequest = {     
                                "modelName": "Common",
                                "calledMethod": "getPackList",
                                "methodProperties": {
                                        "Length": "",
                                        "Width": "",
                                        "Height": "",
                                        "TypeOfPacking": ""
                                        }
                                };
            var ParametersPackRequest = {       
                                url: "http://api.novaposhta.ua/v2.0/json/common/getPackList",       
                                method: "POST", 
                                data: JSON.stringify(DataPackRequest), 
                                headers: { 
                                            "Content-Type": "application/json; charset=utf-8" 
                                        } 
                                };
            //----------------------------------------------------------------------------------------------------------
            //ajax request
            //----------------------------------------------------------------------------------------------------------
            $http(ParametersPackRequest).then(function(response) {

                callback(response);

            }, function myError(response) {});     //----------------------------------------------------------------------------------------------------------
        },

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

            }, function myError(response) {});     //----------------------------------------------------------------------------------------------------------
        },


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

            }, function myError(response) {});     //----------------------------------------------------------------------------------------------------------
        },
    
    getTownsListAjax: function (callback) {
            var DataTownsRequest = {
                                        "modelName": "Address",
                                        "calledMethod": "getCities",
                                        "apiKey": "3d76ec0d4321c8f2b8080d510ceba9cc"
                                        };
            var ParametersTownsRequest = { 
                                         url:  "http://api.novaposhta.ua/v2.0/json/Address/getCities/",
                                         method: "POST", 
                                         data: JSON.stringify(DataTownsRequest), 
                                         headers: { 
                                                "Content-Type": "application/json; charset=utf-8" 
                                                } 
                                        }; 
            $http(ParametersTownsRequest).then(function(response) {
                 
                callback(response);

             }, function myError(response) {});
        } 
    }
    return factory;
});







// NewpostApp.factory('requestReturnService' , function ($http) {
//     return{
//         getReturnListAjax: function (callback) {
//             //data and parameters for ajax request
//             //----------------------------------------------------------------------------------------------------------
//             var DataReturnRequest = {
//                                 "modelName": "Common",
//                                 "calledMethod": "getBackwardDeliveryCargoTypes",
//                                 "apiKey": "3d76ec0d4321c8f2b8080d510ceba9cc"
//                                 };
//             var ParametersReturnRequest = {                         
//                                url: "http://api.novaposhta.ua/v2.0/json/common/getBackwardDeliveryCargoTypes",
//                                 method: "POST", 
//                                 data: JSON.stringify(DataReturnRequest), 
//                                 headers: { "Content-Type": "application/json; charset=utf-8" } 
//                                 }; 
//             //----------------------------------------------------------------------------------------------------------
//             //ajax request
//             //----------------------------------------------------------------------------------------------------------
//             $http(ParametersReturnRequest).then(function(response) {

//                 callback(response);

//             }, function myError(response) {

//             });     //----------------------------------------------------------------------------------------------------------
//         }
//     }
// });
