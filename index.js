'use strict'

const coffeekup = require('coffeekup')

exports.name = 'coffeekup'
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  options = options || {}

  return coffeekup.compile(str, options)
}

exports.render = function (str, options, locals) {
  return coffeekup.render(str, locals, options)
}
