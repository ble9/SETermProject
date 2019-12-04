
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
        lat: 35.656345,
        long: -97.470655


    },
    {
        name: "#spot2",
        interval: '',
        number: 2,
        taken: false,
        timeLeft: 0,
        lat: 35.656382,
        long: -97.470655
    }, {
        name: "#spot3",
        interval: '',
        number: 3,
        taken: false,
        timeLeft: 0,
        lat: 35.6564150,
        long: -97.470655
    }, {
        name: "#spot4",
        interval: '',
        number: 4,
        taken: false,
        timeLeft: 0,
        lat: 35.6564500,
        long: -97.470655
    }, {
        name: "#spot5",
        interval: '',
        number: 5,
        taken: false,
        timeLeft: 0,
        lat: 35.6564800,
        long: -97.470655

    }, {
        name: "#spot6",
        interval: '',
        number: 6,
        taken: false,
        timeLeft: 0,
        lat: 35.656515,
        long: -97.470600

    }, {
        name: "#spot7",
        interval: '',
        number: 7,
        taken: false,
        timeLeft: 0,
        lat: 35.656515,
        long: -97.470230

    }, {
        name: "#spot8",
        interval: '',
        number: 8,
        taken: false,
        timeLeft: 0,
        lat: 35.656515,
        long: -97.470200

    }, {
        name: "#spot9",
        interval: '',
        number: 9,
        taken: false,
        timeLeft: 0,
        lat: 35.656515,
        long: -97.470170

    }, {
        name: "#spot10",
        interval: '',
        number: 10,
        taken: false,
        timeLeft: 0,
        lat: 35.656515,
        long: -97.470140


    }
    , {
        name: "#spot11",
        interval: '',
        number: 11,
        taken: false,
        timeLeft: 0,
        lat: 35.656515,
        long: -97.470110


    }
    , {
        name: "#spot12",
        interval: '',
        number: 12,
        taken: false,
        timeLeft: 0,
        lat: 35.656515,
        long: -97.470060


    }
    




];