'use strict';

// Declare app level module which depends on views, and components
angular.module('twitterApp', [
  'ngMaterial',
  'ngRoute',
  'appRoutes',
  'navbar',
  'home',
  'hashtags',
  'mentions',
  'tweetService',
  'chart.js'
])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
  });