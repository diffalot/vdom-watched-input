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
  var self = this
  var options = self.options
  options['input-change'] = new EventListener(self.fn, self.listener)
  if (options.enterFn && typeof options.enterFn === 'function') {
    self.enterFn = options.enterFn
    delete options.enterFn
    options['enter-function'] = new EventListener(function (event) {
      if (event.key === 'Enter') {
        self.enterFn(event)
      }
    }, 'keypress')
  }
  return createElement(h('input', options))
}
Input.prototype.update = function () {
}
Input.prototype.destroy = function () {
}

module.exports = Input
