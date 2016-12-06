'use strict';

var coffeekup = require('coffeekup');

exports.name = 'coffeekup';
exports.outputFormat = 'html';

exports.compile = function _compile(str, options) {
  options = options || {};
  return coffeekup.compile(str, options);
};
exports.render = function _render(str, options, locals) {
  return coffeekup.render(str, locals, options);
};
