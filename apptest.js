'use strict';


////////////////////RESULTS PAGE VARIABLES///////////////
var yesbtn = document.getElementById('yes');
var nobtn = document.getElementById('no');
var btngroup = document.getElementById('btngroup');
var orderbtn = document.getElementById('order');
var reservebtn = document.getElementById('reserve');

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
var restResults = [];
var finalThree = [];

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
    randomRestaurant();
    randomRestaurant();
    randomRestaurant();
    var choiceNumber = 1;
    localStorage.setItem('choiceNumber', JSON.stringify(choiceNumber));
    // window.open('results.html','_blank');
  }
}

//function that creates random choices 
function randomRestaurant () {
  var userLatLng = JSON.parse(localStorage.getItem('current-location'));
  var userLocation = new google.maps.LatLng(userLatLng.lat, userLatLng.lng);
  var userPrice = JSON.parse(localStorage.getItem('price'));
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
    minPriceLevel: userPrice,
    maxPriceLevel: userPrice
  };
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  var marker = new google.maps.Marker({
    position: userLatLng,
    map: map
  });
}

function callback (results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      restResults.push(results[i]);   
    }
      finalThree.push(restResults[Math.floor(Math.random()*restResults.length)]);
      localStorage.setItem('final-three', JSON.stringify(finalThree));
    }
}


function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    restInfo.setContent(place.name);
    restInfo.open(map, this);
  });
}

function displayLocation() {
  var finalThreeParsed = JSON.parse(localStorage.getItem('final-three'));
  var choiceNumber = JSON.parse(localStorage.getItem('choiceNumber'));
  if(choiceNumber === 1) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: finalThreeParsed[0].geometry.location,
      zoom: 16
    });
    restInfo = new google.maps.InfoWindow();
    createMarker(finalThreeParsed[0]);
  }
  if(choiceNumber === 2) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: finalThreeParsed[1].geometry.location,
      zoom: 16
    });
    restInfo = new google.maps.InfoWindow();
    createMarker(finalThreeParsed[1]);
  }
  if(choiceNumber === 3) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: finalThreeParsed[2].geometry.location,
      zoom: 16
    });
    restInfo = new google.maps.InfoWindow();
    createMarker(finalThreeParsed[2]);
  }
  if(choiceNumber > 4) {
    alert('Out of Choices!');
  }
}

function yesbtnHandler(event) {
  event.preventDefault();
  //Disable yes/no handlers
  disableBtn();
  window.location = '#order';
}

function disableBtn() {
  btngroup.removeChild(yesbtn);
  btngroup.removeChild(nobtn);
}

function nobtnHandler(event) {
  event.preventDefault();
  var choiceNumber = JSON.parse(localStorage.getItem('choiceNumber'));
  choiceNumber++;
  localStorage.setItem('choiceNumber', choiceNumber); 
  displayLocation();

}

function orderbtnHandler(event) {
  event.preventDefault();
  alert ('Thanks your order has been submitted!');
  //window.location.href = "www.google.com";
}

function reservebtnHandler(event) {
  event.preventDefault();
  alert ('Thanks your order has been reserved!');
  //window.location.href = "www.google.com  ";
}

if (savePref) {
  savePref.addEventListener('click', handlePreferences);
}

if (currentLocation) {
  currentLocation.addEventListener('click', currentLocationHandler);
}

if (submit) {
  submit.addEventListener('click', sumbitHandler);
}

if(page === 'results.html'){
  displayLocation();
  yesbtn.addEventListener('click', yesbtnHandler);
  nobtn.addEventListener('click', nobtnHandler);
  orderbtn.addEventListener('click', orderbtnHandler);
  reservebtn.addEventListener('click', reservebtnHandler);
}