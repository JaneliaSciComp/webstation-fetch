"use strict";

var fetch = require('isomorphic-fetch');

module.exports = function webstationFetch(url, options) {
  if (!options.headers) {
    options['headers'] = [];
  }
  options.headers['Application-Id'] = 'Webstation';
  return fetch(url, options);
}
