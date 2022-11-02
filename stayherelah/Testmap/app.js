//Done by Zheng Kai 

let map;


// Initialize and add the map
function initMap() {


  map = new google.maps.Map(document.getElementById("map"), {
    // centered at Singapore
    center: { lat: 1.290270, lng: 103.851959 },
    zoom: 10,
  });

  var input = document.getElementById('searchInput');
  //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function() {
      infowindow.close();
      marker.setVisible(false);
      var place = autocomplete.getPlace();
      if (!place.geometry) {
          window.alert("Autocomplete's returned place contains no geometry");
          return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
      } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
      }
      marker.setIcon(({
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(35, 35)
      }));
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
  
      var address = '';
      if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
      }
  
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
      infowindow.open(map, marker);
    
      // Location details
      for (var i = 0; i < place.address_components.length; i++) {
          if(place.address_components[i].types[0] == 'postal_code'){
              document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
          }
          if(place.address_components[i].types[0] == 'country'){
              document.getElementById('country').innerHTML = place.address_components[i].long_name;
          }
      }
      document.getElementById('location').innerHTML = place.formatted_address;
      document.getElementById('lat').innerHTML = place.geometry.location.lat();
      document.getElementById('lon').innerHTML = place.geometry.location.lng();
  });


  

  // //Listen for click on map location
  // google.maps.event.addListener(map,"click", (event)=>{
  //   //Add Marker
  //   addMarker({location:event.latLng});
  // })



// The location of hougang
//const hougang = { lat: 1.3717, lng: 103.8930 };

//    // The marker, positioned at hougang
//  const marker = new google.maps.Marker({
//     position: hougang,
//     map: map,
//     //icon:"https://img.icons8.com/nolan/2x/marker.png"
//   });

//   //InfoWindow
//   const detailWindow = new google.maps.InfoWindow({
//     content: `<h2>Hougang</h2>`
//   })

//   marker.addListener("mouseover",() =>{
//     detailWindow.open(map,marker);
//    // detailWindow.close(map,marker);

//   })

//Add Markers to Array
  let MarkerArray = [ {location:{ lat: 1.3717, lng: 103.8930 }, },
  // imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
  // content: `<h2>Hougang</h2>`},

  //Sengkang
  {location:{lat: 1.3920, lng: 103.8951 }} 
]

  //MarkerArray.push(" {location:{lat: 1.6920, lng: 105.8951 }}");


  // Loop through Marker
  // for(let i=0; i<MarkerArray.length; i++){
  //   addMarker(MarkerArray[i])
  // }
  // console.log(lat);

// the refresh buutton will reset this page, and thus it will have new
// lat lon to add marker to the map

      //   for (let i =0; i<lat.length;i++)
      // {
      
      //     addMarker({location:{lat : lat[i] , lng: lon[i]}});
      // }

      if(checkBox_Mall.checked ==true )
      {
        //Marking Mall
        for (let i =0; i<Mall_lon.length;i++)
        {
            addMarker({location:{lat : Mall_lat[i] , lng: Mall_lon[i]},
            content: `<h2>${Mall_names[i]}</h2>`});
        }
      }

      if(checkBox_Mrt.checked==true)
      {
         // Marking MRT
        for(let i=0; i<MRT_lon.length;i++)
        {
          addMarker({location:{lat : MRT_lat[i] , lng: MRT_lon[i]},
          content: `<h2>${MRT_names[i]}</h2>`});
        }

      }

      if(checkBox_Pri.checked==true){
        //Mark Primary Schools
          for(let i=0; i<PRI_lon.length; i++)
          {
            addMarker({location:{lat: PRI_lat[i], lng: PRI_lon[i]}});
          }
      }
      if(checkBox_Sec.checked==true)
      {
         //Mark Secondary Schools
          for(let i=0; i<SEC_lon.length; i++)
          {
            addMarker({location:{lat: SEC_lat[i], lng: SEC_lon[i]}});
          }

      }
     


 // document.getElementById('refresh').onclick = function(){
 // console.log("CLICK");
  // for (let i =0; i<lat.length;i++)
  // {
  //     addMarker({location:{lat : lat[i] , lng: lon[i]}});
  // }

//}




// Add Marker, this function is not hard coded. can parse in own location & image
function addMarker(property){
  const marker = new google.maps.Marker({
        position: property.location,
        map: map,
        //icon: property.imageIcon
        //icon:"https://img.icons8.com/nolan/2x/marker.png"
      });

      //check for custom icon
      if(property.imageIcon){
        //set image incon
        marker.setIcon(property.imageIcon)
      }

      if(property.content){
        const detailWindow = new google.maps.InfoWindow({
          content:property.content
        })

        marker.addListener("mouseover",() =>{
          detailWindow.open(map,marker);
        })
      }
  

}




//Hougang
//addMarker({location:{ lat: 1.3717, lng: 103.8930 }});

//Alternative for different icons
// addMarker({location:{ lat: 1.3717, lng: 103.8930 },
// imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
// content: `<h2>Hougang</h2>`});

// //Sengkang
// addMarker({location:{lat: 1.3920, lng: 103.8951 }});

//Create autocomplete objects for all input

// var options = {
//   types:['(cities)']
// }

// var input1=document.getElementById("from");
// var autocomplete1 = new google.maps.places.autocomplete



} //closing tag for init map function
window.initMap = initMap;




