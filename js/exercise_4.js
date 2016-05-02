// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'will-breitkreutz.k6fj4l3f';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1IjoiYWttYXBzIiwiYSI6ImNpbDdnZTFhdzA0MXZ1a20wcTY3cWM0cmQifQ.7tzm_dXS0H9kezz4rfpOnA';

// Create the map object with your mapId and token,
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', akmaps.019i5c30);

// Set the initial view of the map to the whole US
map.setView([39, -96], 4);

// Great, now we have a basic web map!
