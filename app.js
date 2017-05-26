/**
 * Author madhankumarj<madhankumar028@gmail.com>
 */
(function() {

    'use strict';

    function getUserCurrentLocation(latitude, longitude) {
        console.log(latitude, longitude);
    }

    function init() {
      if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(function(position) {
              getUserCurrentLocation(position.coords.latitude
                                  , position.coords.longitude);
          });
      }
    }

    init();
}())