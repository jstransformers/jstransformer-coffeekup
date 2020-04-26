# jstransformer-coffeekup

[CoffeeKup](https://github.com/mauricemach/coffeekup) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-coffeekup/master.svg)](https://travis-ci.org/jstransformers/jstransformer-coffeekup)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-coffeekup/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-coffeekup)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-coffeekup/master.svg)](http://david-dm.org/jstransformers/jstransformer-coffeekup)
[![NPM version](https://img.shields.io/npm/v/jstransformer-coffeekup.svg)](https://www.npmjs.org/package/jstransformer-coffeekup)

## Installation

    npm install jstransformer-coffeekup

## API

```js
var coffeekup = require('jstransformer')(require('jstransformer-coffeekup'));

var options = {};
var locals = {title: 'Hello world', name: 'tunnckoCore'};
var template = 'h1 "#{@title}! #{@name} is my master!"';

var data = coffeekup.render(template, options, locals);

console.log(data.body);
//=> '<h1>Hello world! tunnckoCore is my master!</h1>'

var compiled = coffeekup.compile(template).fn;
console.log(compiled(locals));
//=> '<h1>Hello world! tunnckoCore is my master!</h1>'
```

## License

MIT
