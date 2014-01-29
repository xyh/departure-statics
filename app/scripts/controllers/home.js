angular.module('departureStaticsApp').controller('HomeCtrl', ['$scope', 'cfpLoadingBar', 'geolocation', 'currentGeolocation', controller]);

function controller($scope, cfpLoadingBar, geolocation, currentGeolocation) {

  $scope.mapOptions = {
    center: currentGeolocation.googleLatLng(),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  $scope.map = new google.maps.Map(document.getElementById('map_canvas'), $scope.mapOptions);
  $scope.currentLocationMarker = new google.maps.Marker({
    position: currentGeolocation.googleLatLng()
  });
  $scope.currentLocationMarker.setDraggable(true);
  $scope.currentLocationMarker.setMap($scope.map);


  $scope.initialize = function() {
    cfpLoadingBar.start();
    geolocation
      .getLocation()
      .then(function(data){
        currentGeolocation.coordinates = data.coords;
        $scope.map.panTo(currentGeolocation.googleLatLng());
        $scope.currentLocationMarker.setPosition(currentGeolocation.googleLatLng());
        cfpLoadingBar.complete();
        $scope.safeApply();
      }, function(reason) {
        console.log('cannot get current location, reason: ' + reason);
        cfpLoadingBar.complete();
        $scope.safeApply();
      });
  }

}