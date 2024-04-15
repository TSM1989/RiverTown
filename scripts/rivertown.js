var map = L.map('map').setView([38.5731, -92.6032], 7);


    L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);

    // Edit locations and links later
    var locations = [
      {lat: 38.9637, lng: -91.5631, title: 'Location 1', link: 'https://example.com/page1'},
      {lat: 39.2469, lng: -94.4191, title: 'Location 2', link: 'https://example.com/page2'},
      {lat: 38.8114, lng: -90.8529, title: 'Location 3', link: 'https://example.com/page3'}
    ];


    locations.forEach(function(location) {
      var marker = L.marker([location.lat, location.lng]).addTo(map);
      marker.bindPopup('<b>' + location.title + '</b><br><a href="' + location.link + '">Visit Page</a>');
    });