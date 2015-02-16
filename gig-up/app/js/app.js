'use strict';

/* App Module */

var gigupApp = angular.module('gigupApp', [
  'ngRoute',
  'gigupAnimations',

  'gigupControllers',
  'gigupFilters',
  'gigupServices'
]);

gigupApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/events', {
        templateUrl: 'partials/event-list.html',
        controller: 'EventListCtrl'
      }).
      when('/events/:eventId', {
        templateUrl: 'partials/event-detail.html',
        controller: 'EventDetailCtrl'
      }).
      otherwise({
        redirectTo: '/events'
      });
  }]);
