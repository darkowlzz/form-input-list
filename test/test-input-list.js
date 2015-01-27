'use strict';

var assert = require('chai').assert,
    formInput = require('../').formInput,
    _ = require('lodash');

var html = '<html>' +
           '<head><title>asm</title></head>' +
           '<body>' +
           '<form action="/" method="post" name="first">' +
           '<input type="email" name="mail">' +
           '<input type="text" name="username">' +
           '</form>' +
           '<form action="/foo" method="post" name="second">' +
           '<input type="text" name="msg">' +
           '</form>' +
           '</body></html>';

describe('testing form input list', function () {
  it('should return forms with input fields', function (done) {
    this.timeout = 2000;
    formInput(html)
    .then(function (result) {
      assert.equal(result[0].formIndex, 0);
      assert.equal(result[0].inputs.length, 2);
      assert.equal(result[1].formIndex, 1);
      assert.equal(result[1].inputs.length, 1);
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
