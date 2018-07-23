var ourLocation;
var view;
var map;

function init(){
  ourLocation = ol.proj.fromLonLat([37.330813, -121.894095]);

  view = new ol.View({
    center: ourLocation,
    zoom: 6
  });

  map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}

function goHome(){
  view.animate({
    center: ourLocation,
    duration: 3000
  });
}

window.onload = init;
