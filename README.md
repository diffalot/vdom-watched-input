# vdom-watched-input

Creates an input widget that passes events to a function of your choice

# Usage

```javascript
const h = require('virtual-dom/h')

const Input = require('vdom-watched-input')

let value = ''

function updateValue (event) {
  console.log('... received event', event)
  value = event.target.value
}

function render () {
  return h('div', [
    new Input(updateValue, {
      className: 'i-has-class',
      type: 'text',
      value: value
    })
  ])
}

render()
```

# Arguments

Input(callbackFunction, hyperscriptOptions, eventName)

callbackFunction = callback(event)

hyperscriptOptions = options passed directly to `virtual-dom/h`

eventName = defaults to `'input'`, but for input types like `'checkbox'` it is better to use `'change'`
