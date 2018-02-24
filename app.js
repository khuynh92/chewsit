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

//constructor function for Restaurants
function Restaurant(name, cuisine, mealtype, price, image, iframe) {
  this.name = name;
  this.cuisine = cuisine;
  this.mealtype = mealtype;
  this.price = price;
  this.image = image;
  this.iframe = iframe;
  Restaurant.allRestaurants.push(this);
}
//breakfast
new Restaurant('Tilikum Place Cafe', 'breakfast', 'breakfast', 'twodollars', 'images/$$tilikumplace_breakfast.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.419616853272!2d-122.34991868414622!3d47.61797397918542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154f3b483be9%3A0xb8dba873b8fad944!2sTilikum+Place+Cafe!5e0!3m2!1sen!2sus!4v1519511178625');
new Restaurant('Local 360', 'breakfast', 'breakfast', 'twodollars', 'images/$$local360_breakfast.jpg' , 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.6531342494445!2d-122.34839058414644!3d47.61343397918521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154db9c55fbd%3A0xe6d87f7d254efb08!2sLocal+360!5e0!3m2!1sen!2sus!4v1519511574218');
new Restaurant('Lola', 'breakfast', 'breakfast', 'twodollars', 'images/$$cjseatery_breakfast.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.6541629230837!2d-122.34223968414642!3d47.613413979185154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154c9e055c17%3A0xd406423caf0d054e!2sLola!5e0!3m2!1sen!2sus!4v1519513183623');
new Restaurant('Some Random Bar', 'breakfast', 'breakfast', 'twodollars', 'images/$$somerandombar_breakfast.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.543023128394!2d-122.35284368414631!3d47.61557477918526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154e401b4cb3%3A0x4fef1e810ac1375c!2sSome+Random+Bar!5e0!3m2!1sen!2sus!4v1519511658297');

new Restaurant('Bang Bang Cafe', 'breakfast', 'breakfast', 'onedollar', 'images/$bangbang_breakfast.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.6261314492804!2d-122.35138778414638!3d47.61395897918502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154e07f88ee5%3A0x604e04ba588a85be!2sBang+Bang+Cafe!5e0!3m2!1sen!2sus!4v1519511880717');
new Restaurant('The Crumpet Shop', 'breakfast', 'breakfast', 'onedollar', 'images/$crumpetshop_breakfast.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.8791362598636!2d-122.34270548414658!3d47.60903977918491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab2fe891f07%3A0xea6ec7f5c2a9b794!2sThe+Crumpet+Shop!5e0!3m2!1sen!2sus!4v1519511915046');
new Restaurant('Mecca Cafe', 'breakfast', 'breakfast', 'onedollar', 'images/$mecca_breakfast.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.1045885070507!2d-122.35862668414613!3d47.62409817918588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154395570293%3A0xeef477d8d35810d2!2sThe+Mecca+Cafe+%26+Bar!5e0!3m2!1sen!2sus!4v1519512189088');
new Restaurant('La Parisienne French Bakery', 'breakfast', 'breakfast', 'onedollar', 'images/$laparis_breakfast.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.483948980646!2d-122.34880528414625!3d47.61672327918537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154edd27ff31%3A0x80956d9d62987237!2sLa+Parisienne!5e0!3m2!1sen!2sus!4v1519512232396');

new Restaurant('Shaker and Spear', 'breakfast', 'breakfast', 'threedollars', 'images/$$$shakerandspear_breakfast.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.7244308433833!2d-122.34390878414638!3d47.612047779184955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154cc3c1c9c7%3A0x1a36e12a145b0322!2sShaker+%2B+Spear!5e0!3m2!1sen!2sus!4v1519512280484');
new Restaurant('Andaluca Restaurant', 'breakfast', 'breakfast', 'threedollars', 'images/$$$andaluca_breakfast.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4831.321024460542!2d-122.33934248168842!3d47.61016377773162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154b539ba747%3A0xbf3cba605ff1722d!2sAndaluca!5e0!3m2!1sen!2sus!4v1519512410683');
new Restaurant('Dahlia Lounge', 'breakfast', 'breakfast', 'threedollars', 'images/$$$dahlialounge_breakfast.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.673193326251!2d-122.34256668414646!3d47.613043979185086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154c9e5cae49%3A0xe954e42d22a80fdd!2sDahlia+Lounge!5e0!3m2!1sen!2sus!4v1519512441964');
new Restaurant('Six Seven Restaurant', 'breakfast', 'breakfast', 'threedollars', 'images/$$$sixseven_breakfast.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.708157542192!2d-122.35442238414642!3d47.6123641791851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901552694cd685%3A0xaed4d83526dc58b!2sSix+Seven+restaurant!5e0!3m2!1sen!2sus!4v1519512472504');

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
