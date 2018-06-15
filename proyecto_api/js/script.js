
var url = 'https://api.darksky.net/forecast/' ;
var key = '85ecef46f94fe1f1a974978513c5715b' ;
var coordenadas = {
  arica: '-18.4782534,-70.31259879999999',
  stgo: '-33.4488897,-70.6692655',
  conce: '-36.8201352,-73.0443904',
  valdi: '-39.8195857,-73.2452103',

};
var queryParametros = ['exclude=[minutely,hourly,daily,alerts,flags]','lang=es','untis=auto']

$('#select').on('change', function() {
  $.ajax ( {
    url : url  + key + '/' + coordenadas[this.val()] + '&' + queryParametros[0] + queryParametros[1] + queryParametros[2],
    method: GET
  }).then(function(data){
    console.log(data);
  });

});



      // function initMap() {
      //   var uluru = {lat: -25.363, lng: 131.044};
      //   var map = new google.maps.Map(document.getElementById('map'), {
      //     zoom: 4,
      //     center: uluru
      //   });
      //   var marker = new google.maps.Marker({
      //     position: uluru,
      //     map: map
      //   });
      // }


