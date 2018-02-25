'use strict!';

////////////////////RESULTS PAGE VARIABLES///////////////
var yesbtn = document.getElementById('yes');
var nobtn = document.getElementById('no');
var btngroup = document.getElementById('btngroup');
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
//Italian
new Restaurant('Zeeks Pizza', 'italian', 'lunch', 'twodollars');
new Restaurant('La Vita E Bella', 'italian', 'lunch', 'twodollars');
new Restaurant('Buca di Beppo Italian Restaurant', 'italian', 'lunch', 'twodollars');

new Restaurant('dueminuti healthy pasta', 'italian', 'lunch', 'onedollar');
new Restaurant('Mondello Ristorante Italiano', 'italian', 'lunch', 'onedollar');
new Restaurant('Pagliacci Pizza', 'italian', 'lunch', 'onedollar');

new Restaurant('Il Fornaio Seattle', 'italian', 'lunch', 'threedollars');
new Restaurant('Tulio', 'italian', 'lunch', 'threedollars');
new Restaurant('Agrodolce', 'italian', 'lunch', 'threedollars');

//Cafe
new Restaurant('The 5 Point Cafe', 'cafe', 'lunch', 'twodollars', 'images/$$5point_lunch.jpg');
new Restaurant('Tilikum Place Cafe', 'cafe', 'lunch', 'twodollars', 'images/$$tiltkim_lunch.jpg');
new Restaurant('CJs Eatery', 'cafe', 'lunch', 'twodollars', 'images/$$CJs_lunch.jpeg');

new Restaurant('Citizen', 'cafe', 'lunch', 'onedollar', 'images/$citizen_lunch.jpeg');
new Restaurant('Bang Bang Cafe', 'cafe', 'lunch', 'onedollar', 'images/$bang_lunch.jpeg');
new Restaurant('The Other Coast Cafe', 'cafe', 'lunch', 'onedollar', 'images/$otherCoast_lunch.jpeg');

new Restaurant('Dahlia Lounge', 'cafe', 'lunch', 'threedollars', 'images/$$$dahlia_lunch.jpeg');
new Restaurant('Lola', 'cafe', 'lunch', 'threedollars', 'images/$$$lola_lunch.jpeg');
new Restaurant('Collections Cafe', 'cafe', 'lunch', 'threedollars', 'images/$$$collections_lunch.jpeg');

//Mexican
new Restaurant('Agave Cocina and Tequilas', 'mexican', 'lunch', 'twodollars');
new Restaurant('Villa Escondida', 'mexican', 'lunch', 'twodollars');
new Restaurant('Cactus South Lake Union', 'mexican', 'lunch', 'twodollars');

new Restaurant('dueminuti healthy pasta', 'italian', 'lunch', 'onedollar');
new Restaurant('Mondello Ristorante Italiano', 'italian', 'lunch', 'onedollar');
new Restaurant('Pagliacci Pizza', 'italian', 'lunch', 'onedollar');

new Restaurant('Gracia', 'mexican', 'lunch', 'threedollars');
new Restaurant('Agave Cocina and Tequilas', 'mexican', 'lunch', 'threedollars');
new Restaurant('Casco Antiguo', 'mexican', 'lunch', 'threedollars');


//south east asian
new Restaurant('Pho Viet Anh', 'southeastasian', 'lunch', 'onedollar');
new Restaurant('Mae Phim Thai Restaurant', 'southeastasian', 'lunch', 'onedollar');
new Restaurant('Green Leaf Vietnamese Restaurant', 'southeastasian', 'lunch', 'onedollar');

new Restaurant('Stateside', 'southeastasian', 'lunch', 'twodollar');
new Restaurant('Bahn Thai Restaurant', 'southeastasian', 'lunch', 'twodollar');
new Restaurant('Monsoon Seattle', 'southeastasian', 'lunch', 'twodollar');

//fastfood

new Restaurant('Dicks Drive-In', 'fastfood', 'lunch', 'onedollar');
new Restaurant('Taxi Dogs', 'fastfood', 'lunch', 'onedollar');
new Restaurant('Potbelly Sandwich Shop', 'fastfood', 'lunch', 'onedollar');

new Restaurant('Lunchbox Laboratory', 'fastfood', 'lunch', 'twodollar');
new Restaurant('Happy Garden Fast Food', 'fastfood', 'lunch', 'twodollar');
new Restaurant('MOD Pizza', 'fastfood', 'lunch', 'twodollar');


//dinner
//Italian
new Restaurant('Zeeks Pizza', 'italian', 'dinner', 'twodollars');
new Restaurant('La Vita E Bella', 'italian', 'dinner', 'twodollars');
new Restaurant('Buca di Beppo Italian Restaurant', 'italian', 'dinner', 'twodollars');

new Restaurant('dueminuti healthy pasta', 'italian', 'dinner', 'onedollar');
new Restaurant('Mondello Ristorante Italiano', 'italian', 'dinner', 'onedollar');
new Restaurant('Pagliacci Pizza', 'italian', 'dinner', 'onedollar');

new Restaurant('Il Fornaio Seattle', 'italian', 'dinner', 'threedollars');
new Restaurant('Tulio', 'italian', 'dinner', 'threedollars');
new Restaurant('Agrodolce', 'italian', 'dinner', 'threedollars');

//Cafe
new Restaurant('The 5 Point Cafe', 'cafe', 'dinner', 'twodollars');
new Restaurant('Tilikum Place Cafe', 'cafe', 'dinner', 'twodollars');
new Restaurant('CJs Eatery', 'cafe', 'dinner', 'twodollars');

new Restaurant('Citizen', 'cafe', 'dinner', 'onedollar');
new Restaurant('Bang Bang Cafe', 'cafe', 'dinner', 'onedollar');
new Restaurant('The Other Coast Cafe', 'cafe', 'dinner', 'onedollar');

new Restaurant('Dahlia Lounge', 'cafe', 'dinner', 'threedollars');
new Restaurant('Lola', 'cafe', 'dinner', 'threedollars');
new Restaurant('Collections Cafe', 'cafe', 'dinner', 'threedollars');

//Mexican
new Restaurant('Agave Cocina and Tequilas', 'mexican', 'dinner', 'twodollars');
new Restaurant('Villa Escondida', 'mexican', 'dinner', 'twodollars');
new Restaurant('Cactus South Lake Union', 'mexican', 'dinner', 'twodollars');

new Restaurant('dueminuti healthy pasta', 'italian', 'dinner', 'onedollar');
new Restaurant('Mondello Ristorante Italiano', 'italian', 'dinner', 'onedollar');
new Restaurant('Pagliacci Pizza', 'italian', 'dinner', 'onedollar');

new Restaurant('Gracia', 'mexican', 'dinner', 'threedollars');
new Restaurant('Agave Cocina and Tequilas', 'mexican', 'dinner', 'threedollars');
new Restaurant('Casco Antiguo', 'mexican', 'dinner', 'threedollars');


//south east asian
new Restaurant('Pho Viet Anh', 'southeastasian', 'dinner', 'onedollar');
new Restaurant('Mae Phim Thai Restaurant', 'southeastasian', 'dinner', 'onedollar');
new Restaurant('Green Leaf Vietnamese Restaurant', 'southeastasian', 'dinner', 'onedollar');

new Restaurant('Stateside', 'southeastasian', 'dinner', 'twodollar');
new Restaurant('Bahn Thai Restaurant', 'southeastasian', 'dinner', 'twodollar');
new Restaurant('Monsoon Seattle', 'southeastasian', 'dinner', 'twodollar');

//fastfood

new Restaurant('Dicks Drive-In', 'fastfood', 'dinner', 'onedollar');
new Restaurant('Taxi Dogs', 'fastfood', 'dinner', 'onedollar');
new Restaurant('Potbelly Sandwich Shop', 'fastfood', 'dinner', 'onedollar');

new Restaurant('Lunchbox Laboratory', 'fastfood', 'dinner', 'twodollar');
new Restaurant('Happy Garden Fast Food', 'fastfood', 'dinner', 'twodollar');
new Restaurant('MOD Pizza', 'fastfood', 'dinner', 'twodollar');


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
      results = resultsWithPref;
    }
    
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
  btngroup.removeChild(yesbtn);
  btngroup.removeChild(nobtn);
}

function nobtnHandler(event) {
  event.preventDefault();
  if (numTimesShown < 3 && numTimesShown < restItems.length) {
    displayImage();
  }
  else {
    alert ('Sorry we could not find a match for you.');
    disableBtn();
    window.location.replace("http://www.yelp.com");
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
