// services/sidebar-pulses.js
// Copyright (C) 2014 Rob Colbert <rob.isConnected@gmail.com>
// License: MIT

'use strict';

function SidebarPulsesService ($resource, Configuration) {
  var serviceUrl = Configuration.buildApiUrl('/sidebar-pulses/:id');
  var defaultParameters = null;
  return $resource(serviceUrl, defaultParameters, {
    'list': { 'method': 'GET', 'isArray': true, 'withCredentials': true },
    'get': { 'method': 'GET', 'withCredentials': true },
    'create': { 'method': 'POST', 'withCredentials': true },
    'update': { 'method': 'PUT', 'withCredentials': true },
    'delete': { 'method': 'DELETE', 'withCredentials': true }
  });
}

SidebarPulsesService.$inject = [
  '$resource',
  'Configuration',
];

angular.module('pulsarApp')
.service('SidebarPulses', SidebarPulsesService);
