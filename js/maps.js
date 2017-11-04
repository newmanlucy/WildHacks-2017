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
  var bounds = new google.maps.LatLngBounds();
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i], bounds);
    }
    map.fitBounds(bounds);
  }
}

function createMarker(place, bounds) {
  console.log("place");
  console.log(place);
  console.log("bounds");
  console.log(bounds);
  var placeLoc = place.geometry.location;
  var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: image, 
    title: place.name,
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });

  bounds.extend(place.geometry.location);
}

var hp = {lat: 41.8, lng: -87.6};

function arrayToLoc(array) {
  if (array.length != 2) {
    return null;
  }
  else {
    return {lat: array[0], lng: array[1]};
  }
}

function commaSepToLoc(string) {
  return arrayToLoc(string.split(','));
}

function showHerePlaces(neigborhoodLoc, data) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: neigborhoodLoc,
    zoom: 15
  });

  map.data.addGeoJson(neighborhoods_json);

  map.data.setStyle({
    fillColor: 'blue',
    strokeWeight: 1
  });

  var bounds = new google.maps.LatLngBounds();

  var hereResults = listHereData(data)

  for (var i = 0; i < hereResults.length; i++) {
    var place = hereResults[i];
    var placeLoc = place["position"];
    var image = {
        url: place["icon"],
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
    var marker = new google.maps.Marker({
      map: map,
      position: place["position"],
      icon: image, 
      title: place["title"],
    });

    console.log(marker);

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });

    bounds.extend(place["position"]);
  }
  map.fitBounds(bounds);
}

function listHereData(data) {
  console.log(data);
  var sites = [];
  for (var i = 0; i < data.results.items.length; i++) {
    sites.push({"title": data.results.items[i].title, 
      "position": arrayToLoc(data.results.items[i].position),
      "icon": data.results.items[i].icon});
  }
  console.log(sites);
  return sites;
}
