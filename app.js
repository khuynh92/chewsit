'use strict!';

var userDb = [];
var createAccount = document.getElementById('createButton');

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
    // var userName = document.getElementById('userName').value;
    // var userCity = document.getElementById('userCity').value;
    // var userCnum = parseInt(document.getElementById('userCnum').value);

  var userName = event.target.userName.value;
  var userCity = event.target.userCity.value;
  var userCnum = parseInt(event.target.userCnum.value);

  new Constructor(userName, userCity, userCnum);

  event.target.userName.value = null;
  event.target.userCity.value = null;
  event.target.userCnum.value = null;
}
createAccount.addEventListener('click', handleContactSubmit);