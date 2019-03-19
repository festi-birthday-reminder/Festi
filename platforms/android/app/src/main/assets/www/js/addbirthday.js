$(document).ready(function() {
  $('#form-add').on('submit', function(event) {
    event.preventDefault();

    // opslag
    var storage = window.localStorage;

    // ophalen lijst
    var birthdaylist = JSON.parse(storage.getItem('birthdays'));
    var birthdatList = JSON.encode

    // als er geen lijst is, maak lege lijst
    if(!birthdaylist) {
      birthdaylist = [];
    }

    //ophalen invulvelden
    var name = $('#form-add-name').val();
    var date = $('#form-add-date').val();

    // maak een niewe verjaardag
    var birthday = {
      name: name,
      date: date
    };
    console.log(birthday);

    // voeg de verjaardag toe aan de lijst
    birthdaylist.push(birthday);

    // sla de lijst op
    storage.setItem('birthdays', JSON.stringify(birthdaylist));
  });
});
