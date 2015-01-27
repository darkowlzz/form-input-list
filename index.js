'use strict';

var jsdom = require('jsdom'),
    Q     = require('q');

function formInput(html) {
  return Q.Promise(function (resolve, reject) {
    jsdom.env(
      html,
      function (errors, window) {
        var inputs,
            result = [],
            forms = window.document.getElementsByTagName('form');
        forms = Array.prototype.slice.call(forms);
        forms.forEach(function (form, index) {
          result.push({'formIndex': index, 'inputs': [], 'values': {}});
          inputs = form.getElementsByTagName('input');
          inputs = Array.prototype.slice.call(inputs);
          inputs.forEach(function (input) {
            if (input.value) {
              result[index]['values'][input.name] = input.value;
            }
            result[index]['inputs'].push(input.name);
          });
        });
        resolve(result);
      }
    );
  });
}
exports.formInput = formInput;
