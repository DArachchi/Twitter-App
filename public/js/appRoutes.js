'use strict'

angular.module('appRoutes', []).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
