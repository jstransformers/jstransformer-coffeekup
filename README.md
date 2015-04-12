## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> [CoffeeKup](https://github.com/mauricemach/coffeekup) support for JS Transformers.

## Install
```
npm i --save jstransformer-coffeekup
npm test
```


## Usage
> For more use-cases see the [tests](./test/index.js)

```js
var coffeekup = require('jstransformer')(require('jstransformer-coffeekup'));

var options = {};
var locals = {title: 'Hello world', name: 'tunnckoCore'};
var template = 'h1 "#{@title}! #{@name} is my master!"';

var data = coffeekup.render(template, options, locals);

console.log(data.body);
//=> '<h1>Hello world! tunnckoCore is my master!</h1>'
```


## Related
- [coffeekup](http://coffeekup.org): Markup as CoffeeScript.
- [coffeecup](http://easydoc.org/coffeecup): Markup as CoffeeScript.
- [coffee-script](http://coffeescript.org): Unfancy JavaScript
- [jstransformer](https://github.com/jstransformers/jstransformer): Normalize the API of any jstransformer
- [jstransformer-coffeecup](https://github.com/jstransformers/jstransformer-coffeecup): CoffeeCup support for JSTransformers.
- [jstransformer-toml](https://github.com/jstransformers/jstransformer-toml): TOML (minimal configuration file format) support for JS Transformers
- [jstransformer-absurd](https://github.com/jstransformers/jstransformer-absurd): AbsurdJS support for JS Transformers.
- [jstransformer-lodash](https://github.com/jstransformers/jstransformer-lodash): Lodash support for JS Transformers
- [generator-jstransformer](https://github.com/jstransformers/generator-jstransformer): Yeoman generator form jstransformers

## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [JSTransformers][jstransformers-url], [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[jstransformers-url]: https://github.com/jstransformers

[npmjs-url]: http://npm.im/jstransformer-coffeekup
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-coffeekup.svg?style=flat&label=jstransformer-coffeekup

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-coffeekup?branch=master
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-coffeekup.svg?style=flat

[license-url]: https://github.com/jstransformers/jstransformer-coffeekup/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-coffeekup
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-coffeekup.svg?style=flat

[daviddm-url]: https://david-dm.org/jstransformers/jstransformer-coffeekup
[daviddm-img]: https://img.shields.io/david/jstransformers/jstransformer-coffeekup.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/jstransformers/jstransformer-coffeekup/graphs/contributors

***

_Proudly generated by [docks(1)](https://github.com/tunnckoCore), April 12, 2015_