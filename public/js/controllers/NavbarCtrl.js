'use strict';
  
angular.module('navbar', ['ngMaterial'])
  .controller('NavbarCtrl', ['$scope', function($scope) {
    $scope.navItems = [
      {name: "hashtags", label: "Hashtag Usage View"},
      {name: "mentions", label: "User Mentions View"},
      {name: "about", label: "About"},
    ];
  }]);