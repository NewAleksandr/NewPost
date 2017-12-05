 NewpostApp.controller('pricePageController',
     ['$scope',
      '$http',
      'requestService',
      function($scope,
              $http,
              requestService) {
              
              $scope.priceData = { 
                actualWeight: '1',
                announcedPrice: '1',
                quantityPlaces: '1'
              };
              
              $scope.packData = {
                packQuantity: '1'
              };

              $scope.returnData = {
                amountRetMoney: '1'
              };

              $scope.Pack = {
                Ref:"c5d49e74-4ea1-11e2-889f-001631fa0467"
              };

              $scope.packDoc = {
                "Ref": "1499fa48-d26e-11e1-95e4-0026b97ed48a"
              };

              $scope.SerReturn = {
                Ref:"Money"
              };

              $scope.clickTotal=false;
              $scope.clickTotalD=false;

            requestService.getServiceListAjax(function (response) {
                
                $scope.Service = response.data.data;
                $scope.typeService = $scope.Service[0];
                
                }
            );

            requestService.getReturnListAjax(function (response) {
                
                $scope.listReturn = response.data.data;
                
                }
            );

            requestService.getPackListAjax(function (response) {
                    
                $scope.listPack = response.data.data;
                $scope.newListPack = $scope.listPack.slice(1, 2);
                
                }
            );
            requestService.getTownsListAjax(function (response) {
               
                $scope.listTowns = response.data.data;
                }
            );

            requestService.getWeightListAjax(function (response) {
               
             
                $scope.W = response.data.data;
                $scope.typeDelivery = $scope.W[0];
                
                }
            );
          
             
             $scope.RequestCost = function () { 
                var CostRequest = {
                   "modelName": "InternetDocument",
                   "calledMethod": 
                      "getDocumentPrice",
                   "methodProperties":{
                          "CitySender": $scope.listPlacesSender.Ref,
                          "CityRecipient":$scope.listPlacesRecipient.Ref,
                          "Weight":$scope.priceData.actualWeight,          
                          "ServiceType":$scope.typeService.Ref,
                          "Cost":$scope.priceData.announcedPrice,
                          "CargoType":$scope.typeDelivery.Ref,
                          "SeatsAmount":$scope.priceData.quantityPlaces,

                           "PackCalculate": {
                               "PackCount": $scope.packData.packQuantity,
                               "PackRef": $scope.Pack.Ref
                            },

                          "RedeliveryCalculate":{
                             "CargoType": $scope.SerReturn.Ref,
                             "Amount": $scope.returnData.amountRetMoney
                            }                               

                          },
                       "apiKey": "3d76ec0d4321c8f2b8080d510ceba9cc"                      
                        } 

                        console.log('CostRequest', CostRequest, $scope);                
                        var ParametersCostRequest = {       
                            url: "https://api.novaposhta.ua/v2.0/json/",
                            method: "POST", 
                            data: JSON.stringify(CostRequest), 
                            headers: { 
                                      "Content-Type": "application/json; charset=utf-8" 
                                    } 
                             };                                      
                        $http(ParametersCostRequest).success(function(response) 
                          { 
                            $scope.myData=response.data;                
                            // alert($scope.myData[0].Cost);
                            $scope.total=$scope.myData[0].Cost;
                          }); 
                
                $scope.clickTotal=true;  
              }  

               $scope.RequestDocPack = function () { 
                var CostRequest = {
                   "modelName": "InternetDocument",
                   "calledMethod": 
                      "getDocumentPrice",
                   "methodProperties":{
                          "CitySender": $scope.listPlacesSender.Ref,
                          "CityRecipient":$scope.listPlacesRecipient.Ref,
                          "Weight":$scope.priceData.actualWeight,          
                          "ServiceType":$scope.typeService.Ref,
                          "Cost":$scope.priceData.announcedPrice,
                          "CargoType":$scope.typeDelivery.Ref,
                          "SeatsAmount":$scope.priceData.quantityPlaces,

                           "PackCalculate": {
                               "PackCount": $scope.packData.packQuantity,
                               "PackRef": $scope.packDoc.Ref
                            },

                          "RedeliveryCalculate":{
                             "CargoType": $scope.SerReturn.Ref,
                             "Amount": $scope.returnData.amountRetMoney
                            }                               

                          },
                       "apiKey": "3d76ec0d4321c8f2b8080d510ceba9cc"                      
                        } 

                        console.log('CostRequest', CostRequest, $scope);                
                        var ParametersCostRequest = {       
                            url: "https://api.novaposhta.ua/v2.0/json/",
                            method: "POST", 
                            data: JSON.stringify(CostRequest), 
                            headers: { 
                                      "Content-Type": "application/json; charset=utf-8" 
                                    } 
                             };                                      
                        $http(ParametersCostRequest).success(function(response) 
                          { 
                            $scope.myData=response.data;                
                            // alert($scope.myData[0].Cost);
                            $scope.totalD=$scope.myData[0].Cost;
                          }); 
              $scope.clickTotalD=true; 
              } 

}]);                                