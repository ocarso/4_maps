// JavaScript Document// * Three maps on the same page


// necessary variables
var mapTop, mapCenter, mapBottom;
var infoWindowTop, infoWindowCenter,infoWindowBottom;

// markersData variable stores the information necessary to each marker
var markersDataTop =  [
   {
      lat: 33.638023,
      lng: -112.07178,
      name: "Edible Arrangements Store #152",
      address1:"245 E Bell Rd #1",
      address2: "Phoenix, AZ",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=127963' target='_blank'>Edible Arrangements  Store #152</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 33.627245,
      lng: -111.97845,
      name: "Edible Arrangements Store #1473",
      address1:"15530 N Tatum Blvd #140",
      address2: "Phoenix, AZ 85032",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=127973' target='_blank'>Edible Arrangements Store #1473</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 33.31857,
      lng: -111.891888,
      name: "Edible Arrangements Store #736",
      address1:"2875 W Ray Rd #11 ",
      address2: "Chandler, AZ 85224",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=127969' target='_blank'>Edible Arrangements Store #736</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
   {
      lat: 33.407892, 
      lng: -111.953919,
      name: "Edible Arrangements Store #603",
      address1:"930 W Broadway Rd #16",
      address2: "Tempe, AZ 85282",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=127468' target='_blank'>Edible Arrangements Store #603</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 33.304833,
      lng: -111.787757,
      name: "Edible Arrangements Store #1297",
      address1:"2487 S Gilbert Rd #114",
      address2: "Gilbert, AZ 85295",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=127970' target='_blank'>Edible Arrangements Store #1297</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item // don't insert comma in the last item
   {
      lat: 33.383089, 
      lng:  -111.80265,
      name: "Edible Arrangements Store #1316",
      address1:"1649 S Stapley Rd #5",
      address2: "Mesa, AZ 85204",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=127972' target='_blank'>Edible Arrangements Store #1316</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 33.639548,  
      lng: -112.174261,
      name: "Edible Arrangements Store #262",
      address1:"5350 W Bell RD #121",
      address2: "Glendale, AZ 85308",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=127965' target='_blank'>Edible Arrangements Store #262</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 33.379826,  
      lng: -111.691036,
      name: "Edible Arrangements Store #541",
      address1:"6610 E Baseline Rd #108",
      address2: "Mesa, AZ 85206",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=127967' target='_blank'>Edible Arrangements Store #541</a>" // don't insert comma in the last item of each marker
   }, 
   {
      lat: 33.582798,   
      lng: -111.892312,
      name: "Edible Arrangements Store #232",
      address1:"8776 E Shea Blvd #5",
      address2: "Scottsdale, AZ 85260",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=127964' target='_blank'>Edible Arrangements Store #232</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 33.303996,   
      lng: -111.98363,
      name: "Edible Arrangements Store #1300",
      address1:"4611 E Chandler Blvd #1",
      address2: "Phoenix, AZ 85048",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=127971' target='_blank'>Edible Arrangements Store #1300</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 33.453879,    
      lng: -112.394490,
      name: "Edible Arrangements Store #1500",
      address1:"650 N Estrella Pkwy",
      address2: "Goodyear, AZ 85338",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=129629' target='_blank'>Edible Arrangements Store #1500</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 33.644278,  
      lng: -112.362225,
      name: "Edible Arrangements Store #474",
      address1:"13980 W Bell Road #18",
      address2: "Surprise, AZ 85374",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=129633' target='_blank'>Edible Arrangements Store #474</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 33.517109,  
      lng: -112.082011,
      name: "Edible Arrangements Store #913",
      address1:"5501 N 7th Ave Ste 104",
      address2: "Phoenix, AZ 85013",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=129631' target='_blank'>Edible Arrangements Store #913</a>" // don't insert comma in the last item of each marker
   }, 
   {
      lat: 33.564547,   
      lng: -112.287654,
      name: "Edible Arrangements Store #1395",
      address1:"8877 N 107th Ave #307",
      address2: "Peoria, AZ 85345",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=129630' target='_blank'>Edible Arrangements Store #1395</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 33.467424,    
      lng: -112.339290,
      name: "Edible Arrangements Store #675",
      address1:"1729 N Dysart Rd #B104",
      address2: "Avondale, AZ 85392",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=129632' target='_blank'>Edible Arrangements Store #675</a>" // don't insert comma in the last item of each marker
   },	
];

var markersDataBottom = [
    {
      lat: 33.637580,
      lng: -117.608746,
      name: "Edible Arrangements",
      address1:"29881 Aventura Ste A",
      address2: "RSM, CA 92688",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=128235' target='_blank'>Edible Arrangements</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
   {
      lat: 33.427399, 
      lng: -117.611284,
      name: "Edible Arrangements",
      address1:"305 S El Camino Real #102",
      address2: "San Clemente, CA 92672",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=128245' target='_blank'>Edible Arrangements</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 32.748365,   
      lng: -117.163196,
      name: "Store #258",
      address1:"141 University Ave Ste 3",
      address2: "San Diego, CA 92103",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=128338' target='_blank'>Store #258</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 32.822186,    
      lng: -117.184229,
      name: "Store #257",
      address1:"4340 Genesee Ave #101",
      address2: "San Diego, CA 92117",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=128339' target='_blank'>Store #257</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 32.638393,      
      lng: -117.079031,
      name: "Store #1076",
      address1:"380 3rd Ave",
      address2: "Chula Vista, CA 91910",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=128341' target='_blank'>Store #1076</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 33.056237,       
      lng: -117.262367,
      name: "Store #1023",
      address1:"390 N El Camino Real",
      address2: "Encinitas, CA 92024",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=128343' target='_blank'>Store #1023</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 32.764344,        
      lng: -117.020570,
      name: "Store #998",
      address1:"8237 La Mesa Blvd",
      address2: "San Diego, CA 91941",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=128340' target='_blank'>Store #998</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 32.795227,        
      lng: -116.935566,
      name: "Store #1428",
      address1:"115 Jamacha Road",
      address2: "San Diego, CA 91941",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=128342' target='_blank'>Store #1428</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
     {
      lat: 33.955376,         
      lng: -117.390101,
      name: "Store #348",
      address1:"3540 Riverside Plaza Dr #304",
      address2: "Riverside, CA 92506",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=128344' target='_blank'>Store #348</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
     {
      lat: 33.777778,         
      lng: -117.916249,
      name: "Edible Arrangements",
      address1:"12781 Harbor Blvd",
      address2: "Garden Grove, CA 92840",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=129175' target='_blank'>Edible Arrangements</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
   {
      lat: 34.239013,         
      lng: -118.264222,
      name: "Edible Arrangements",
      address1:"3904 Foothill Blvd",
      address2: "Glendale, CA 91214",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=129144' target='_blank'>Edible Arrangements</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 34.278923,         
      lng: -118.710638,
      name: "Edible Arrangements",
      address1:"4316 Cochran St",
      address2: "Simi Valley, CA 93063",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=128958' target='_blank'>Edible Arrangements</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item		
];



var markersDataCenter = [
    {
      lat: 39.791494,
      lng: -105.077581,
      name: "Store #157",
      address1:"7310 W 52nd Ave Unit E",
      address2: "Arvada, CO 80002",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=131402' target='_blank'>Store #157</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
   {
      lat: 38.873267, 
      lng: -104.718170,
      name: "Store #1230",
      address1:"3622 New Center Pt",
      address2: "Colorado Springs, CO 80922",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=131406' target='_blank'>Store #1230</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 39.758053,  
      lng: -104.902732,
      name: "Store #1265",
      address1:"7304 East 29th Avenue",
      address2: "Denver, CO 80207",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=131404' target='_blank'>Store #1265</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 39.888384,   
      lng: -105.075563,
      name: "Store #1433",
      address1:"10442 Town Center Dr #300",
      address2: "Broomfield, CO 80021",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=131454' target='_blank'>Store #1433</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 39.913265,    
      lng: -104.986588,
      name: "Store #428",
      address1:"100 E 120th Ave #G130",
      address2: "Northglenn, C0 80233",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=131498' target='_blank'>Store #428</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 39.539790,     
      lng: -104.768208,
      name: "Store #503",
      address1:"9700 S. Parker Rd #400",
      address2: "Parker, CO 80138",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=131407' target='_blank'>Store #503</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 38.934185,      
      lng: -104.802924,
      name: "Store #509",
      address1:"1234 E Woodmen Rd #110",
      address2: "Colorado Springs, CO 80920",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=131453' target='_blank'>Store #509</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 39.651861,       
      lng: -104.773136,
      name: "Store #537",
      address1:"3571 S. Tower Rd #G",
      address2: "Aurora, CO 80013",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=131403' target='_blank'>Store #537</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    {
      lat: 40.154001,        
      lng: -105.104836,
      name: "Store #741",
      address1:"201 Ken Pratt Blvd #100",
      address2: "Longmont, CO 80501",
      html: "<a href='https://aa.rewardsnetwork.com/details.htm?search=true&merchantId=131455' target='_blank'>Store #741</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
    		
];






function initialize(setMap) {

   var mapOptions;
   
   if(setMap == "mapTop") {
      mapOptions = {
         center: new google.maps.LatLng(33.475973, -112.089405),
         zoom: 9,
         mapTypeId: 'roadmap',
      };
   
      mapTop = new google.maps.Map(document.getElementById('map-canvas-top'), mapOptions);
      
	   // a new Info Window is created
	   infoWindowTop = new google.maps.InfoWindow();
	
	   // Event that closes the Info Window with a click on the map
	   google.maps.event.addListener(mapTop, 'click', function() {
	      infoWindowTop.close();
   	});
      
   } else if (setMap ==
  "mapBottom") {
      
      mapOptions = {
         center: new google.maps.LatLng(32.885935, -116.913752),
         maxZoom: 9,
         mapTypeId: 'roadmap',
      };
      
	   mapBottom = new google.maps.Map(document.getElementById('map-canvas-bottom'), mapOptions);
      
	   // a new Info Window is created
	   infoWindowBottom = new google.maps.InfoWindow();
	
	   // Event that closes the Info Window with a click on the map
	   google.maps.event.addListener(mapBottom, 'click', function() {
	      infoWindowBottom.close();
   	});
   } else if (setMap ==
  "mapCenter") {

	mapOptions = {
         center: new google.maps.LatLng(40.601203,-8.668173),
         zoom: 9,
         mapTypeId: 'roadmap',
      };
      
      mapCenter = new google.maps.Map(document.getElementById('map-canvas-center'), mapOptions);
      
      // a new Info Window is created
      infoWindowCenter = new google.maps.InfoWindow();
   
      // Event that closes the Info Window with a click on the map
      google.maps.event.addListener(mapCenter, 'click', function() {
         infoWindowCenter.close();
      });
   }



   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers(setMap);
   
   // Create second map only when initialize function is called for the first time.
   // Second time setMap is equal to mapBottom, so this condition returns false and it will not run  
   if(setMap == "mapTop"){
      initialize("mapBottom");   
    
   } else if (setMap == "mapBottom") {
      initialize("mapCenter");
   }
   
}
google.maps.event.addDomListener(window, 'load', function(){ initialize("mapTop") });


// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(setMap){
   
   var markersData;
   var map;
   
   if(setMap == "mapTop"){
      markersData = markersDataTop;
      map = mapTop;
   } else if(setMap == "mapBottom") {
      markersData = markersDataBottom;
      map = mapBottom;
   } else if (setMap == "mapCenter") {
      markersData = markersDataCenter;
      map = mapCenter;
   }
   
   // this variable sets the map bounds according to markers position
   var bounds = new google.maps.LatLngBounds();
   
   // for loop traverses markersData array calling createMarker function for each marker 
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var address2 = markersData[i].address2;
      var html = markersData[i].html;

      createMarker(setMap, latlng, name, address1, address2, html);

      // marker position is added to bounds variable
      bounds.extend(latlng);  
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
function createMarker(setMap, latlng, name, address1, address2, html){
   
   var map;
   var infoWindow;
   
   if(setMap == "mapTop"){
      map = mapTop;
      infoWindow = infoWindowTop;
   } else if (setMap == "mapBottom"){
      map = mapBottom;
      infoWindow = infoWindowBottom;
   } else if (setMap == "mapCenter"){
     map = mapCenter;
     infoWindow = infoWindowCenter;
   }
   
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
      
      
	  
	  
	  // Creating the content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address1 + '<br />' +
         address2 + '<br />' +
         html + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });
}