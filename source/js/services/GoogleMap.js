
//GoogleMap factory
//----------------------------------------------------------------------------------------------------------------------
NewpostApp.factory('GoogleMap' , function () {

    //to start default parameters
    var mapOptions = {
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    //arr = [ [] , [] , [] , [] ];
    var arr = [];

    var image = {
        url: ''
    };

    function initMap() {
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

    return{

        DefaultStartMap: function () {
            mapOptions.zoom = 6;
            mapOptions.center = {lat: 49.2120943, lng: 31.9254968};

            initMap();
        },

        AddAllMarkers: function (ArrayCoordinates) {

            mapOptions.zoom = 11;
            mapOptions.center = {lat: ArrayCoordinates[0][4].FocusLat,
                lng: ArrayCoordinates[0][4].FocusLng};

            arr = ArrayCoordinates;

            initMap();

        },

        AddDepartmentMarkers: function (ArrayCoordinates) {
            mapOptions.zoom = 11;
            mapOptions.center = {lat: ArrayCoordinates[0][4].FocusLat,
                lng: ArrayCoordinates[0][4].FocusLng};

            arr = ArrayCoordinates;

            initMap();

        },

        AddPostmashineMarkers: function (ArrayCoordinates) {
            mapOptions.zoom = 11;
            mapOptions.center = {lat: ArrayCoordinates[0][4].FocusLat,
                lng: ArrayCoordinates[0][4].FocusLng};

            arr = ArrayCoordinates;

            initMap();

        }

    }

});//NewpostApp.factory('GoogleMap'
//----------------------------------------------------------------------------------------------------------------------
