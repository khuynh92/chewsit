'use strict!';

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
span.onclick = function() {
  popUp.style.display = "none";
};
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