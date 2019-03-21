        setInterval(refresh, 100);
        var map;
        var marker;
        var miref=[];
        $(window).load(refresh());
        function refresh() {
            var return_first = function(){
                var tmp = null;
              $.ajax({
              'async': false,
              'type': "POST",
              'global': false,
              'dataType': 'html',
              'url': "data.php",
              'success': function (data) {
                  tmp = data;
              }
          }); return tmp;
            }();
            var data1 = return_first.split("\n");
           // var longElement = document.getElementById("ID"); 
            // longElement.textContent = data1[0];
            var longElement = document.getElementById("lat"); 
             longElement.textContent = data1[1];
           var longElement = document.getElementById("lon"); 
             longElement.textContent = data1[2];
            var longElement = document.getElementById("fech"); 
             longElement.textContent = data1[3];
            //var longElement = document.getElementById("fech2"); 
             //longElement.textContent = data1[4];
           center(data1[1], data1[2]);
            
            
    }
var map;
var t;
 function initMap() { // Inicio el mapa con los recursos que me da api

   map = L.map('map').
     setView([11, 72],
     15);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 20
}).addTo(map);
     L.control.scale().addTo(map);
    t= L.marker([50, 21],{draggable: true}).addTo(map);
     
    
    }


 function center(lat,lon){
     map.setView([lat,lon], map.getZoom());
     map.removeLayer(t);
     t=L.marker([lat, lon],{draggable: true}).addTo(map);
     
     getLocation();
 }


 var x;
function getLocation() {
     x = document.getElementById("demo");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
