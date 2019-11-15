


function openReserveDialogue(spotNumber){
// Opens Dialogue Box
 

    $(".spot-number").html(spotNumber);

}

function saveChanges(){
// Keeps track of spot number and time user enters. 

    var spotNumber= $(".spot-number").text();
    var time= $("#input_starttime").val();
    
    console.log(spotNumber);
    console.log(time);
   $('#reserveModal').modal('hide');
   $("#input_starttime").val("");
}