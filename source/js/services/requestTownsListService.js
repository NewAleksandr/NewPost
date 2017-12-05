// NewpostApp.factory('requestTownsListService' , function ($http) {
//     return{
//         getTownsListAjax: function (callback) {
//             //data and parameters for ajax request
//             //----------------------------------------------------------------------------------------------------------
//        var DataTownsRequest = {
//                                     "modelName": "Address",
//                                     "calledMethod": "getCities",
//                                     "apiKey": "3d76ec0d4321c8f2b8080d510ceba9cc"
//                                     };                            
//         var ParametersTownsRequest = { 
//                                 url:  "http://api.novaposhta.ua/v2.0/json/Address/getCities/",
//                                 method: "POST", 
//                                 data: JSON.stringify(DataTownsRequest), 
//                                headers: { 
//                                             "Content-Type": "application/json; charset=utf-8" 
//                                        } 
//                                 }; 
//             //----------------------------------------------------------------------------------------------------------
//             //ajax request
//             //----------------------------------------------------------------------------------------------------------
//             $http(ParametersTownsRequest).then(function(response) {

//                 callback(response);

//             }, function myError(response) {
//             });     //----------------------------------------------------------------------------------------------------------
//         }
//     }
// });
NewpostApp.factory('requestTownsListService' , function ($http) {
    return{
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

             }, function myError(response) {
             });
        }        
    }
});
       