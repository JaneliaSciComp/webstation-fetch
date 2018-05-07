var assert = require('assert');
var expect = require('chai').expect;
var nock = require('nock');

var webfetch = require('./index');

var good = 'I got the page.';
var bad = 'Not what I wanted';

function responseToText(response) {
  if (response.status >= 400) throw new Error("Bad server response");
  return response.text();
}

describe('webstationFetch', function() {
  before(function() {
    nock('http://example.com', {
      // This is used to check that we are attaching the header.
      // if this is missing when this url is called, then an error
      // will be thrown and the test will fail.
      reqheaders: {
        'Application-Id': 'Webstation',
      }
    })
      .get('/succeed.txt')
      .reply(200, good);
    nock('http://example.com')
      .get('/fail.txt')
      .reply(404, bad);
    });

  it('should be a function', function() {
    expect(webfetch).to.be.a('function');
  });

  it('should return a valid promise when called', function(done) {
    webfetch('http://example.com/succeed.txt', {})
      .then(responseToText)
      .then(function(data) {
        expect(data).to.equal(good);
        done();
      })
      .catch(done);
  });

});
