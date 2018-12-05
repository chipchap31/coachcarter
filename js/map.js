function myMap() {

var myLatLng = {lat: 53.341758, lng: -6.255015};

var mapProp= {
    center:new google.maps.LatLng(myLatLng),
    zoom:15,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Dublin Institute of Design'
  });




}
