


$(document).ready(function()
{
  $('#spot1').hover(function()
   {
         $('.parking-lot').css('background-image','url("parkinglotSpot1.jpg")');
         }).mouseleave(function(){
        jQuery('.parking-lot').css("background-image", "url('parkinglotMain.jpg')"); 
   });
  ;
});

