var map;

function initMap()
{
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

  fetch('markers.json')
    .then(function(response){return response.json()})
    .then(plotMarkers);

}

var markers;
var marker;
var bounds;

function plotMarkers(m)
{
  markers = [];
  bounds = new google.maps.LatLngBounds();

  m.forEach(function (marker) {
    var position = new google.maps.LatLng(marker.lat, marker.lng);
    var infowindow = new google.maps.InfoWindow({
          content: marker.description
    }); 

    
    marker =  new google.maps.Marker({
              position: position,
              map: map,
              animation: google.maps.Animation.DROP
              })
    marker.addListener('click', function() {
    infowindow.open(map, marker);
    });
  
    
    bounds.extend(position);
  });
  map.fitBounds(bounds);
}
      
[
  {
    "lat": 53.817680, 
    "lng": -1.537657,
    "description": "<p>Oakwood text</p>"
  },
  {
    "lat": 53.790123,
    "lng": -1.53243,
     "description": "lorem ipsum"
  },
  {
    "lat": 53.756745,
    "lng": -1.5309087,
     "description": "lorem ipsum"
  },
  {
    "lat": 53.6474675,
    "lng": -1.49564554,
     "description": "lorem ipsum"
  },
  {
    "lat": 53.69123456,
    "lng": -1.6545466,
    "description": "lorem ipsum"
  }        
]