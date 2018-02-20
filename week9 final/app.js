

function initMap() {
	var Ponce= {
		lat: 18.0111,
		lng: -66.6141
	};
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom:5,
		center:Ponce
	});
	var marker = new google.maps.Marker({
		position: PONCE,
		map: map,
		title: "PONCE"
	});
	marker.addListener("HOVER", function() {
		map.setZoom(5);
		map.setCenter(marker.getPosition());
	});
	
	map.addListener("HOVER", function(event) {
		console.log(event.latLng.lat());
		console.log(event.latLng.lng());
	});
}

      
 function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat:18.0111, lng: -66.6141},
          zoom: 15,
          mapTypeId: 'satellite'
        });
        map.setTilt(50);
      }

 function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
		
          center: {lat:18.0111, lng: -66.6141}
        });

        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
	 
      }


function task() {

	var item    = document.getElementById('taskInput').value
	
	var text    = document.createTextNode(item)

	var newItem = document.createElement('li')

	newItem.appendChild(text)
	document.getElementById('do').appendChild(newItem)
	
	
	
}
