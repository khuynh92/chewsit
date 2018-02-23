'use strict';

Restaurant.names = ['Green Leaf Vietnamese Restaurant', 'Zeeks Pizza', 'Tilikum Place Cafe', 'La Parisienne French Bakery', 'Storyville Coffee Company'];
Restaurant.allRestaurants = [];
var meal = document.getElementsByName('mealtype');
var price = document.getElementsByName('dolla');
var submit = document.getElementById('submit');
var mainPrice;
var mainMeal;
//constructor function for Restaurants
function Restaurant(name, cuisine, mealtype, price) {
  this.name = name;
  this.cuisine = cuisine;
  this.mealtype = mealtype;
  this.price = price;
  Restaurant.allRestaurants.push(this);
}

//breakfast
new Restaurant('Tilikum Place Cafe', 'breakfast', 'breakfast', 'twodollars');
new Restaurant('Breakfast1.1', 'any', 'breakfast', 'onedollar');
new Restaurant('Breakfast1.2', 'any', 'breakfast', 'onedollar');
new Restaurant('Breakfast1.3', 'any', 'breakfast', 'onedollar');
new Restaurant('Breakfast1.4', 'any', 'breakfast', 'onedollar');
new Restaurant('Breakfast3', 'any', 'breakfast', 'threedollars');
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
        console.log(results);
      }
    }
    //create a random number using the array
    var ranNumber = Math.floor(Math.random()*results.length);
    console.log(ranNumber);
    //display random result
    var testEl = document.getElementById('test');
    var liEl = document.createElement('li');
    liEl.appendChild(document.createTextNode('You\'re eating at ' + results[ranNumber].name));
    testEl.appendChild(liEl);
  }
  //Create button/logic for multiple tries
}

submit.addEventListener('click', sumbitHandler);

//create a conditional that says "IF Restaurants.allRestaurants[i].meal === checkedvalue || Restaurants.allRestaurants[i].price === checkedvalue, then push it to the results array."