$(document).ready(function() {
  // opslag
  var storage = window.localStorage;

  // ophalen lijst
  var birthdaylist = JSON.parse(storage.getItem('birthdays'));

  // als er geen lijst is, maak lege lijst
  if(!birthdaylist) {
    birthdaylist = [];
  }

  if(birthdaylist.length == 0) {
    // laat leeg ding zien
    $('.legebirthdaybox').removeClass('d-none');
  } else {
    $('.legebirthdaybox').addClass('d-none');
    // we gaan blokken maken
    $.each(birthdaylist, function(bi, birthday) {
      var html = '<div class="birthdaybox container-fluid" id="birthdaybox-'+bi+'">';
  			html += '<div class="row">';
  				html += '<div class="col-2 nomargin">';
  					html += '<img alt="cakeicon" class="cakeicon" src="img/White cake.png">';
  				html += '</div>';
  				html += '<div class="col-6 nomargin">';
  					html += '<div class="nomargin">';
  						html += '<p class="font-weight-bold">'+birthday.name+'</p>';
  						html += '<p>'+birthday.date+'</p>';
  					html += '</div>';
  				html += '</div>';
  				html += '<div class="col-4 nomargin">';
  					html += '<img alt="deleteicon" class="deleteicon" src="img/delete white.png">';
  				html += '</div>';
  			html += '</div>';
  		html += '</div>';

      $('#birthdayList').append(html);

      $('#birthdaybox-'+bi).find('.deleteicon').on('click', function(event) {
        birthdaylist.splice(bi, 1);
        storage.setItem('birthdays', JSON.stringify(birthdaylist));
        $('#birthdaybox-'+bi).remove();

        if(birthdaylist.length == 0) {
          // laat leeg ding zien
          $('.legebirthdaybox').removeClass('d-none');
        }
      });
    });
  }

});
