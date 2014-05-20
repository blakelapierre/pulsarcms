// controllers/conversations.js
// Copyright (C) 2014 Rob Colbert <rob.isConnected@gmail.com>
// License: MIT

'use strict';

function ConversationsCtrl ($scope, $window, PulsarVideoCall) {

//  var self = this;

  $window.scrollTo(0, 0);
  $scope.$emit('setPageGroup', 'conversations');

  ga('send', 'pageview');

  $scope.$on('pulsarUserMediaStreamStart', function (event, userMediaStream) {
    console.log('pulsarUserMediaStreamStart', event, userMediaStream);
    var video = document.getElementById('videoLocal');
    video.src = window.URL.createObjectURL(userMediaStream);
    video.onloadedmetadata = function (metadata) {
      console.log('userStreamMetadata', metadata);
      $scope.$apply(function ( ) {
        $scope.inVideoCall = true;
        $scope.userMediaStream = userMediaStream;
        $scope.userMediaStreamMetadata = metadata;
      });
    };
  });

  $scope.$on('pulsarUserMediaStreamError', function (event, error) {
    console.error('pulsarUserMediaStreamError', event, error);
  });

  PulsarVideoCall.connect(); // testing

  $scope.conversations = [
    {
      'topic': 'Test conversation',
      'participants': [
        {
          '_id': 'INVALID_HARD_CODED',
          'displayName': 'Rob Colbert',
          'profileImageUrl':'images/rob-profile-dark.jpg'
        }
      ],
      'messages': [
        {
          'created':'PLACEHOLDER TS',
          'sender': {
            '_id':'UserIdValue',
            'displayName':'Rob Colbert'
          },
          'content': 'This is a hard-coded placeholder message defined in JSON to build this whole UX against. Will tweak later.'
        }
      ]
    },
    {
      'topic': 'Test conversation',
      'participants': [
        {
          '_id': 'INVALID_HARD_CODED',
          'displayName': 'Rob Colbert',
          'profileImageUrl':'images/rob-profile-dark.jpg'
        }
      ],
      'messages': [
        {
          'created':'PLACEHOLDER TS',
          'sender': {
            '_id':'UserIdValue',
            'displayName':'Rob Colbert'
          },
          'content': 'This is a hard-coded placeholder message defined in JSON to build this whole UX against. Will tweak later.'
        }
      ]
    },
    {
      'topic': 'Test conversation',
      'participants': [
        {
          '_id': 'INVALID_HARD_CODED',
          'displayName': 'Rob Colbert',
          'profileImageUrl':'images/rob-profile-dark.jpg'
        }
      ],
      'messages': [
        {
          'created':'PLACEHOLDER TS',
          'sender': {
            '_id':'UserIdValue',
            'displayName':'Rob Colbert'
          },
          'content': 'This is a hard-coded placeholder message defined in JSON to build this whole UX against. Will tweak later.'
        }
      ]
    }
  ];
  $scope.conversation = $scope.conversations[0];
  console.log('conversations', $scope.conversations);
}

ConversationsCtrl.$inject = [
  '$scope',
  '$window',
  'PulsarVideoCall'
];

angular.module('pulsarClientApp')
.controller('ConversationsCtrl', ConversationsCtrl);
