
function load() {

    var data = Date.now() + 6000;    
    var loop = true;
    setInterval(function () {

        for (i = 0; i < spots.length; i++) {
            var currentSpot = spots[i];
            spotCheck(i+1, currentSpot);
           // if(log)
       // console.log(log);
        
        //console.log("RETRN: " + data);
       
    }
   }, 1000);

        
    
      

    
}

function pad(n, width, z) {  //Created Padding For Time
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
function openReserveDialogue(spotNumber) {  //Used when RESERVE button is pressed

    $(".spot-number").html(spotNumber);
    spotCheck();
    
    
}

function openDirectionsDialogue(spotNumber) { //Used when GET DIRECTIONS button is pressed

    run(spotNumber);
    $(".spot-number2").html(spotNumber);
    $("#txtStartingPoint").val(spots[spotNumber - 1].lat);

    $("#txtDestinationPoint").val(spots[spotNumber - 1].long);
    $("#btnQuery").trigger('click');

}

function reserve() {    //Used to Reserve spot in database
    
    var time = $("#input_starttime").val();
    var spot = $(".spot-number").text();
    
    saveChanges(time);
   
    
   
  
}
function saveChanges(time) {
   
// Keeps track of spot number and time user enters. 
    var spotNumber = $(".spot-number").text();
    var currentSpot = spots[spotNumber - 1];  //Saves Current Spot from Spot Object List
    var seconds = 3600 * time;
    spotTaken(currentSpot.number, seconds);
    currentSpot.taken = true;
    $('#reserveModal').modal('hide');
    $("#input_starttime").val("");
    
    spotTaken(currentSpot.number, seconds*1000 + Date.now());
    
}
                    //Spots Object Array
var spots = [

    {
        name: "#spot1",
        interval: '',
        number: 1,
        taken: false,
        timeLeft: 0,
        lat: 35.654156,
        long: -97.470174


    },
    {
        name: "#spot2",
        interval: '',
        number: 2,
        taken: false,
        timeLeft: 0,
        lat: 35.654157,
        long: -97.470118
    }, {
        name: "#spot3",
        interval: '',
        number: 3,
        taken: false,
        timeLeft: 0,
        lat: 35.654490,
        long: -97.470128
    }, {
        name: "#spot4",
        interval: '',
        number: 4,
        taken: false,
        timeLeft: 0,
        lat: 35.654491,
        long: -97.470077
    }, {
        name: "#spot5",
        interval: '',
        number: 5,
        taken: false,
        timeLeft: 0,
        lat: 35.654494,
        long: -97.470046

    }, {
        name: "#spot6",
        interval: '',
        number: 6,
        taken: false,
        timeLeft: 0,
        lat: 35.654494,
        long: -97.469997

    }, {
        name: "#spot7",
        interval: '',
        number: 7,
        taken: false,
        timeLeft: 0,
        lat: 35.654493,
        long: -97.469970

    }, {
        name: "#spot8",
        interval: '',
        number: 8,
        taken: false,
        timeLeft: 0,
        lat: 35.654492,
        long: -97.469927

    }, {
        name: "#spot9",
        interval: '',
        number: 9,
        taken: false,
        timeLeft: 0,
        lat: 35.654492,
        long: -97.469900

    }, {
        name: "#spot10",
        interval: '',
        number: 10,
        taken: false,
        timeLeft: 0,
        lat: 35.654491,
        long: -97.469857


    }




];