'use strict';

angular.
  module('tweetService', ['ngResource']).
    factory('tweetFactory', ['$resource',
        function($resource) {
        return $resource('/api/tweets/', {}, {
            query: {
                method: 'GET',
                params: {},
                isArray: true
            }
        });
        }
  ]);
