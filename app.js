'use strict';

Restaurant.names = ['Green Leaf Vietnamese Restaurant', 'Zeeks Pizza', 'Tilikum Place Cafe', 'La Parisienne French Bakery', 'Storyville Coffee Company'];
Restaurant.allRestaurants = [];
var meal = document.getElementsByName('mealtype');
var price = document.getElementsByName('dolla');
var submit = document.getElementById('submit');

//constructor function for Restaurants
function Restaurant(name, cuisine, mealtype, price) {
  this.name = name;
  this.cuisine = cuisine;
  this.mealtype = mealtype;
  this.price = price;
  Restaurant.allRestaurants.push(this);
}

new Restaurant('Green Leaf Vietnamese Restaurant', 'southeast-asian', 'dinner', 'twodollars' );
new Restaurant('Zeeks Pizza', 'italian', 'lunch', 'twodollar');
new Restaurant('Tilikum Place Cafe', 'breakfast', 'breakfast', 'twodollars');
new Restaurant('La Parisienne French Bakery', 'bakery', 'dessert', 'onedollar');
new Restaurant('Storyville Coffee Company', 'cafe', 'snack', 'twodolla');

function sumbitHandler() {
  for (var i = 0; i < price.length; i++) {
    if (price[i].checked) {
      console.log(price[i].value + ' was clicked!');
      price[i].checked = false;
      break;
    }
  }
  for (var j = 0; j < meal.length; j++) {
    if (meal[j].checked) {
      console.log(meal[j].value + ' was clicked!');
      meal[j].checked = false;
      break;
    }
  }

}

submit.addEventListener('click', sumbitHandler);
