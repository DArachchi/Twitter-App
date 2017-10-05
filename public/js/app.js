'use strict';

// Declare app level module which depends on views, and components
angular.module('twitterApp', [
  'ngMaterial',
  'ngRoute',
  'appRoutes',
  'navbar',
  'home',
  'hashtags',
  'tweetService',
  'chart.js'
]);