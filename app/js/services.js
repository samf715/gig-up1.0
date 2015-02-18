'use strict';

/* Services */

var gigupServices = angular.module('gigupServices', ['ngResource']);

gigupServices.factory('Event', ['$resource',
  function($resource){
    return $resource('events/:eventId.json', {}, {
      query: {method:'GET', params:{eventId:'events'}, isArray:true}
    });
  }]);

//gigupServices.factory('Gigs', ['$resource',
//    function($resource){
//        return $resource('gigs/:gigsId.json', {}, {
//            query: {method:'GET', params:{eventId:'gigs'}, isArray:true}
//        });
//    }]);