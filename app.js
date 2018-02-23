'use strict';

Restaurant.names = ['Green Leaf Vietnamese Restaurant', 'Zeeks Pizza', 'Tilikum Place Cafe', 'La Parisienne French Bakery', 'Storyville Coffee Company'];
Restaurant.allRestaurants = [];

//constructor function for Restaurants
function Restaurant(name, cuisine, mealtype, price) {
  this.name = name;
  this.cuisine = cuisine;
  this.mealtype = mealtype;
  this.price = price;
  Restaurant.allRestaurants.push(this);
  
}

new Restaurant('Green Leaf Vietnamese Restaurant', 'southeast-asian', 'dinner', 'twodollars' );
new Restaurant('Zeeks Pizza', 'italian', '');