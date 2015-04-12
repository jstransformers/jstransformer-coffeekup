/**
 * jstransformer-coffeekup <https://github.com/jstransformers/jstransformer-coffeekup>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var extend = require('extend-shallow');
var coffeekup = require('coffeekup');

exports.name = 'coffeekup';
exports.inputFormats = ['coffee', 'coffeekup'];
exports.outputFormat = 'html';

exports.compile = function _compile(str, options) {
  options = options || {};
  return coffeekup.compile(str, options);
};
exports.render = function _render(str, options, locals) {
  return coffeekup.render(str, locals, options);
};
