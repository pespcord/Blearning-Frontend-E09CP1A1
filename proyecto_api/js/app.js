
var proxy = 'https://cors-anywhere.herokuapp.com/';
var url = 'https://api.darksky.net/forecast/' ;
var key = '85ecef46f94fe1f1a974978513c5715b' ;


var coordenadas = {
  arica:{ lat: -18.4782534,lng: -70.31259879999999} ,
  stgo: { lat: -33.4488897,lng: -70.6692655},
  conce: { lat: -36.8201352,lng: -73.0443904},
  valdi: { lat: -39.8195857, lng: -73.2452103},
};




var image = {
    'clear-day':'https://icons.wxug.com/i/c/v4/clear.svg',
    'clear-night':'https://icons.wxug.com/i/c/v4/nt_clear.svg',
    'partly-cloudy-day':'https://icons.wxug.com/i/c/v4/partlycloudy.svg',
    'partly-cloudy-night':'https://icons.wxug.com/i/c/v4/nt_hazy.svg',
    'cloudy':'https://icons.wxug.com/i/c/v4/cloudy.svg',
    'rain':'https://icons.wxug.com/i/c/v4/rain.svg'
  }


function initMap() {
  var location = null;
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: location
  });

  marker = new google.maps.Marker({
    position: location,
    map: map
  });
}



var queryParametros = ['exclude=[minutely,hourly,daily,alerts,flags]','lang=es','untis=auto']

$('#select').on('change', function() {
  map.setCenter(coordenadas[$(this).val()]);
  marker.setMap(null);
  marker = new google.maps.Marker({
    position: (coordenadas[$(this).val()]),
    map: map
  });

  $.ajax ( {
    url: proxy + 'https://api.darksky.net/forecast/'+ key +'/' + location.lat + ',' + location.lng + '?' + queryParametros[0] + '&' + queryParametros[1] + '&' + queryParametros[2],
    method: 'GET'
  }).then(function(data){
    console.log(data);
     map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 8
    });

    marker = new google.maps.Marker({
      position: location,
      map: map
    });
    $('#resumen').text(parseInt(data.currently.temperature) + '° ' + data.currently.summary);
    $('.img-responsive').attr('src',image[data.currently.icon]);
  });

});




