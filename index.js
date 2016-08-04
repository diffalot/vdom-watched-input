'use strict'

var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')

var EventListener = require('vdom-event-listener')

var Input = function (fn, options, listener) {
  this.fn = fn
  this.options = options
  this.listener = listener
}
Input.prototype.type = 'Widget'
Input.prototype.init = function () {
  var options = this.options
  options['input-change'] = new EventListener(this.fn, this.listener)
  return createElement(h('input', options))
}
Input.prototype.update = function () {
}
Input.prototype.destroy = function () {
}

module.exports = Input
