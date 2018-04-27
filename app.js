// APP.JS

'use strict';
///////////////////////// HOMEPAGE AND CREATE ACCOUNT VARIABLES  ///////////////////////////
var userDb = [];
var userSignIn = [];
var createAccount = document.getElementById('createButton');
var signIn = document.getElementById('signInButton');
var signInButtonPopup = document.getElementById('signInButtonPopup');
var popUp = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];
///////////////////////// RESULTS PAGE VARIABLES ///////////////////////////
var yesbtn = document.getElementById('yes');
var nobtn = document.getElementById('no');
var btngroup = document.getElementById('btngroup');
var orderbtn = document.getElementById('order');
var reservebtn = document.getElementById('reserve');
var imgEl = document.getElementById('restimg');
///////////////////////// DECLARING VARIABLES FOR MAIN PAGE ///////////////////////////
var map, service, restInfo, mainPrice, mainMeal;
var preferences = JSON.parse(localStorage.getItem('preferences'));
var path = window.location.pathname;
var page = path.split('/').pop();
var submit = document.getElementById('submit');
var currentLocation = document.getElementById('location');
var meal = document.getElementsByName('mealtype');
var price = document.getElementsByName('dolla');
var savePref = document.getElementById('save');
var restResults = [];
var finalThree = [];

///////////////////////// HOMEPAGE & CREATE USER ///////////////////////////

// Constructor Function to create multiple users
function AccountConstructor(userName, userCity, userCnum, userPw) {
  this.name = userName;
  this.city = userCity;
  this.cnum = userCnum;
  this.pw = userPw;
  userDb.push(this);
  console.log(userDb);
}

// Function for sign in
function SignInConstructor(userName, userPw) {
  this.name = userName;
  this.pw = userPw;
  userSignIn.push(this);
  console.log(userSignIn);
}

// Function to store sign in as a new SingInConstructor
function handleSignInPopup(event) {
  console.log(event);
  event.preventDefault();
  var userName = document.getElementById('popUserName').value;
  var userPw = document.getElementById('popUserPw').value;
  new SignInConstructor(userName, userPw);
  var localStorageUserDatabase = localStorage.getItem('userDatabase');
  var userDbParse = JSON.parse(localStorageUserDatabase);

  if(!userDbParse) {
    alert('please create an account');
    window.open('contact.html', '_self');
  } else {
    for (var i = 0; i < userDbParse.length; i++) {
      if (userSignIn[i].name === userDbParse[i].name && userSignIn[i].pw === userDbParse[i].pw) {
        alert('welcome');
        window.open('main.html', '_self');
        //navigate them to the main.html page
      } else {
        alert('your username or password may be incorrect. try again please');
        //navigate them to the contact.html page
      }
    }
  }
  userName = document.getElementById('popUserName').value = '';
  userPw = document.getElementById('popUserPw').value = '';
  userSignIn = [];
}

// Function which creates a new user account
function handleContactSubmit(event) {
  console.log(event);
  event.preventDefault();
  var userName = document.getElementById('userName').value;
  var userCity = document.getElementById('userCity').value;
  var userPw = document.getElementById('userPw').value;
  var userCnum = parseInt(document.getElementById('userCnum').value);
  new AccountConstructor(userName, userCity, userCnum, userPw);
  localStorage.setItem('userDatabase', JSON.stringify(userDb));
  userName = document.getElementById('userName').value = '';
  userCity = document.getElementById('userCity').value = '';
  userPw = document.getElementById('userPw').value = '';
  userCnum = document.getElementById('userCnum').value = '';
  window.open('preferences.html', '_self');
}

// Function which displays sign in pop up
function handleSignIn(event) {
  event.preventDefault();
  popUp.style.display = 'block';
  console.log('sign in button pushed');
}

if (span) {
  span.onclick = function() {
    popUp.style.display = 'none';
  };
}
window.onclick = function(event) {
  if (event.target === popUp) {
    popUp.style.display = 'none';
  }
};

///////////////////////// HOMEPAGE & CREATEUSER ///////////////////////////

///////////////////////// PREFERENCES ///////////////////////////

//function to store preferences in an array in local storage
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
  alert('Your preferences have been saved.');
  window.open('main.html','_self');
}
/////////////////////// PREFERENCES //////////////////////////

///////////////////////// MAIN & RESULTS ///////////////////////////

// Function to identify current location
function currentLocationHandler (e) {
  e.preventDefault();
  var locationCheck = document.getElementById('location-check');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(pos);
      localStorage.setItem('userLocation', JSON.stringify(pos));
      locationCheck.textContent = 'Current Location Saved!';
      locationCheck.style.color = 'rgb(18, 160, 77)';
    });
  }
}

// Function to handle user selection on main page
function sumbitHandler() {
  var locationError = document.getElementById('location-error');
  var priceError = document.getElementById('price-error');
  var mealtypeError = document.getElementById('mealtype-error');
  if (!localStorage.userLocation) {
    locationError.textContent = 'Please use your current location!';
  } else {
    locationError.textContent = '';
  }
  if (price[0].checked === false && price[1].checked === false && price[2].checked === false && price[3].checked === false) {
    priceError.textContent = 'Please select a price range!';
  } else {
    priceError.textContent = '';
  }
  //check if user selected mealtype
  if (meal[0].checked === false && meal[1].checked === false && meal[2].checked === false && meal[3].checked === false) {
    mealtypeError.textContent = 'Please select a meal type!';
  } else {
    mealtypeError.textContent = '';
  }
  if ((meal[0].checked === true || meal[1].checked === true || meal[2].checked === true || meal[3].checked === true) && (price[0].checked === true || price[1].checked === true || price[2].checked === true || price[3].checked === true) & (localStorage.userLocation.length > 0)) {
    //assign user price choice to a variable
    for (var i = 0; i < price.length; i++) {
      if (price[i].checked) {
        console.log(price[i].value + ' was clicked!');
        mainPrice = price[i].value;
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
    var choiceNumber = 1;
    localStorage.setItem('choiceNumber', JSON.stringify(choiceNumber));

    setTimeout(function() {
      window.open('results.html','_self');
    }, 1400);
  }
}

// Function that creates random choices
function randomRestaurant () {
  var foodType = [];
  var request = [];
  var userLatLng = JSON.parse(localStorage.getItem('userLocation'));
  var userLocation = new google.maps.LatLng(userLatLng.lat, userLatLng.lng);
  if (mainMeal === 'dessert') {
    if (mainPrice === '4') {
      mainPrice = '3';
    }
    for (var i = 0; i < 3; i++) {
      foodType[i] = 'dessert in seattle';
    }
  } else if (mainMeal === 'breakfast') {
    for (var j = 0; j < 3; j++) {
      foodType[j] = 'breakfast';
    }
  } else {
    if (localStorage.preferences) {
      if (localStorage.preferences.length > 2) {
        for (var l = 0; l < 3; l++) {
          foodType[l] = preferences[Math.floor(Math.random() * preferences.length)];
        }
      } else {
        for (var m = 0; m < 3; m++) {
          foodType[m] = 'restaurant';
        }
      }
    } else {
      for (var n = 0; n < 3; n++) {
        foodType[n] = 'restaurant';
      }
    }
  }

  // Creating three new requests for restaurants around the users location
  for (var o = 0; o < 3; o++) {
    request[o] = {
      location: userLocation,
      radius: 500,
      query: foodType[o],
      minPriceLevel: mainPrice,
      maxPriceLevel: mainPrice
    };
  }

  service = new google.maps.places.PlacesService(document.getElementById('map'));
  for (var p = 0; p < 3; p++) {
    service.textSearch(request[p], callback);
  }
}

// Function for the ladder argument of the textSearch feature from google API
function callback (results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    restResults = [];
    for (var i = 0; i < results.length; i++) {
      restResults.push(results[i]);
    }
    // Creating final choices, and ensuring final choices are not equal
    if (finalThree.length === 0) {
      finalThree[0] = restResults[Math.floor(Math.random() * restResults.length)];
    } else if (finalThree.length === 1) {
      do {finalThree[1] = restResults[Math.floor(Math.random() * restResults.length)];}
      while (finalThree[0] === finalThree[1]);
    } else {
      do { finalThree[2] = restResults[Math.floor(Math.random() * restResults.length)]; }
      while (finalThree[2] === finalThree[1] || finalThree[2] === finalThree[0] || finalThree[0] === finalThree[1]);
    }
    localStorage.setItem('final-three', JSON.stringify(finalThree));
  }
}

// Function which creates a marker
function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  restInfo.setContent(place.name + '<br><br>' + place.formatted_address);
  restInfo.open(map, marker);

}

// Function for displaying the location on the results page
function displayLocation() {
  var theCenter, theMarker, theName, theAddress, theRating, thePlaceId;
  var choiceEl = document.getElementById('choice-number');
  var restEl = document.getElementById('resthead');
  var h3El = document.getElementById('address');
  var finalThreeParsed = JSON.parse(localStorage.getItem('final-three'));
  var choiceNumber = JSON.parse(localStorage.getItem('choiceNumber'));
  var starEl = document.getElementById('star');
  //assign variables the values depending on which restaurant needs to be shown
  if (choiceNumber === 1) {
    theCenter = finalThreeParsed[0].geometry.location;
    theMarker = finalThreeParsed[0];
    theName = finalThreeParsed[0].name;
    theAddress = finalThreeParsed[0].formatted_address;
    theRating = finalThreeParsed[0].rating;
    thePlaceId = finalThreeParsed[0].place_id;
  } else if (choiceNumber === 2) {
    theCenter = finalThreeParsed[1].geometry.location;
    theMarker = finalThreeParsed[1];
    theName = finalThreeParsed[1].name;
    theAddress = finalThreeParsed[1].formatted_address;
    theRating = finalThreeParsed[1].rating;
    thePlaceId = finalThreeParsed[1].place_id;
  } else {
    theCenter = finalThreeParsed[2].geometry.location;
    theMarker = finalThreeParsed[2];
    theName = finalThreeParsed[2].name;
    theAddress = finalThreeParsed[2].formatted_address;
    theRating = finalThreeParsed[2].rating;
    thePlaceId = finalThreeParsed[2].place_id;
  }
  //creating the map and text on results page
  map = new google.maps.Map(document.getElementById('map'), {
    center: theCenter,
    zoom: 16
  });
  restInfo = new google.maps.InfoWindow();
  createMarker(theMarker);
  choiceEl.textContent = choiceNumber;
  restEl.textContent = theName;
  h3El.textContent = theAddress;
  starEl.textContent = theRating;
  service = new google.maps.places.PlacesService(map);
  service.getDetails({
    placeId: thePlaceId
  }, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      imgEl.src = place.photos[Math.floor(Math.random() * place.photos.length)].getUrl({
        'maxHeight': 400,
      });
    }
  });

  if (choiceNumber > 2) {
    disableBtn();
  }
}

// Function for the yes button
function yesbtnHandler(event) {
  event.preventDefault();
  if (btngroup.lastElementChild !== btngroup.firstElementChild) {
    disableBtn();
  }
  yesbtn.removeEventListener('click', yesbtnHandler);
  window.location = '#order';
}

// Function to remove the try again button so users cannot keep retrying
function disableBtn() {
  btngroup.removeChild(nobtn);
}

// Function to handle the no button
function nobtnHandler(event) {
  event.preventDefault();
  var choiceNumber = JSON.parse(localStorage.getItem('choiceNumber'));
  choiceNumber++;
  localStorage.setItem('choiceNumber', choiceNumber);
  displayLocation();
}

// Function to handle the order button
function orderbtnHandler(event) {
  event.preventDefault();
  alert ('Thanks your order has been submitted!');
}

// Function to handle the reserve button
function reservebtnHandler(event) {
  event.preventDefault();
  alert ('Thanks your order has been reserved!');
}

// Function which allows users to change image with a click
function changeImage() {
  var thisPlace;
  var choiceNumber = JSON.parse(localStorage.getItem('choiceNumber'));
  var finalThreeParsed = JSON.parse(localStorage.getItem('final-three'));
  if (choiceNumber === 1) {
    thisPlace = finalThreeParsed[0].place_id;
  } else if (choiceNumber === 2) {
    thisPlace = finalThreeParsed[1].place_id;
  } else {
    thisPlace = finalThreeParsed[2].place_id;
  }
  service.getDetails({
    placeId: thisPlace
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      imgEl.src = place.photos[Math.floor(Math.random()*place.photos.length)].getUrl({
        'maxWidth': 600,
      });
    }
  });
}
///////////////////////// MAIN & RESULTS ///////////////////////////

///////////////////////// ALL EVENT LISTENERS ///////////////////////////

if (signInButtonPopup) {
  signInButtonPopup.addEventListener('click', handleSignInPopup);
}
if (signIn) {
  signIn.addEventListener('click', handleSignIn);
}
if (createAccount) {
  createAccount.addEventListener('click', handleContactSubmit);
}
if (savePref) {
  savePref.addEventListener('click', handlePreferences);
}
if (currentLocation) {
  currentLocation.addEventListener('touchstart', currentLocationHandler);
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
  imgEl.addEventListener('click', changeImage);
}