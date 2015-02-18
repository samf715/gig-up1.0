'use strict';

/* App Module */

var gigupApp = angular.module('gigupApp', [
  //'ngRoute',
    'ui.router',
  'gigupAnimations',
  'gigupControllers',
  'gigupFilters',
  'gigupServices'
]);

gigupApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/events');
    $stateProvider
        .state('events', {
            url: '/events',
            templateUrl: 'partials/event-list.html',
            controller: 'EventListCtrl'
        })
        .state('eventsList', {
            url: '/events/:eventId',
            templateUrl: 'partials/event-detail.html',
            controller: 'EventDetailCtrl'
        });
        //.state('gigs', {
        //    url: '/gig-detail',
        //    templateUrl: 'partials/gig-detail.html',
        //    controller: 'GigDetailCtrl'
        //})
});

//gigupApp.config(['$routeProvider',
//  function($routeProvider) {
//    $routeProvider.
//      when('/events', {
//            //addUser event
//            //templateUrl: 'partials/add.html',
//            //controller: 'DbController'
//        templateUrl: 'partials/event-list.html',
//        controller: 'EventListCtrl'
//      }).
//      when('/events/:eventId', {
//        templateUrl: 'partials/event-detail.html',
//        controller: 'EventDetailCtrl'
//      }).
//      otherwise({
//        redirectTo: '/events'
//      });
//  }]);
