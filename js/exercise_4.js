// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'akmaps.019i5c30';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1IjoiYWttYXBzIiwiYSI6ImNpbDdnZTFhdzA0MXZ1a20wcTY3cWM0cmQifQ.7tzm_dXS0H9kezz4rfpOnA';

// Create the map object with your mapId and token,
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([39, -96], 4);

// Great, now we have a basic web map!

var dataFileToAdd = 'https://gist.githubusercontent.com/KAPPS-/6e6561d352f7fc062ff9f0e785367154/raw/117433d23a9f07a76122e47e70e8ffe39c816fdd/turbo.geojson';

var featureLayer = L.mapbox.featureLayer();
	featureLayer.loadURL(dataFileToAdd);
	featureLayer.addTo(map);

featureLayer.on('ready', function(){
  	this.eachLayer(function(layer){
    	layer.setIcon(L.mapbox.marker.icon({
        	"marker-color": "#8834bb",
          	"marker-size": "large",
          	"marker-symbol": "restaurant"
        }))
    })
   	map.fitBounds(featureLater.getBounds());
    

})


