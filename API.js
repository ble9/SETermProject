function getDirections(D) {
    const HTTP = new XMLHttpRequest();
    var url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + spots[0].O+ "&destination=" + D  + "&key=AIzaSyB5-aBegPH9L5SN5xfY9lY8O4eUdPZDA_0";
    HTTP.open("GET",url,true);
    HTTP.send();
    var response = JSON.parse(HTTP.responseText);
    console.log(response);

}
