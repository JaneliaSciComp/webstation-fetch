"use strict";

var fetch = require('cross-fetch');

module.exports = function webstationFetch(url, options) {
  if (!options.headers) {
    options['headers'] = {};
  }
  options.headers['Application-Id'] = 'Webstation';
  return fetch(url, options);
}
