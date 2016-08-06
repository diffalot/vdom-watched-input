# vdom-watched-input

Creates an input widget that passes events to a function of your choice

# Example

```javascript
const h = require('virtual-dom/h')

const input = require('vdom-watched-input')

let value = ''

function updatevalue (event) {
  console.log('... received event', event)
  value = event.target.value
}

function render () {
  return h('div', [
    new input(updatevalue, {
      classname: 'i-has-class',
      type: 'text',
      value: value
    })
  ])
}

render()
```

# usage

## `input(function callback (event), hyperscriptProperties, eventname)`

`callback(event)` will be run when the event is triggered with the event as the only function argument

`hyperscriptProperties` are passed directly to `virtual-dom/h`

If `hyperscriptProperties` contains a property named `enterFn` that is a callback function, an event listener will be set for keypresses to run the callback function when the enter key is pressed

`eventName` defaults to `'input'`, but for input types like `'checkbox'` it is better to use `'change'`
