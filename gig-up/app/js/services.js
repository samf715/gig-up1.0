'use strict';

/* Services */

var gigupServices = angular.module('gigupServices', ['ngResource']);

gigupServices.factory('Event', ['$resource',
  function($resource){
    return $resource('events/:eventId.json', {}, {
      query: {method:'GET', params:{eventId:'events'}, isArray:true}
    });
  }]);
