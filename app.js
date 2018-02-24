'use strict';
////////// PREFERENCES JS //////////////////////
var prefArray = [];
var savePref = document.getElementById('save');

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

handlePreferences();

var lsData = localStorage.getItem('preferences');
if (lsData) {
  prefArray = JSON.parse(lsData);
} else {
  localStorage.setItem('preferences', JSON.stringify(prefArray));
}

savePref.addEventListener('click', handlePreferences);

///////// END OF PREFERENCES JS /////////////////
