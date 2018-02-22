'use strict!';

var userDb = [];
var createAccount = document.getElementById('create-account');

function Constructor(userName, userCity, userCnum) {
  this.name = userName;
  this.city = userCity;
  this.cnum = userCnum;
  userDb.push(this);
  console.log(userDb);
}

function handleContactSubmit(event) {
  console.log(event);
  var userName = document.getElementById('userName');
  var userCity = document.getElementById('userCity');
  var userCnum = document.getElementById('userCnum');

  new Constructor(userName, userCity, userCnum);
}
createAccount.addEventListener('click', handleContactSubmit);