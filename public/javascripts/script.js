document.addEventListener('DOMContentLoaded', () => {
  console.log('IronGenerator JS imported successfully!');
}, false);

let geocoder;
let map;
function initialize() {
  geocoder = new google.maps.Geocoder();
  const latlng = new google.maps.LatLng(-34.397, 150.644);
  const mapOptions = {
    zoom: 14,
    center: latlng,
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function codeAddress() {
  const address = document.getElementById('address').innerText;
  geocoder.geocode({ address }, (results, status) => {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        map,
        position: results[0].geometry.location,
      });
    } else {
      alert(`Geocode was not successful for the following reason: ${  status}`);
    }
  });
}
initialize();
codeAddress();
