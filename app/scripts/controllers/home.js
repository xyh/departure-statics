/**
 * Created by xuyuhang on 1/28/14.
 */

'use strict';



angular.module('departureStaticsApp').controller('HomeCtrl', ['$scope', 'cfpLoadingBar', 'geolocation', controller]);

function controller($scope, cfpLoadingBar, geolocation) {
  $scope.map = {
    center: {
      lat: 37.7833,
      lng: -122.4167,
      zoom: 13
    },
    markers: {
      currentLocationMarker: {
        lat: 37.7833,
        lng: -122.4167,
        message: "haha",
        focus: true,
        draggable: false
      }
    },
    layers: {
      baselayers: {
        osm: {
          name: 'OpenStreetMap',
          type: 'xyz',
          url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          layerOptions: {
            subdomains: ['a', 'b', 'c'],
            attribution: '© OpenStreetMap contributors',
            continuousWorld: true
          }
        }
      }
    },
    defaults: {
      scrollWheelZoom: true
    }
  };

  $scope.initialize = function() {
    cfpLoadingBar.start();
    geolocation
      .getLocation()
      .then(function(data){
        $scope.map.center.lat = data.coords.latitude;
        $scope.map.center.lng = data.coords.longitude;
        $scope.map.markers.currentLocationMarker.lat = data.coords.latitude;
        $scope.map.markers.currentLocationMarker.lng = data.coords.longitude;
        cfpLoadingBar.complete();
      }, function(reason) {
        console.log('cannot get current location, reason: ' + reason);
        cfpLoadingBar.complete();
      });
  }
}