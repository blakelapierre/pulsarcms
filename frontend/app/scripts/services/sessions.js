// services/sessions.js
// Copyright (C) 2014 Rob Colbert <rob.isConnected@gmail.com>

'use strict';

function SessionsService ($resource, Configuration) {
  var serviceUrl = Configuration.buildApiUrl('/sessions');
  console.log('Sessions service endpoint', serviceUrl);
  var defaultParameters = null;
  return $resource(serviceUrl, defaultParameters, {
    'get': { 'method': 'GET', 'withCredentials': true },
    'create': { 'method': 'POST', 'withCredentials': true }
  });
}

SessionsService.$inject = [
  '$resource',
  'Configuration',
];

angular.module('robcolbertApp')
.service('Sessions', SessionsService);
