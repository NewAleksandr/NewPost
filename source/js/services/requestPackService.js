///////////////////////////all together
NewpostApp.factory('requestPackService' , function ($http) {
    return{
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
        }, 

    }
});
