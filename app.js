// APP.JS

'use strict';

////////////////////RESULTS PAGE VARIABLES///////////////
var yesbtn = document.getElementById('yes');
var nobtn = document.getElementById('no');
var btngroup = document.getElementById('btngroup');
var orderbtn = document.getElementById('order');
var reservebtn = document.getElementById('reserve');
var imgEl = document.getElementById('restimg');
//search google restaurants for places that match
var map, service, infoWindow, restInfo, foodType1, foodType2, foodType3, mainPrice, mainMeal;
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
///////////////////////// PREFERENCES ///////////////////////////
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

///////// START OF HOMEPAGE /////////////////

var userDb = [];
var userSignIn = [];
var createAccount = document.getElementById('createButton');
var signIn = document.getElementById('signInButton');
var signInButtonPopup = document.getElementById('signInButtonPopup');
var popUp = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];

function AccountConstructor(userName, userCity, userCnum, userPw) {
  this.name = userName;
  this.city = userCity;
  this.cnum = userCnum;
  this.pw = userPw;
  userDb.push(this);
  console.log(userDb);
}
function SignInConstructor(userName, userPw) {
  this.name = userName;
  this.pw = userPw;
  userSignIn.push(this);
  console.log(userSignIn);
}
function handleSignInPopup(event) {
  console.log(event);
  event.preventDefault();
  var userName = document.getElementById('popUserName').value;
  var userPw = document.getElementById('popUserPw').value;
  new SignInConstructor(userName, userPw);
  var localStorageUserDatabase = localStorage.getItem('userDatabase');
  var userDbParse = JSON.parse(localStorageUserDatabase);
  console.log(userDbParse);
  console.log(userDbParse[0].name);
  console.log(userDbParse[0].pw);
  if(userDbParse.length === 0) {
    console.log(userDbParse.length);
    alert('please create an account');
  } else {
    for (var i = 0; i < userDbParse.length; i++) {
      if (userSignIn[i].name === userDbParse[i].name && userSignIn[i].pw === userDbParse[i].pw) {
        alert('welcome');
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
function handleContactSubmit(event) {
  console.log(event);
  event.preventDefault();
  var userName = document.getElementById('userName').value;
  var userCity = document.getElementById('userCity').value;
  var userPw = document.getElementById('userPw').value;
  var userCnum = parseInt(document.getElementById('userCnum').value);
  new AccountConstructor(userName, userCity, userCnum, userPw);
  userName = document.getElementById('userName').value = '';
  userCity = document.getElementById('userCity').value = '';
  userPw = document.getElementById('userPw').value = '';
  userCnum = document.getElementById('userCnum').value = '';
}

///////////// HOMEPAGE POPUP ///////////////
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

///////////// HOMEPAGE EVENT LISTENERS ///////////////

if (signInButtonPopup) {
  signInButtonPopup.addEventListener('click', handleSignInPopup);
}
if (signIn) {
  signIn.addEventListener('click', handleSignIn);
}
if (createAccount) {
  createAccount.addEventListener('click', handleContactSubmit);
} 
///////////// END OF HOMEPAGE ///////////////

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
    var choiceNumber = 1;
    localStorage.setItem('choiceNumber', JSON.stringify(choiceNumber));

    setTimeout(function() {
      window.open('results.html','_self');
    }, 1300);
  }
}

//function that creates random choices 
function randomRestaurant () {
  var userLatLng = JSON.parse(localStorage.getItem('current-location'));
  var userLocation = new google.maps.LatLng(userLatLng.lat, userLatLng.lng);
  var userPrice = JSON.parse(localStorage.getItem('price'));
  if (mainMeal === 'dessert') {
    foodType1 = 'dessert in seattle';
    foodType2 = 'dessert in seattle';
    foodType3 = 'dessert in seattle';
  } else if (mainMeal === 'breakfast') {
    foodType1 = 'breakfast';
    foodType2 = 'breakfast';
    foodType3 = 'breakfast';
  } else {
    if (localStorage.preferences) {
      if (localStorage.preferences.length > 2) {
        foodType1 = preferences[Math.floor(Math.random() * preferences.length)];
        foodType2 = preferences[Math.floor(Math.random() * preferences.length)];
        foodType3 = preferences[Math.floor(Math.random() * preferences.length)];
      } else {
        foodType1 = 'Restaurant';
        foodType2 = 'Restaurant';
        foodType3 = 'Restaurant';
      }
    } else {
      foodType1 = 'Restaurant';
      foodType2 = 'Restaurant';
      foodType3 = 'Restaurant';
    }
  }
  //creating map
  map = new google.maps.Map(document.getElementById('test'), {
    center: userLocation,
    zoom: 12
  });

  infoWindow = new google.maps.InfoWindow();
  restInfo = new google.maps.InfoWindow();

  var request1 = {
    location: userLocation,
    radius: 1500,
    query: foodType1,
    minPriceLevel: userPrice,
    maxPriceLevel: userPrice
  };
  var request2 = {
    location: userLocation,
    radius: '500',
    query: foodType2,
    minPriceLevel: userPrice,
    maxPriceLevel: userPrice
  };
  var request3 = {
    location: userLocation,
    radius: '500',
    query: foodType3,
    minPriceLevel: userPrice,
    maxPriceLevel: userPrice
  };
  service = new google.maps.places.PlacesService(document.getElementById('map'));
  service.textSearch(request1, callback);
  service.textSearch(request2, callback);
  service.textSearch(request3, callback);
  var marker = new google.maps.Marker({
    position: userLatLng,
    map: map
  });
}

function callback (results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    restResults = [];
    for (var i = 0; i < results.length; i++) {
      restResults.push(results[i]);
      var item=document.createElement('li');
      item.appendChild(document.createTextNode(results[i].name, results[i].geometry.location));
      document.getElementById('results').appendChild(item);
    }
    finalThree.push(restResults[Math.floor(Math.random() * restResults.length)]);
    localStorage.setItem('final-three', JSON.stringify(finalThree));
  }
}


function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  restInfo.setContent(place.name + '<br><br>' + place.formatted_address);
  restInfo.open(map, marker);

}

function displayLocation() {
  var choiceEl = document.getElementById('choice-number');
  var restEl = document.getElementById('resthead');
  var h3El = document.getElementById('address');
  var finalThreeParsed = JSON.parse(localStorage.getItem('final-three'));
  console.log(finalThreeParsed[0].place_id);
  var choiceNumber = JSON.parse(localStorage.getItem('choiceNumber'));
  var starEl = document.getElementById('star');
  if(choiceNumber === 1) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: finalThreeParsed[0].geometry.location,
      zoom: 16
    });
    restInfo = new google.maps.InfoWindow();
    createMarker(finalThreeParsed[0]);
    choiceEl.textContent = choiceNumber;
    restEl.textContent = finalThreeParsed[0].name;
    h3El.textContent = finalThreeParsed[0].formatted_address;
    starEl.textContent = finalThreeParsed[0].rating;
    service = new google.maps.places.PlacesService(map);
    service.getDetails({
      placeId: finalThreeParsed[0].place_id
    }, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        imgEl.src = place.photos[Math.floor(Math.random()*place.photos.length)].getUrl({
          'maxWidth': 400,
         
      });;
      }
    });
  }
  if(choiceNumber === 2) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: finalThreeParsed[1].geometry.location,
      zoom: 16
    });
    restInfo = new google.maps.InfoWindow();
    createMarker(finalThreeParsed[1]);
    choiceEl.textContent = choiceNumber;
    restEl.textContent = finalThreeParsed[1].name;
    h3El.textContent = finalThreeParsed[1].formatted_address;
    starEl.textContent = finalThreeParsed[1].rating;
    service = new google.maps.places.PlacesService(map);
    service.getDetails({
      placeId: finalThreeParsed[1].place_id
    }, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        imgEl.src = place.photos[Math.floor(Math.random()*place.photos.length)].getUrl({
          'maxWidth': 400,
         
      });
      }
    });
  }
  if(choiceNumber === 3) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: finalThreeParsed[2].geometry.location,
      zoom: 16
    });
    restInfo = new google.maps.InfoWindow();
    createMarker(finalThreeParsed[2]);
    choiceEl.textContent = choiceNumber;
    restEl.textContent = finalThreeParsed[2].name;
    h3El.textContent = finalThreeParsed[2].formatted_address;
    starEl.textContent = finalThreeParsed[2].rating;
    service = new google.maps.places.PlacesService(map);
    service.getDetails({
      placeId: finalThreeParsed[2].place_id
    }, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        imgEl.src = place.photos[Math.floor(Math.random()*place.photos.length)].getUrl({
          'maxWidth': 400,
         
      });;
      }
    });
  }
  if(choiceNumber > 2) {
    disableBtn();
  }
}

function yesbtnHandler(event) {
  event.preventDefault();
  if (btngroup.lastElementChild !== btngroup.firstElementChild) {
    disableBtn();
  }
  yesbtn.removeEventListener('click', yesbtnHandler);
  window.location = '#order';
}

function disableBtn() {
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

function changeImage() {
  var thisPlace;
  var choiceNumber = JSON.parse(localStorage.getItem('choiceNumber'));
  var finalThreeParsed = JSON.parse(localStorage.getItem('final-three'));
  if  (choiceNumber === 1) {
    thisPlace = finalThreeParsed[0].place_id;
  } else if (choiceNumber === 2) {
    thisPlace = finalThreeParsed[1].place_id;
  } else {
    thisPlace = finalThreeParsed[2].place_id;
  }
  service = new google.maps.places.PlacesService(map);
  service.getDetails({
    placeId: thisPlace
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      imgEl.src = place.photos[Math.floor(Math.random()*place.photos.length)].getUrl({
        'maxWidth': 400, 
    });
    }
  });
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
  imgEl.addEventListener('click', changeImage)
}