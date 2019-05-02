document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
console.log(latitude, longitude);

function startMap() {
  const ironhackBCN = {
    lat: -23.533773,    
    lng: -46.625290,
  };
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 5,
      center: ironhackBCN
    }
  );
  const myMarker = new google.maps.Marker({
    position: {
      lat: -23.533773,    
      lng: -46.625290,
    },
    map: map,
    title: "Event here"
  });
}

startMap();
