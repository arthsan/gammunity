document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

const latitude = document.getElementById('latitude').innerText;
const longitude = document.getElementById('longitude').innerText;
let lati = parseFloat(latitude);
let long = parseFloat(longitude);


function startMap() {
  const ironhackBCN = {
    lat: -23.533773,    
    lng: -46.625290,
  };
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 10,
      center: ironhackBCN
    }
  );
  const myMarker = new google.maps.Marker({
    position: {
      lat: lati,    
      lng: long,
    },
    map: map,
    title: "Event here"
  });
}

startMap();
