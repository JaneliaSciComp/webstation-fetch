"use strict";

var fetch = require('isomorphic-fetch');

export default webstationFetch(url, options) {
  options.headers.Application-Id = 'Webstation';
  return fetch(url, options);
}
