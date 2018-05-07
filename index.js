import fetch from 'isomorphic-fetch';

export default webstationFetch(url, options) {
  options.headers.Application-Id = 'Webstation';
  return fetch(url, options);
}
