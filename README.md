[![npm version](https://badge.fury.io/js/%40jaysalvat%2Feslint-config-vue.svg)](https://badge.fury.io/js/%40jaysalvat%2Feslint-config-vue)

Eslint configuration 
====================

## Usage

Install npm package

```sh
npm install @jaysalvat/eslint-config-vue
```

Inside your project `eslint.config.js` file (ESLint récent)

If your project uses `"type": "module"` (ESM):

```js
import jaysalvat from '@jaysalvat/eslint-config-vue'

export default [
    ...jaysalvat
]
```

If your project uses CommonJS:

```js
const jaysalvat = require('@jaysalvat/eslint-config-vue')

module.exports = [
    ...jaysalvat
]
```

## Further Reading

* [Eslint shareable configurations](http://eslint.org/docs/developer-guide/shareable-configs)
* [How extend works](https://github.com/eslint/eslint/blob/master/docs/user-guide/configuring.md#extending-configuration-files)
