
function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function openReserveDialogue(spotNumber){
 

    $(".spot-number").html(spotNumber);

}

function openDirectionsDialogue(spotNumber){
    run(spotNumber)
    $(".spot-number2").html(spotNumber);
    $("#txtStartingPoint").val(spots[spotNumber-1].lat);

    $("#txtDestinationPoint").val(spots[spotNumber - 1].long);
    $("#btnQuery").trigger('click');
}

function saveChanges(){
// Keeps track of spot number and time user enters. 

    var spotNumber= $(".spot-number").text();
    var time= $("#input_starttime").val();

    var currentSpot = spots[spotNumber - 1];

    currentSpot.taken = true;
    var seconds = 3600 * time;
    currentSpot.timeLeft = seconds;

    console.log(currentSpot.number);
    console.log(time);

   $('#reserveModal').modal('hide');
    $("#input_starttime").val("");
   

    $(currentSpot.name).addClass("taken");

    currentSpot.interval = setInterval(function () {


        
        currentSpot.timeLeft--;
        console.log(currentSpot);
        name = currentSpot.name + "H5";

        var hours = (Math.trunc(currentSpot.timeLeft / 3600));
        var minutes = (Math.trunc((currentSpot.timeLeft % 3600) / 60));
        var secs = (Math.trunc(currentSpot.timeLeft % 3600) % 60);
          
        hours = pad(hours, 2, 0);
        minutes = pad(minutes, 2, 0);
        secs = pad(secs, 2, 0);

        $(name).text("Time Left: " + hours + ":" +  minutes+ ":" + secs );
        if (currentSpot.timeLeft < 1) {

            $(currentSpot.name).removeClass("taken");
            clearInterval(currentSpot.interval);
            currentSpot.taken = false;
            $(name).text("");
            console.log(currentSpot);
            
        }
    
    }, 1000);
}

var spots = [

    {
        name: "#spot1",
        interval:'',
        number:1,
        taken: false,
        timeLeft:0,
        lat: 35.654316,
        long: -97.470632
       

    },
    {
        name: "#spot2",
        interval: '',
        number: 2,
        taken: false,
        timeLeft: 0,
          lat: 1,
        long: 1
    }, {
        name: "#spot3",
        interval: '',
        number: 3,
        taken: false,
        timeLeft: 0,
          lat: 1,
        long: 1
    }, {
        name: "#spot4",
        interval: '',
        number: 4,
        taken: false,
        timeLeft: 0,
          lat: 1,
        long: 1
    }, {
        name: "#spot5",
        interval: '',
        number: 5,
        taken: false,
        timeLeft: 0,
          lat: 1,
        long: 1
    }, {
        name: "#spot6",
        interval: '',
        number: 6,
        taken: false,
        timeLeft: 0,
          lat: 1,
        long: 1
    }, {
        name: "#spot7",
        interval: '',
        number: 7,
        taken: false,
        timeLeft: 0,
          lat: 1,
        long: 1
    }, {
        name: "#spot8",
        interval: '',
        number: 8,
        taken: false,
        timeLeft: 0,
          lat: 1,
        long: 1
    }, {
        name: "#spot9",
        interval: '',
        number: 9,
        taken: false,
        timeLeft: 0,
          lat: 1,
        long: 1
    }, {
        name: "#spot10",
        interval: '',
        number: 10,
        taken: false,
        timeLeft: 0,
          lat: 1,
        long: 1

    }, {
        name: "#spot11",
        interval: '',
        number: 11,
        taken: false,
        timeLeft: 0,
          lat: 1,
        long: 1
    }, {
        name: "#spot12",
        interval: '',
        number: 12,
        taken: false,
        timeLeft: 0,
          lat: 1,
        long: 1
    },


];