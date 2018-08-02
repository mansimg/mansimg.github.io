var map;
var center;
function initMap() {
  var SacredHeart = {lat: 37.316621,lng: -121.874288};
  var LoavesandFishes = {lat:37.356708,lng:-121.846042};
  var EvergreenLibrary = {lat:37.314105,lng:-121.795815};
  var BerryessaLibrary = {lat:37.394350, lng:-121.840903};
  var EmmaPrusch = {lat:37.339817, lng:-121.846696};
  var HumaneSociety = {lat:37.421970, lng:-121.887290};
  var HappyHollow = {lat:37.325866,lng:-121.861374};
  center = {lat: 37.330644, lng:-121.897144};
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: center
  });
  var SacredHeart = new google.maps.Marker({
    position: SacredHeart,
    animation: google.maps.Animation.DROP,
    map: map
  });
  var LoavesandFishes = new google.maps.Marker({
    position: LoavesandFishes,
    animation: google.maps.Animation.DROP,
    map:map
  });
  var EvergreenLibrary = new google.maps.Marker({
    position: EvergreenLibrary,
    animation: google.maps.Animation.DROP,
    map:map
  });
  var BerryessaLibrary = new google.maps.Marker({
    position: BerryessaLibrary,
    animation: google.maps.Animation.DROP,
    map: map
  });
  var EmmaPrusch = new google.maps.Marker({
    position: EmmaPrusch,
    animation: google.maps.Animation.DROP,
    map: map
  });
  var HumaneSociety = new google.maps.Marker({
    position: HumaneSociety,
    animation: google.maps.Animation.DROP,
    map: map
  });
  var HappyHollow = new google.maps.Marker({
    position: HappyHollow,
    animation: google.maps.Animation.DROP,
    map: map
  });

  var directory = ["<b>SacredHeart:</b> 1381 S 1st St San Jose, CA 95110",
                  "<b>EvergreenLibrary:</b> 2635 Aborn Rd, San Jose, CA 95121",
                  "<b>LoavesandFishes</b> 2150 Alum Rock Avenue, San Jose, CA 95116",
                  "<b>BerryessaLibrary:</b> 3355 Noble Ave, San Jose, CA 95132",
                  "<b>EmmaPrusch:</b> 647 King Rd, San Jose, CA 95116",
                  "<b>HumaneSociety:</b> 901 Ames Ave, Milpitas, CA 95035",
                  "<b>HappyHollow:</b> 748 Story Rd, San Jose, CA 95112"];
  var names = ["SacredHeart","EvergreenLibrary","LoavesandFishes", "BerryessaLibrary", "EmmaPrusch", "HumaneSociety", "HappyHollow", "Washington DC"];
  var markers = [SacredHeart, EvergreenLibrary, LoavesandFishes, BerryessaLibrary, EmmaPrusch, HumaneSociety, HappyHollow];
  for(var x = 0; x < names.length; x++){
    attachInfo(markers[x], directory[x]);
  }
}
function attachInfo(marker, info) {
  var infowindow = new google.maps.InfoWindow({
    content: info
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  });
}

