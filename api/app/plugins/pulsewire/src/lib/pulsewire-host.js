// lib/pulsewire-host.js
// Copyright (C) 2014 Rob Colbert <rob.isConnected@gmail.com>
// License: MIT

var GUID = require('pulsar-api-framework').tools.GUID;

function PulseWireHost (container, address, port, capacity) {

  this.container = container;
  this.address = address;
  this.port = port;
  this.capacity = capacity;
  this.clientSessions = [ ];

}

PulseWireHost.prototype.reserveSession = function (req, res, channel) {
  var accessToken = GUID();
  this.log.info('channel access token', accessToken);
  this.clientSessions.push({
    'session': req.session,
    'accessToken': accessToken
  });
  return accessToken;
};

PulseWireHost.prototype.getCurrentLoad = function ( ) {
  return this.clientSessions.length / this.capacity;
};

module.exports = exports = PulseWireHost;
