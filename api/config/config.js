/*
 * FILE
 *  config.js
 *
 * PURPOSE
 *
 *
 * LICENSE
 *  Copyright (C) 2014 Rob Colbert <rob.isConnected@gmail.com>
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to
 *  deal in the Software without restriction, including without limitation the
 *  rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 *  sell copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 *  IN THE SOFTWARE.
 */

'use strict';

var path = require('path');
var crypto = require('crypto');
var localConfig = require('./config.local');

var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';
var listenPort = 10010;

var corsConfig = {
  'allowOrigins': [ localConfig.allowOrigin ],
  'allowMethods': [
    'GET',
    'PUT',
    'POST',
    'DELETE'
  ],
  'allowHeaders': [
    'Content-Type',
    'Authorization'
  ],
  'allowCredentials': true
};

var monitorConfig = {
  'enabled': true,
  'mountPoint': '/monitor',
  'maxHistoryLength': 3
};

function hashPassword (password) {
  var shasum = crypto.createHash('sha1');
  shasum.update(exports.app.passwordSalt + password);
  return shasum.digest('hex');
}

function generateRandomKey ( ) {
  var currentDate = (new Date()).valueOf().toString();
  var random = Math.random().toString();
  var shasum = crypto.createHash('sha1');
  shasum.update(exports.app.passwordSalt + currentDate + random);
  return shasum.digest('hex');
}

var config = {
  'development': {
    'root': rootPath,
    'app': {
      'name': 'pulsar-api',
      'passwordSalt': localConfig.userPasswordSalt,
      'hashPassword': hashPassword,
      'generateRandomKey': generateRandomKey,
      'emailUser': localConfig.emailUser,
      'emailPassword': localConfig.emailPassword
    },
    'port': listenPort,
    'db': 'mongodb://localhost/robcolbert-development',
    'cors': corsConfig,
    'monitor': monitorConfig
  },

  'test': {
    'root': rootPath,
    'app': {
      'name': 'pulsar-api',
      'passwordSalt': localConfig.userPasswordSalt,
      'hashPassword': hashPassword,
      'generateRandomKey': generateRandomKey,
      'emailUser': localConfig.emailUser,
      'emailPassword': localConfig.emailPassword
    },
    'port': listenPort,
    'db': 'mongodb://localhost/robcolbert-test',
    'cors': corsConfig,
    'monitor': monitorConfig
  },

  'production': {
    'root': rootPath,
    'app': {
      'name': 'pulsar-api',
      'passwordSalt': localConfig.userPasswordSalt,
      'hashPassword': hashPassword,
      'generateRandomKey': generateRandomKey,
      'emailUser': localConfig.emailUser,
      'emailPassword': localConfig.emailPassword
    },
    'port': listenPort,
    'db': 'mongodb://localhost/robcolbert-production',
    'cors': corsConfig,
    'monitor': monitorConfig
  }
};

module.exports = exports = config[env];
