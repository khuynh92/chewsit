'use strict!';
////////// PREFERENCES JS //////////////////////
var prefArray = [];
var savePref = document.getElementById('save');

Restaurant.names = ['Green Leaf Vietnamese Restaurant', 'Zeeks Pizza', 'Tilikum Place Cafe', 'La Parisienne French Bakery', 'Storyville Coffee Company', 'Bang Bang Cafe', 'Mecca Cafe', 'Shaker and Spear', 'Local 360', 'Andaluca Restaurant', 'CJs Eatery', 'Some Random Bar', 'Dahlia Lounge', 'Six Seven Restaurant', 'The Crumpet Shop'];

function handlePreferences() {
  var pref = document.getElementsByName('cuisine');
  for(var i =0; i < pref.length; i++) {
    if(pref[i].checked === true) {
      prefArray.push(pref[i].value);
      console.log(pref[i].value);
    }
  }
  console.log(prefArray);

}

var lsData = localStorage.getItem('preferences');
if (lsData) {
  prefArray = JSON.parse(lsData);
} else {
  localStorage.setItem('preferences', JSON.stringify(prefArray));
}

if (savePref) {
  savePref.addEventListener('click', handlePreferences);
}

///////// END OF PREFERENCES JS /////////////////


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
function SignInConstructor(userName, userPw) { //ill get user password later / also add userPw to 
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
  //need to get the userDb from the localstorage
  //you dont have to but you can store the location of the localstorage database in a varibale to access later
  var localStorageUserDatabase = localStorage.getItem('userDatabase');
  //2nd line has to parse the local storage because you have (localstorage only take string data so you have to translate it back into an array of objects)
  var userDbParse = JSON.parse(localStorageUserDatabase); //you can just directly put localStorage.getItem('userDatabase') directly where localStorageUserDatabase is in the parse variable declaration / this variable now holds the correctly translated userDb for you to use on the homepage / can i define this gloablly somehow
  console.log(userDbParse);
  console.log(userDbParse[0].name); //have to specify the index
  console.log(userDbParse[0].pw); //have to specify the index
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
  userSignIn = []; //resets the temporary sign in array
}
function handleContactSubmit(event) {
  console.log(event);
  event.preventDefault();
  var userName = document.getElementById('userName').value;
  var userCity = document.getElementById('userCity').value;
  var userPw = document.getElementById('userPw').value;
  var userCnum = parseInt(document.getElementById('userCnum').value);

  //   var userName = event.target.userName.value;
  //   var userCity = event.target.userCity.value;
  //   var userCnum = parseInt(event.target.userCnum.value);

  new AccountConstructor(userName, userCity, userCnum, userPw);
  //after here is when you you want to do local storage because this is where userDb is updated
  //first have to set item
  //1st argument is what you want to call your locale storage userDatabase
  //2nd argument is what you want to put in the localstorage but it has to be a string ergo the stringify (localstorage only accepts strings which means once you want to access the data in its correct form you have to parse it whcih is translating it back into its original form)
  localStorage.setItem('userDatabase', JSON.stringify(userDb));
  //now you want to go where you want to retrieve the data and in this case thats the sign in/home page

  //   event.target.userName.value = null;
  //   event.target.userCity.value = null;
  //   event.target.userCnum.value = null;
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

Restaurant.allRestaurants = [];
var meal = document.getElementsByName('mealtype');
var price = document.getElementsByName('dolla');
var submit = document.getElementById('submit');
var mainPrice;
var mainMeal;

///////////////////FOR ALL PAGES///////////////////////
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

//snack
new Restaurant('Storyville Coffee Company', 'cafe', 'snack', 'twodollars');
new Restaurant('snack1', 'any', 'snack', 'onedollar');
new Restaurant('snack3', 'any', 'snack', 'threedollars');

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
    console.log('matching restaurants are: ', results);
    //create a random number using the array

    // var ranNumber = Math.floor(Math.random()*results.length);
    // console.log('random index is: ' + ranNumber);
    //display random result
    // var testEl = document.getElementById('test');
    // var liEl = document.createElement('li');
    // liEl.appendChild(document.createTextNode('You\'re eating at ' + results[ranNumber].name));
    // testEl.appendChild(liEl);
    //store results in local storage
    var resultsStringify = JSON.stringify(results);
    localStorage.setItem('Results', resultsStringify);
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
      restimg.width = 960;
      restimg.height = 350;
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
