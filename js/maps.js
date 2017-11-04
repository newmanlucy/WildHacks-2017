function updateWeather(checkbox) {
  if (checkbox.checked)
  {
      alert(checkbox.value);
  }
  else
  {
    alert("b");
  }
}

function showPlaces(neigborhoodLoc, placeType) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: neigborhoodLoc,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
  console.log(service);

  var request = {
    location: neigborhoodLoc,
    radius: '500',
    type: [placeType]
  };

  console.log(request);
  service.nearbySearch(request, callback);
}


function callback(results, status) {
  console.log("callback");
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}