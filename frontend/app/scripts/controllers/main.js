// controllers/main.js
// Copyright (C) 2014 Rob Colbert <rob.isConnected@gmail.com>

'use strict';
/*global twttr:false */

angular.module('robcolbertApp')
.controller('MainCtrl', [
  '$scope',
  'Thoughts',
  'Posts',
  function ($scope, Thoughts, Posts) {
    $scope.$emit('setPageGroup', 'blog');
    $scope.thoughts = Thoughts.list();
    $scope.posts = Posts.list(function ( ) {
      console.log('posts have arrived', $scope.posts);
      setTimeout(twttr.widgets.load, 0);
    });
  }
]);