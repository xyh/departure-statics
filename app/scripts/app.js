'use strict';

var dependencies = [
  'ngRoute',
  "leaflet-directive",
  'chieffancypants.loadingBar',
  'ngAnimate',
  'geolocation'
];

angular.module('departureStaticsApp', dependencies)
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
