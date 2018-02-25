'use strict!';


////////////////////RESULTS PAGE VARIABLES///////////////
var yesbtn = document.getElementById('yes');
var nobtn = document.getElementById('no');
var orderbtn = document.getElementById('order');
var reservebtn = document.getElementById('reserve');
// var resthead = document.getElementById('resthead');

////////// PREFERENCES JS //////////////////////
var savePref = document.getElementById('save');

Restaurant.names = ['Green Leaf Vietnamese Restaurant', 'Zeeks Pizza', 'Tilikum Place Cafe', 'La Parisienne French Bakery', 'Storyville Coffee Company', 'Bang Bang Cafe', 'Mecca Cafe', 'Shaker and Spear', 'Local 360', 'Andaluca Restaurant', 'CJs Eatery', 'Some Random Bar', 'Dahlia Lounge', 'Six Seven Restaurant', 'The Crumpet Shop'];
Restaurant.namesPop = [];

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

<<<<<<< HEAD
///////// START OF HOMEPAGE /////////////////
=======
///////////// HOME PAGE JS ///////////////////////
>>>>>>> master

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
//////////////////// END OF HOMEPAGE JS /////////////////////////////

<<<<<<< HEAD
///////////// END OF HOMEPAGE ///////////////

=======
////////////// MAIN PAGE JS /////////////////////////// 
>>>>>>> master
Restaurant.allRestaurants = [];
var meal = document.getElementsByName('mealtype');
var price = document.getElementsByName('dolla');
var submit = document.getElementById('submit');
var mainPrice;
var mainMeal;

var path = window.location.pathname;
var page = path.split('/').pop();
console.log( page );

//constructor function for Restaurants
function Restaurant(name, cuisine, mealtype, price, image) {
  this.name = name;
  this.cuisine = cuisine;
  this.mealtype = mealtype;
  this.price = price;
  this.image = image;
  Restaurant.allRestaurants.push(this);
}
//making iframes for all locations
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
new Restaurant('Zeeks Pizza', 'italian', 'lunch', 'twodollars', 'images/$zeeks_lunch.jpg');
new Restaurant('La Vita E Bella', 'italian', 'lunch', 'twodollars', 'images/pexels-photo-774487.jpeg');
new Restaurant('Buca di Beppo Italian Restaurant', 'italian', 'lunch', 'twodollars', 'images/$$buca_lunch.jpg');

new Restaurant('dueminuti healthy pasta', 'italian', 'lunch', 'onedollar', 'images/food-dinner-pasta-spaghetti-8500.jpg');
new Restaurant('Mondello Ristorante Italiano', 'italian', 'lunch', 'onedollar', 'images/pexels-photo-546945.jpeg');
new Restaurant('Pagliacci Pizza', 'italian', 'lunch', 'onedollar', 'images/pexels-photo-532779.jpeg');

new Restaurant('Il Fornaio Seattle', 'italian', 'lunch', 'threedollars', 'images/pexels-photo-263041.jpeg');
new Restaurant('Tulio', 'italian', 'lunch', 'threedollars', 'images/pexels-photo-803963.jpeg');
new Restaurant('Agrodolce', 'italian', 'lunch', 'threedollars', 'images/pexels-photo-154145.jpeg');

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
new Restaurant('Agave Cocina and Tequilas', 'mexican', 'lunch', 'twodollars', 'images/$$mexican-Huevos-Rancheros.jpg');
new Restaurant('Villa Escondida', 'mexican', 'lunch', 'twodollars', 'images/$$mexican-empanadas.jpg');
new Restaurant('Cactus South Lake Union', 'mexican', 'lunch', 'twodollars', 'images/$$mexican-grilled-pineapple-pork-burrito.jpg');

new Restaurant('Bang Bang Cafe', 'mexican', 'lunch', 'onedollar', 'images/$mexican-chicken-burritos.jpg');
new Restaurant('Rancho Bravo Tacos', 'mexican', 'lunch', 'onedollar', 'images/$mexican-beef_taco.jpg');
new Restaurant('Tenoch Mexican Grill', 'mexican', 'lunch', 'onedollar', 'images/$mexican-nachos.jpg');

new Restaurant('Gracia', 'mexican', 'lunch', 'threedollars', 'images/$$$mexican-azteca-de-oro.jpg');
new Restaurant('Agave Cocina and Tequilas', 'mexican', 'lunch', 'threedollars', 'images/$$$mexican-mango-catfish-taco.jpg');
new Restaurant('Casco Antiguo', 'mexican', 'lunch', 'threedollars', 'images/$$$mexican-quiche.jpg');


//south east asian
new Restaurant('Pho Viet Anh', 'southeastasian', 'lunch', 'onedollar', 'images/$eastasian-bean_sprout_squid.jpg');
new Restaurant('Mae Phim Thai Restaurant', 'southeastasian', 'lunch', 'onedollar', 'images/$eastasian-pot-stickers.jpg');
new Restaurant('Green Leaf Vietnamese Restaurant', 'southeastasian', 'lunch', 'onedollar', 'images/$eastasian-sesame-beef.jpg');

new Restaurant('Stateside', 'southeastasian', 'lunch', 'twodollar', 'images/$$eastasian-Lok-lak.jpg');
new Restaurant('Bahn Thai Restaurant', 'southeastasian', 'lunch', 'twodollar', 'images/$$eastasian-padthai.jpg');
new Restaurant('Monsoon Seattle', 'southeastasian', 'lunch', 'twodollar', 'images/$$eastasian-Fish-Amok.jpg');

//fastfood

new Restaurant('Dicks Drive-In', 'fastfood', 'lunch', 'onedollar', 'images/$fastfood-dicks-original.png');
new Restaurant('Taxi Dogs', 'fastfood', 'lunch', 'onedollar', 'images/$fastfood-classic-hot-dogs.png');
new Restaurant('Potbelly Sandwich Shop', 'fastfood', 'lunch', 'onedollar', 'images/$potBelly.jpeg');

new Restaurant('Lunchbox Laboratory', 'fastfood', 'lunch', 'twodollar', 'images/$$lunchBox_lunch.jpg');
new Restaurant('Happy Garden Fast Food', 'fastfood', 'lunch', 'twodollar','images/$$happyGarden_lunch.jpeg');
new Restaurant('MOD Pizza', 'fastfood', 'lunch', 'twodollar', 'images/$fastfood-margherita-pizza.jpg');


//dinner
//Italian
new Restaurant('Zeeks Pizza', 'italian', 'dinner', 'twodollars', 'images/$zeeks_dinner.jpg');
new Restaurant('La Vita E Bella', 'italian', 'dinner', 'twodollars', 'images/pexels-photo-774487.jpeg');
new Restaurant('Buca di Beppo Italian Restaurant', 'italian', 'dinner', 'twodollars', 'images/$$buca_dinner.jpg');

new Restaurant('dueminuti healthy pasta', 'italian', 'dinner', 'onedollar', 'images/food-dinner-pasta-spaghetti-8500.jpg');
new Restaurant('Mondello Ristorante Italiano', 'italian', 'dinner', 'onedollar', 'images/pexels-photo-546945.jpeg');
new Restaurant('Pagliacci Pizza', 'italian', 'dinner', 'onedollar', 'images/pexels-photo-532779.jpeg');

new Restaurant('Il Fornaio Seattle', 'italian', 'dinner', 'threedollars', 'images/pexels-photo-263041.jpeg');
new Restaurant('Tulio', 'italian', 'dinner', 'threedollars', 'images/pexels-photo-803963.jpeg');
new Restaurant('Agrodolce', 'italian', 'dinner', 'threedollars', 'images/pexels-photo-154145.jpeg');

//Cafe
new Restaurant('The 5 Point Cafe', 'cafe', 'dinner', 'twodollars', 'images/$$5point_dinner.jpg');
new Restaurant('Tilikum Place Cafe', 'cafe', 'dinner', 'twodollars', 'images/$$tiltkim_dinner.jpg');
new Restaurant('CJs Eatery', 'cafe', 'dinner', 'twodollars', 'images/$$CJs_dinner.jpeg');

new Restaurant('Citizen', 'cafe', 'dinner', 'onedollar', 'images/$citizen_dinner.jpeg');
new Restaurant('Bang Bang Cafe', 'cafe', 'dinner', 'onedollar', 'images/$bang_dinner.jpeg');
new Restaurant('The Other Coast Cafe', 'cafe', 'dinner', 'onedollar', 'images/$otherCoast_dinner.jpeg');

new Restaurant('Dahlia Lounge', 'cafe', 'dinner', 'threedollars', 'images/$$$dahlia_dinner.jpeg');
new Restaurant('Lola', 'cafe', 'dinner', 'threedollars', 'images/$$$lola_dinner.jpeg');
new Restaurant('Collections Cafe', 'cafe', 'dinner', 'threedollars', 'images/$$$collections_dinner.jpeg');

//Mexican
new Restaurant('Agave Cocina and Tequilas', 'mexican', 'dinner', 'twodollars', 'images/$$mexican-Huevos-Rancheros.jpg');
new Restaurant('Villa Escondida', 'mexican', 'dinner', 'twodollars', 'images/$$mexican-empanadas.jpg');
new Restaurant('Cactus South Lake Union', 'mexican', 'dinner', 'twodollars', 'images/$$mexican-grilled-pineapple-pork-burrito.jpg');

new Restaurant('Bang Bang Cafe', 'mexican', 'dinner', 'onedollar', 'images/$mexican-chicken-burritos.jpg');
new Restaurant('Rancho Bravo Tacos', 'mexican', 'dinner', 'onedollar', 'images/$mexican-beef_taco.jpg');
new Restaurant('Tenoch Mexican Grill', 'mexican', 'dinner', 'onedollar', 'images/$mexican-nachos.jpg');

new Restaurant('Gracia', 'mexican', 'dinner', 'threedollars', 'images/$$$mexican-azteca-de-oro.jpg');
new Restaurant('Agave Cocina and Tequilas', 'mexican', 'dinner', 'threedollars', 'images/$$$mexican-mango-catfish-taco.jpg');
new Restaurant('Casco Antiguo', 'mexican', 'dinner', 'threedollars', 'images/$$$mexican-quiche.jpg');


//south east asian
new Restaurant('Pho Viet Anh', 'southeastasian', 'dinner', 'onedollar', 'images/$eastasian-bean_sprout_squid.jpg');
new Restaurant('Mae Phim Thai Restaurant', 'southeastasian', 'dinner', 'onedollar', 'images/$eastasian-pot-stickers.jpg');
new Restaurant('Green Leaf Vietnamese Restaurant', 'southeastasian', 'dinner', 'onedollar', 'images/$eastasian-sesame-beef.jpg');

new Restaurant('Stateside', 'southeastasian', 'dinner', 'twodollar', 'images/$$eastasian-Lok-lak.jpg');
new Restaurant('Bahn Thai Restaurant', 'southeastasian', 'dinner', 'twodollar', 'images/$$eastasian-padthai.jpg');
new Restaurant('Monsoon Seattle', 'southeastasian', 'dinner', 'twodollar', 'images/$$eastasian-Fish-Amok.jpg');

//fastfood

new Restaurant('Dicks Drive-In', 'fastfood', 'lunch', 'onedollar', 'images/$fastfood-dicks-original.png');
new Restaurant('Taxi Dogs', 'fastfood', 'lunch', 'onedollar', 'images/$fastfood-classic-hot-dogs.png');
new Restaurant('Potbelly Sandwich Shop', 'fastfood', 'lunch', 'onedollar', 'images/$potBelly.jpeg');

new Restaurant('Lunchbox Laboratory', 'fastfood', 'lunch', 'twodollar', 'images/$$lunchBox_lunch.jpg');
new Restaurant('Happy Garden Fast Food', 'fastfood', 'lunch', 'twodollar','images/$$happyGarden_lunch.jpeg');
new Restaurant('MOD Pizza', 'fastfood', 'lunch', 'twodollar', 'images/$fastfood-margherita-pizza.jpg');

for (var z = 0; z < Restaurant.allRestaurants.length; z++) {
  Restaurant.namesPop.push(Restaurant.allRestaurants[z].name.split(' ').join('+'));
  Restaurant.allRestaurants[z].iframe = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCXvS2M8YF3R6sN_KnqTKS-guj4Aoh4sOU&q=' + Restaurant.namesPop[z] + ',Seattle+WA';
}

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


    //creating random restaurant choice:
    restChoice = [];
    var index1 = Math.floor(Math.random() * results.length);
    restChoice[0] = results[index1];
    do {
      var index2 = Math.floor(Math.random() * results.length);
      restChoice[1] = results[index2];
      var index3 = Math.floor(Math.random() * results.length);
      restChoice[2] = results[index3];
    } while (index1 === index2 || index1 === index3 || index2 === index3);
    var choiceNumber = 1;
    localStorage.setItem('choiceNumber', choiceNumber);
    var restChoiceStringify = JSON.stringify(restChoice);
    localStorage.setItem('Results', restChoiceStringify);
    window.open('results.html','_self');

  }
  //Create button/logic for multiple tries
}

if (page === 'main.html'){
  submit.addEventListener('click', sumbitHandler);
}

///////////////////RESULTS PAGE//////////////////////////////////////
var restChoice;

if(page === 'results.html'){

  if (localStorage.Results) {
    var strRestChoice = localStorage.getItem('Results');
    restChoice = JSON.parse(strRestChoice);
  }

  yesbtn.addEventListener('click', yesbtnHandler);
  nobtn.addEventListener('click', nobtnHandler);
  orderbtn.addEventListener('click', orderbtnHandler);
  reservebtn.addEventListener('click', reservebtnHandler);

  // Display the first image.
  displayImage();
}

function displayImage() {
  var choiceNumber = JSON.parse(localStorage.getItem('choiceNumber'));
  var restimg = document.getElementById('restimg');
  var map = document.getElementById('map');
  if (choiceNumber === 1) {
    restimg.src = restChoice[0].image;
    map.firstElementChild.src = restChoice[0].iframe;
  } else if (choiceNumber === 2) {
    restimg.src = restChoice[1].image;
    map.firstElementChild.src = restChoice[1].iframe;
  } else if (choiceNumber === 3) {
    restimg.src = restChoice[2].image;
    map.firstElementChild.src = restChoice[2].iframe;
  } else {
    alert('You ran out of choices!');
    restimg.src = restChoice[2].image;
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
  var choiceNumber = JSON.parse(localStorage.getItem('choiceNumber'));
  choiceNumber++;
  localStorage.setItem('choiceNumber', choiceNumber); 
  displayImage();

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
