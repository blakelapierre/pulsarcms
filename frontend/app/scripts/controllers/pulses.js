// controllers/pulses.js
// Copyright (C) 2014 Rob Colbert <rob.isConnected@gmail.com>

'use strict';
/* global twttr:false */
/* global moment:false */

function PulsesCtrl ($scope, $route, $window, Pulses) {
  $window.scrollTo(0, 0);

  $scope.$emit('setPageGroup', 'blog');
  ga('send', 'pageview');

  $scope.currentPage = parseInt($route.current.params.p) || 1;
  $scope.pulsesPerPage = parseInt($route.current.params.cpp) || 3;

  $scope.pulses = Pulses.list(
    {
      'p': $scope.currentPage,
      'cpp':$scope.pulsesPerPage
    },
    function ( ) {
      var idx, maxPages = $scope.pulses.count / $scope.pulsesPerPage;

      console.log('pulses have arrived', $scope.pulses);
      setTimeout(twttr.widgets.load, 0);

      $scope.pages = [ ];
      for (idx = $scope.currentPage - 3; idx <= maxPages; ++idx) {
        if (idx >= 1) {
          $scope.pages.push(idx);
        }
      }
      ga('send','event', 'Pulses', 'listed', $scope.pulses.length);
    }
  );

  $scope.calendarMoment = function (date) { return moment(date).calendar(); };
  $scope.fromNow = function (date) { return moment(date).fromNow(); };

}

PulsesCtrl.$inject = [
  '$scope',
  '$route',
  '$window',
  'Pulses'
];

angular.module('robcolbertApp')
.controller('PulsesCtrl', PulsesCtrl);
