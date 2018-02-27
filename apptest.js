'use strict';


//search google restaurants for places that match
var map, service, infoWindow, restInfo, foodType, mainPrice, mainMeal;

var preferences = JSON.parse(localStorage.getItem('preferences'));
var path = window.location.pathname;
var page = path.split('/').pop();

var submit = document.getElementById('submit');
var currentLocation = document.getElementById('current-location');
var meal = document.getElementsByName('mealtype');
var price = document.getElementsByName('dolla');
var savePref = document.getElementById('save');

function handlePreferences() {
  var prefArray = [];
  var pref = document.getElementsByName('cuisine');
  for(var i =0; i < pref.length; i++) {
    if(pref[i].checked === true) {
      prefArray.push(pref[i].value);
      console.log(pref[i].value);
      pref[i].checked = false;
    }
  }
  localStorage.setItem('preferences', JSON.stringify(prefArray));
  console.log(prefArray);
}

if (savePref) {
  savePref.addEventListener('click', handlePreferences);
}


function currentLocationHandler () {
  console.log('clicked me!');
  //HTML5 geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(pos);
      localStorage.setItem('current-location', JSON.stringify(pos));
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    //No support for geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function sumbitHandler() {
  if (price[0].checked === false && price[1].checked === false && price[2].checked === false && price[3].checked === false) {
    alert('please choose a price range!');
  }
  //check if user selected mealtype
  if (meal[0].checked === false && meal[1].checked === false && meal[2].checked === false && meal[3].checked === false) {
    alert('please choose a meal type!');
  }
  if ((meal[0].checked === true || meal[1].checked === true || meal[2].checked === true || meal[3].checked === true) && (price[0].checked === true || price[1].checked === true || price[2].checked === true || price[3].checked === true)) {
    //assign user price choice to a variable
    for (var i = 0; i < price.length; i++) {
      if (price[i].checked) {
        console.log(price[i].value + ' was clicked!');
        mainPrice = price[i].value;
        JSON.stringify(localStorage.setItem('price', mainPrice));
        price[i].checked = false;
        break;
      }
    }
    //assign user mealtype choice to a variable
    for (var j = 0; j < meal.length; j++) {
      if (meal[j].checked) {
        console.log(meal[j].value + ' was clicked!');
        mainMeal = meal[j].value;
        meal[j].checked = false;
        break;
      }
    }
    window.open('results.html','_self');
  }
}



function displayLocation() {
  var userLatLng = JSON.parse(localStorage.getItem('current-location'));
  var userLocation = new google.maps.LatLng(userLatLng.lat, userLatLng.lng);
  var price = JSON.parse(localStorage.getItem('price'));
  if (localStorage.preferences) {
    foodType = preferences[Math.floor(Math.random() * preferences.length)];
  } else {
    foodType = 'Restaurant';
  }
  //creating map
  map = new google.maps.Map(document.getElementById('map'), {
    center: userLocation,
    zoom: 12
  });

  infoWindow = new google.maps.InfoWindow();
  restInfo = new google.maps.InfoWindow();

  var request = {
    location: userLocation,
    radius: '500',
    query: foodType,
    foodType: 'restaurant',
    minPriceLevel: price,
    maxPriceLevel: price
  };
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}
var restResults = [];
function callback (results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      restResults.push(results[i]);
      
    }
    var ranRest = restResults[Math.floor(Math.random()*restResults.length)];
    createMarker(ranRest);
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    restInfo.setContent(place.name);
    restInfo.open(map, this);
  });
}


if (currentLocation) {
  currentLocation.addEventListener('click', currentLocationHandler);
}

if (submit) {
  submit.addEventListener('click', sumbitHandler);
}

if(page === 'results.html'){
  displayLocation();
}