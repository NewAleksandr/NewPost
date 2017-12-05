
NewpostApp.directive('map', function () {

    return{
        restrict: 'E',
        replace: true,
        template: '<div id="map" style="height: 500px"></div>',
        scope: {
            control: '='
        },
        link: function ($scope, element, attrs) {

            var mapOptions = {
                scrollwheel: false,
                zoom: 6,
                center: {lat: 49.2120943, lng: 31.9254968},
                mapTypeId: google.maps.MapTypeId.TERRAIN
            };

            var image = {
                url: ''
            };

            var arr = [];

            function initMap(arr){

                var map = new google.maps.Map(document.getElementById('map'), mapOptions);

                for(var i = 0; i < arr.length; i++){
                    var arrCoord = arr[i];

                    if(arrCoord[0].indexOf("Відділення")){
                        image.url = 'images/DepartmentFlag.png';
                    }

                    if(arrCoord[0].indexOf("Поштомат")){
                        image.url = 'images/PostmashineFlag.png';
                    }

                    var marker = new google.maps.Marker({
                        position: {lat: arrCoord[1], lng: arrCoord[2]},
                        map: map,
                        icon: image
                    });

                    attachSecretMessage(marker, arrCoord[0]);
                }

                function attachSecretMessage(marker, secretMessage) {

                    var infowindow = new google.maps.InfoWindow({
                        content: secretMessage
                    });

                    marker.addListener('click', function() {
                        infowindow.open(marker.get('map'), marker);
                    });

                }

            }

            initMap(arr);

            $scope.$watch('control', function (val) {

                if(val){

                    var arr = val;

                    mapOptions.zoom = 11;
                    mapOptions.center = {lat: arr[0][4].FocusLat,
                                         lng: arr[0][4].FocusLng};

                    initMap(arr);
                }

            })

        }//end link

    };//end return

});//end NewpostApp.directive('map', function ()