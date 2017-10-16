'use strict'

angular.module('appRoutes', [])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
  });

  $routeProvider.when('/hashtags', {
    templateUrl: 'views/hashtags.html',
    controller: 'HashtagCtrl'
  });

  $routeProvider.when('/mentions', {
    templateUrl: 'views/mentions.html',
    controller: 'MentionsCtrl'
  });

  $routeProvider.when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
