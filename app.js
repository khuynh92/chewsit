'use strict!';


////////////////////RESULTS PAGE VARIABLES///////////////
var yesbtn = document.getElementById('yes');
var nobtn = document.getElementById('no');
var orderbtn = document.getElementById('order');
var reservebtn = document.getElementById('reserve');
var resthead = document.getElementById('resthead');

////////// PREFERENCES JS //////////////////////
var savePref = document.getElementById('save');

Restaurant.names = ['Green Leaf Vietnamese Restaurant', 'Zeeks Pizza', 'Tilikum Place Cafe', 'La Parisienne French Bakery', 'Storyville Coffee Company', 'Bang Bang Cafe', 'Mecca Cafe', 'Shaker and Spear', 'Local 360', 'Andaluca Restaurant', 'CJs Eatery', 'Some Random Bar', 'Dahlia Lounge', 'Six Seven Restaurant', 'The Crumpet Shop'];


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
///////// END OF PREFERENCES JS /////////////////

///////////// HOME PAGE JS ///////////////////////

var userDb = [];
var createAccount = document.getElementById('createButton');
var signIn = document.getElementById('signInButton');
var signInButtonPopup = document.getElementById('signInButtonPopup');
var popUp = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];

function Constructor(userName, userCity, userCnum) {
  this.name = userName;
  this.city = userCity;
  this.cnum = userCnum;
  userDb.push(this);
  console.log(userDb);
}
function handleContactSubmit(event) {
  console.log(event);
  event.preventDefault();
  var userName = document.getElementById('userName').value;
  var userCity = document.getElementById('userCity').value;
  var userCnum = parseInt(document.getElementById('userCnum').value);

  //   var userName = event.target.userName.value;
  //   var userCity = event.target.userCity.value;
  //   var userCnum = parseInt(event.target.userCnum.value);

  new Constructor(userName, userCity, userCnum);

//   event.target.userName.value = null;
//   event.target.userCity.value = null;
//   event.target.userCnum.value = null;
}

///////////// HOMEPAGE POPUP ///////////////
function handleSignIn(event) {
  event.preventDefault();
  popUp.style.display = 'block';
  console.log('sign in button pushed');
}
function handleSignInPopup(event) {
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
if (signInButtonPopup) {
  signInButtonPopup.addEventListener('click', handleSignInPopup);
}
if (signIn) {
  signIn.addEventListener('click', handleSignIn);
}
if (createAccount) {
  createAccount.addEventListener('click', handleContactSubmit);
}
//////////////////// END OF HOMEPAGE JS /////////////////////////////

////////////// MAIN PAGE JS /////////////////////////// 
Restaurant.allRestaurants = [];
var meal = document.getElementsByName('mealtype');
var price = document.getElementsByName('dolla');
var submit = document.getElementById('submit');
var mainPrice;
var mainMeal;

var path = window.location.pathname;
var page = path.split('/').pop();
console.log( page );

////////////////////RESULTS PAGE///////////////
var yesbtn = document.getElementById('yes');
var nobtn = document.getElementById('no');
var orderbtn = document.getElementById('order');
var reservebtn = document.getElementById('reserve');
var resthead = document.getElementById('resthead');

//constructor function for Restaurants
function Restaurant(name, cuisine, mealtype, price, image) {
  this.name = name;
  this.cuisine = cuisine;
  this.mealtype = mealtype;
  this.price = price;
  this.image = image;
  Restaurant.allRestaurants.push(this);
}

//breakfast
new Restaurant('Tilikum Place Cafe', 'breakfast', 'breakfast', 'twodollars', 'images/$$tilikumplace_breakfast.jpg');
new Restaurant('Local 360', 'breakfast', 'breakfast', 'twodollars', 'images/$$local360_breakfast.jpg');
new Restaurant('CJs Eatery', 'breakfast', 'breakfast', 'twodollars', 'images/$$cjseatery_breakfast.jpg');
new Restaurant('Some Random Bar', 'breakfast', 'breakfast', 'twodollars', 'images/$$somerandombar_breakfast.jpg');

new Restaurant('Bang Bang Cafe', 'breakfast', 'breakfast', 'onedollar', 'images/$bangbang_breakfast.jpg');
new Restaurant('The Crumpet Shop', 'breakfast', 'breakfast', 'onedollar', 'images/$crumpetshop_breakfast.jpg');
new Restaurant('Mecca Cafe', 'breakfast', 'breakfast', 'onedollar', 'images/$mecca_breakfast.jpg');
new Restaurant('La Parisienne French Bakery', 'breakfast', 'breakfast', 'onedollar', 'images/$laparis_breakfast.jpg');

new Restaurant('Shaker and Spear', 'breakfast', 'breakfast', 'threedollars', 'images/$$$shakerandspear_breakfast.jpg');
new Restaurant('Andaluca Restaurant', 'breakfast', 'breakfast', 'threedollars', 'images/$$$andaluca_breakfast.jpg');
new Restaurant('Dahlia Lounge', 'breakfast', 'breakfast', 'threedollars', 'images/$$$dahlialounge_breakfast.jpg');
new Restaurant('Six Seven Restaurant', 'breakfast', 'breakfast', 'threedollars', 'images/$$$sixseven_breakfast.jpg');

//lunch
new Restaurant('Zeeks Pizza', 'italian', 'lunch', 'twodollars');
new Restaurant('lunch1', 'any', 'lunch', 'onedollar');
new Restaurant('lunch3', 'any', 'lunch', 'threedollars');

//dinner
new Restaurant('Green Leaf Vietnamese Restaurant', 'southeast-asian', 'dinner', 'twodollars' );
new Restaurant('dinner1', 'any', 'dinner', 'onedollar');
new Restaurant('dinner3', 'any', 'dinner', 'threedollars');

//dessert
new Restaurant('La Parisienne French Bakery', 'bakery', 'dessert', 'onedollar');
new Restaurant('dessert2', 'any', 'dessert', 'twodollars');
new Restaurant('dessert3', 'any', 'dessert', 'threedollars');


function sumbitHandler() {
  var results = [];
  //check if user selected price range
  if (price[0].checked === false && price[1].checked === false && price[2].checked === false) {
    alert('please choose a price range!');
  }
  //check if user selected mealtype
  if (meal[0].checked === false && meal[1].checked === false && meal[2].checked === false && meal[3].checked === false & meal[4].checked === false) {
    alert('please choose a meal type!');
  }
  // run meal matcher when both price and mealtype are selected
  if ((meal[0].checked === true || meal[1].checked === true || meal[2].checked === true || meal[3].checked === true || meal[4].checked === true) && (price[0].checked === true || price[1].checked === true || price[2].checked === true)) {
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
    //look through all restaurants that match users choice, and store them in an array
    for (var k = 0; k < Restaurant.allRestaurants.length; k++) {
      if (Restaurant.allRestaurants[k].mealtype === mainMeal && Restaurant.allRestaurants[k].price === mainPrice) {
        results.push(Restaurant.allRestaurants[k]);
      }
    }
    var localStoragePreferencesParsed = JSON.parse(localStorage.getItem('preferences'));
    //checking if preferences matches results
    if (localStorage.preferences) {
      var resultsWithPref = [];
      for (var l = 0; l < localStoragePreferencesParsed.length; l++) {
        for (var m = 0; m < results.length; m ++) {
          if (results[m].cuisine === localStoragePreferencesParsed[l]) {
            resultsWithPref.push(results[m]);
          }
        }
      }
    }
    console.log(resultsWithPref);
    console.log(results);
    results = resultsWithPref;
    console.log(resultsWithPref);

    var resultsStringify = JSON.stringify(results);
    localStorage.setItem('Results', resultsStringify);

    window.open('results.html','_self');

  }
  //Create button/logic for multiple tries
}

if (page === 'main.html'){
  submit.addEventListener('click', sumbitHandler);
}

//create a conditional that says "IF Restaurants.allRestaurants[i].meal === checkedvalue || Restaurants.allRestaurants[i].price === checkedvalue, then push it to the results array."

///////////////////RESULTS PAGE//////////////////////////////////////
var restItems;
var numTimesShown = 0;

if(page === 'results.html'){

  if (localStorage.Results) {
    var strRestItem = localStorage.getItem('Results');
    restItems = JSON.parse(strRestItem);
    for (var item of restItems) {
      console.log(item);
      item.displayed = false;
    }
  }

  yesbtn.addEventListener('click', yesbtnHandler);
  nobtn.addEventListener('click', nobtnHandler);
  orderbtn.addEventListener('click', orderbtnHandler);
  reservebtn.addEventListener('click', reservebtnHandler);

  // Display the first image.
  displayImage();
}

function displayImage(){
  var restimg = document.getElementById('restimg');
  var unique = false;

  while ( unique === false){
    var index = Math.floor(Math.random() * restItems.length);
    if(restItems[index].displayed === true){
      continue;
    }
    else{
      restimg.src = restItems[index].image;
      restItems[index].displayed = true;
      // restimg.width = 960;
      // restimg.height = 350;
      resthead.textContent = restItems[index].name;
      numTimesShown++;
      unique = true;
      break;
    }
  }
}

function yesbtnHandler(event) {
  event.preventDefault();
  //Disable yes/no handlers
  disableBtn();
  window.location = '#order';

}

function disableBtn() {
  yesbtn.removeEventListener('click', yesbtnHandler);
  nobtn.removeEventListener('click', yesbtnHandler);
}

function nobtnHandler(event) {
  event.preventDefault();
  if (numTimesShown < 3 && numTimesShown < restItems.length) {
    displayImage();

  }
  else {
    alert ('Sorry we could not find a match for you.');
    // window.location.href = "www.yelp.com";
  }
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

if(submit) {
  submit.addEventListener('click', sumbitHandler);
}
