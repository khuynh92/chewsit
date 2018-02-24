'use strict';

var prefArray = [];
var savePref = document.getElementById('save');

function handlePreferences() {
  var pref = document.getElementById('bakery').checked = true;
  pref.value = 'bakery';
  prefArray.push(pref);

  console.log(pref.value);
  console.log(prefArray);

}

handlePreferences();


savePref.addEventListener('submit', handlePreferences);