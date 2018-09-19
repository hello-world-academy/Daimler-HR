function getDealers() {
  $('#dealers').empty();
  
  var city = $('#inputCity').val();
  var url = "https://cors-anywhere.herokuapp.com/https://api.mercedes-benz.com/dealer/v1/dealers?" +
            "apikey=44782adb-5df3-4024-9b92-ed26a25d0dac" +
            "&pageSize=3" +
            "&countryIsoCode=DE" +
            "&city=" + city;
  
  $.getJSON(url, function( data ){    
    $.each(data["dealers"], function(index, dealer){
      addDealer(dealer);
    });
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log("error " + textStatus);
    console.log("incoming Text " + jqXHR.responseText);
  }); 
}


function addDealer(dealer) {
  var contact = dealer["communicationChannels"];
  console.log(contact);
  
  var html = '<div class="card mb-1">' +
             '<div class="card-body">' +
             '<h5 class="card-title">' + dealer['legalName'] + '</h5>' +
             '<p class="card-text"><a href=tel:" ' + contact['phone'] + '"">' + contact['phone'] + '</a></p>' +
             '<a href="' + contact['website'] + '" target="_blank" class="card-link">' + contact['website'] +'</a>' +
             '</div>' +
             '</div>';
  
  $("#dealers").append(html);
}


$( document ).ready(function() {
  console.log("reload");
  
  $("#dealerForm").submit(function(event) {
    event.preventDefault();
  });
});