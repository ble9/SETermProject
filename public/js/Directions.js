//Init the geocoder library
var geocoder = new google.maps.Geocoder();

//array to hold the geo address
var geoAddress = [];


function run(spotNumber) {  //Gets Current Location

        navigator.geolocation.getCurrentPosition(function (position) {
        latl = position.coords.latitude;
        long = position.coords.longitude;
        curr = position.coords.latitude + ", " + position.coords.longitude;
        bytutorialMap.initNavigateMap(curr, latl, long);
    });


}

//function framework
bytutorialMap = {    //Gets Directions from Google Map API
    initNavigateMap: function (curr, latl, long) {


        var mapID = "map";
        var panelDirectionID = "panel-direction";

        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;

        //initialize the map
        var map = new google.maps.Map(document.getElementById(mapID), {
            zoom: 7,
            center: {lat: latl, lng: long}
        });

        //clear the direction panel
        $("#" + panelDirectionID).html("");
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById(panelDirectionID));

        //prepare the latitude and longitude data
        start = curr;
        end = $("#txtStartingPoint").val() + ", " + $("#txtDestinationPoint").val();
        bytutorialMap.calculateAndDisplayRoute(directionsService, directionsDisplay, start, end);
    },

    //function to get the driving route
    calculateAndDisplayRoute: function (directionsService, directionsDisplay, start, end) {
        directionsService.route({
            origin: start,
            destination: end,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                alert('Directions request failed due to ' + status);
            }
        });
    },

   
}
