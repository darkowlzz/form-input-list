'use strict';

var assert = require('chai').assert,
    formInput = require('../').formInput,
    _ = require('lodash');

var html = '<html>' +
           '<head><title>asm</title></head>' +
           '<body>' +
           '<form action="/" method="post" name="first">' +
           '<input type="email" name="mail">' +
           '<input type="hidden" name="secret" value="ssshhh">' +
           '<input type="text" name="username">' +
           '<input type="hidden" name="continue" value="foobaa">' +
           '</form>' +
           '<form action="/foo" method="post" name="second">' +
           '<input type="text" name="msg">' +
           '<input type="hidden" name="lock" value="false">' +
           '</form>' +
           '</body></html>';

describe('testing form input list', function () {
  it('should return forms with input fields', function (done) {
    this.timeout = 2000;
    formInput(html)
    .then(function (result) {
      assert.equal(result[0].formIndex, 0);
      assert.equal(result[0].inputs.length, 4);
      assert.equal(result[0].values.secret, 'ssshhh');
      assert.equal(result[0].values.continue, 'foobaa');
      assert.equal(result[1].formIndex, 1);
      assert.equal(result[1].inputs.length, 2);
      assert.equal(result[1].values.lock, 'false');
      done();
    })
    .catch(function (err) {
      done(err);
    });
  });

  it('should return empty list', function (done) {
    this.timeout = 2000;
    formInput('')
    .then(function (result) {
      assert.equal(_.isEmpty(result), true);
      done();
    })
    .catch(function (err) {
      done(err);
    });
  })
});
