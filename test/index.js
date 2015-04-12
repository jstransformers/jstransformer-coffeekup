/**
 * jstransformer-coffeekup <https://github.com/jstransformers/jstransformer-coffeekup>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var test = require('assertit');
var transformer = require('jstransformer');
var transform = transformer(require('../index'));

test('should compile coffeekup template from a string', function(done) {
  var locals = {title: 'Hello world', name: 'tunnckoCore'};
  var fixture = 'h1 "#{@title}! #{@name} is my master!"\np i for i in [1..3]';
  var compile = transform.compile(fixture);
  var actual = compile.fn(locals);
  var expected = '<h1>Hello world! tunnckoCore is my master!</h1><p>1</p><p>2</p><p>3</p>';

  test.equal(actual, expected);
  done();
});

test('should compile coffeekup from a file', function(done) {
  var locals = {title: 'Hello world', name: 'tunnckoCore'};
  var fixture = './test/fixture.coffee';
  var compile = transform.compileFile(fixture);
  var actual = compile.fn(locals);
  var expected = '<h1>Hello world! tunnckoCore is my master!</h1><p>1</p><p>2</p><p>3</p>';

  test.equal(actual, expected);
  done();
});

test('should render coffeekup template from a string', function(done) {
  var locals = {title: 'Hello world', name: 'tunnckoCore'};
  var fixture = 'h1 "#{@title}! #{@name} is my master!"\np i for i in [1..3]';
  var actual = transform.render(fixture, {}, locals).body;
  var expected = '<h1>Hello world! tunnckoCore is my master!</h1><p>1</p><p>2</p><p>3</p>';

  test.equal(actual, expected);
  done();
});

test('should render coffeekup from a file', function(done) {
  var locals = {title: 'Hello world', name: 'tunnckoCore'};
  var fixture = './test/fixture.coffee';
  var actual = transform.renderFile(fixture, {}, locals).body;
  var expected = '<h1>Hello world! tunnckoCore is my master!</h1><p>1</p><p>2</p><p>3</p>';

  test.equal(actual, expected);
  done();
});
