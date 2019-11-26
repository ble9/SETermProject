
function load() {
    setInterval(function () {
    }, 1000);
}

function pad(n, width, z) {  //Created Padding For Time
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
function openReserveDialogue(spotNumber) {  //Used when RESERVE button is pressed
    $(".spot-number").html(spotNumber);
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
    $(currentSpot.name).addClass("taken");

    currentSpot.interval = setInterval(function () {  //Happens Every Second
        spotTaken(currentSpot.number, seconds);
        seconds--;
        console.log(currentSpot);
        name = currentSpot.name + "H5";

        var hours = (Math.trunc(seconds / 3600));
        var minutes = (Math.trunc((seconds % 3600) / 60));
        var secs = (Math.trunc(seconds % 3600) % 60);

        hours = pad(hours, 2, 0);
        minutes = pad(minutes, 2, 0);
        secs = pad(secs, 2, 0);

        $(name).text("Time Left: " + hours + ":" + minutes + ":" + secs);
        if (seconds < 1) {
            spotTaken(currentSpot.number,0);
            $(currentSpot.name).removeClass("taken");
            clearInterval(currentSpot.interval);
            currentSpot.taken = false;
            $(name).text("");
            console.log(currentSpot);
        }

    }, 1000);
}
                    //Spots Object Array
var spots = [

    {
        name: "#spot1",
        interval: '',
        number: 1,
        taken: false,
        timeLeft: 0,
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