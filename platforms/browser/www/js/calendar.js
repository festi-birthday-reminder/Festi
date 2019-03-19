$(document).ready(function() {
  // opslag
  var storage = window.localStorage;

  // ophalen lijst
  var birthdaylist = JSON.parse(storage.getItem('birthdays'));

  // als er geen lijst is, maak lege lijst
  if(!birthdaylist) {
    birthdaylist = [];
  }

  console.log(birthdaylist);
});
