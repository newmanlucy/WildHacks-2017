/* weather station data */
var ids = [
 "KILCHICA490",
 "KILCHICA189",
 "KILCHICA491",
 "KILOAKPA9",
 "KILCHICA317",
 "KILCHICA428",
 "KILCHICA537",
 "KILCHICA535",
 "KILCHICA266",
 "KILCHICA199",
 "KILCHICA530",
 "KILCHICA130",
 "KILCHICA368",
 "KILCHICA507",
 "KILCHICA223",
 "KILCHICA231",
 "KILCHICA253",
 "KILCHICA516",
 "KILCHICA106",
 "KILCHICA366",
 "KILCHICA421",
 "KILCHICA173",
 "KILCHICA207",
 "KILCHICA489",
 "KILCHICA483",
 "KILCHICA357",
 "KILCHICA468",
 "KILCHICA221",
 "KILCHICA330",
 "KILCHICA536",
 "KILCHICA401",
 "KILCHICA470",
 "KILCHICA364",
 "KILCHICA370",
 "KILCHICA450",
 "KILCHICA166",
 "KILCHICA310",
 "KILCHICA534",
 "KILCHICA225",
 "KILCHICA37",
 "KILCHICA376",
 "KILCHICA463",
 "KILCHICA529",
 "KILCHICA495",
 "CMTI2",
 "KILCHICA291"
]

var names = [
 "Dunning",
 "Portage Park",
 "Belmont Cragin",
 "Austin",
 "North Center",
 "Avondale",
 "Logan Square",
 "Smith Park",
 "Ukrainian Village",
 "West Town",
 "Near West Side",
 "Greektown",
 "River North",
 "Near North Side",
 "Navy Pier",
 "Streeterville",
 "Gold Coast",
 "Old Town",
 "Lincoln Park",
 "Lake View",
 "Park West",
 "Wrigley Field",
 "Uptown",
 "Lincoln Square",
 "Ravenswood",
 "Andersonville",
 "Ravenswood",
 "Edgewater",
 "Rogers Park",
 "West Ridge",
 "North Park",
 "Norwood Park",
 "O'Hare",
 "Little Italy",
 "Chinatown",
 "Near South Side",
 "Grant Park",
 "Bronzeville, Back of the Yards, Kenwood",
 "North & South Lawndale",
 "Midway",
 "Beverly",
 "Roseland",
 "Pullman",
 "East Side",
 "Calumet Heights",
 "Hyde Park, Woodlawn"
]

var locations = [
 {lat: 41.948 , lng: -87.808}, // Dunning - Dunning Coniac KILCHICA490
 {lat: 41.947 , lng: -87.747}, // Portage Park - North Side KILCHICA189
 {lat: 41.920 , lng: -87.745}, // Belmont Cragin + Hermosa- Chicago KILCHICA491
 {lat: 41.897 , lng: -87.779}, // Austin - Oak Park KILOAKPA9
 {lat: 41.938 , lng: -87.684}, // North Center - Roscoe Village KILCHICA317
 {lat: 41.936 , lng: -87.731}, // Avondale - Belmont Gardens KILCHICA428
 {lat: 41.914 , lng: -87.688}, // Logan Square - Chicago KILCHICA537
 {lat: 41.892 , lng: -87.686}, // Smith Park - Ukranian Villiage KILCHICA535
 {lat: 41.897 , lng: -87.684}, //Ukrainian Village/West Town- West Town KILCHICA266
 {lat: 41.891 , lng: -87.659}, // West Town/Noble Square - West Town KILCHICA199
 {lat: 41.881 , lng: -87.658}, // Near West Side- West Loop KILCHICA530
 {lat: 41.879 , lng: -87.643}, // Near West Side/Greektown  - West Loop - Old St. Pats KILCHICA130
 {lat: 41.894 , lng: -87.641}, // River North - Central KILCHICA368
 {lat: 41.899 , lng: -87.632}, // Rush & Division/Near North - River North KILCHICA507
 {lat: 41.892 , lng: -87.613}, // Navy Pier, Streeterville - Central KILCHICA223
 {lat: 41.895 , lng: -87.627}, // Magnificent Mile, Streeterville - Central KILCHICA231
 {lat: 41.903 , lng: -87.626}, // Gold Coast - Central KILCHICA253
 {lat: 41.911 , lng: -87.644}, // Old Town, Lincoln Park - Lincoln Park KILCHICA516
 {lat: 41.924 , lng: -87.657}, // Sheffield & DePaul, Lincoln Park - Lincoln Park KILCHICA106
 {lat: 41.933 , lng: -87.661}, // Lake View - North Side KILCHICA366
 {lat: 41.932 , lng: -87.640}, // Lake View - Park West KILCHICA421
 {lat: 41.946 , lng: -87.650}, // Boystown/Wrigley Field - East Lakeview KILCHICA173
 {lat: 41.956 , lng: -87.646}, // Uptown - North Side KILCHICA207
 {lat: 41.963 , lng: -87.651}, // Uptown, Lincoln Square - Uptown KILCHICA489
 {lat: 41.969 , lng: -87.668}, // Uptown/Ravenswood - Andersonville Gateway (Ravenswood) KILCHICA483
 {lat: 41.980 , lng: -87.666}, // Andersonville - Andersonville KILCHICA357
 {lat: 41.974 , lng: -87.677}, // Ravenswood - Chicago KILCHICA468
 {lat: 41.986 , lng: -87.655}, //Edgewater - North Side KILCHICA221
 {lat: 42.008 , lng: -87.663}, //Rogers Park - North Side KILCHICA330
 {lat: 42.007 , lng: -87.694}, //West Ridge - Chicago KILCHICA536
 {lat: 41.970 , lng: -87.714}, //North Park & Albany Park - North Side KILCHICA401
 {lat: 41.979 , lng: -87.790}, //Norwood Park, Jefferson Park, Edgebrook, Edison Park - Chicago KILCHICA470
 {lat: 41.962 , lng: -87.846}, //O'Hare - O'Hare KILCHICA364
 {lat: 41.870 , lng: -87.684}, //Little Italy - Near West Side KILCHICA370
 {lat: 41.848 , lng: -87.648}, //Bridgeport, Chinatown, Armour Square - South Side KILCHICA450
 {lat: 41.857 , lng: -87.623}, //South Loop/Grant Park/Near South Side - Near South Side KILCHICA166
 {lat: 41.865 , lng: -87.622}, //Loop/Grant Park, Near East Side - South Loop (Central Station) KILCHICA310
 {lat: 41.835 , lng: -87.629}, //Bronzeville, Back of the Yards, Kenwood - Illinois Tech KILCHICA534
 {lat: 41.820 , lng: -87.701}, //Little Village, North Lawndale, South Lawndale, Brighton Park, Archer Heights, Midway, West Elsdon, Gage Park - Brighton Park KILCHICA225
 {lat: 41.778 , lng: -87.743}, //Midway, West Lawn, Ashburn, Gage Park, West Elsdon - Midway Airport, South West side of Chicago KILCHICA37
 {lat: 41.716 , lng: -87.676}, // Beverly, Auburn Gresham, Morgan Park - Beverly KILCHICA376
 {lat: 41.688 , lng: -87.606}, //Roseland (Washington Heights), West Pullman, Pullman, Riverdale - Historic Pullman KILCHICA463
 {lat: 41.699 , lng: -87.593}, //Pullman, Southeast Side - South Deering - Harborside Golf KILCHICA529
 {lat: 41.692 , lng: -87.533}, // East Side, Southeast Side - East Side of Chicago KILCHICA495
 {lat: 41.73  , lng: -87.538}, //Calumet Heights, South Chicago, Chatham, Avalon Park, South Shore, Grand Crossing - Marine CMTI2
 {lat: 41.801 , lng: -87.601}, //Hyde Park, Woodlawn, Grand Crossing, Jackson Park, Washington Park, Kenwood, Grand Boulevard KILCHICA291
]


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
