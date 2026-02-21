
/* eslint-env node */

import vue from 'eslint-plugin-vue'
import jaysalvat from '@jaysalvat/eslint-config'

export default [
	...jaysalvat,
  {
    languageOptions: {
      ecmaVersion: 6,
      sourceType: 'script'
    },
    plugins: {
	  vue
    },
    rules: {
      'vue/script-indent': [ 2, 2, {
        baseIndent: 1,
        switchCase: 1,
        ignores: []
      } ],
      'vue/no-v-html': 0,
      'vue/no-multiple-template-root': 0,
      'vue/attributes-order': [ 0, {} ],
      'vue/html-closing-bracket-newline': [ 2, {
        singleline: 'never',
        multiline: 'always'
      } ],
      'vue/max-attributes-per-line': [ 2, {
        singleline: 6,
        multiline: {
          max: 1
        }
      } ],
      'vue/multiline-html-element-content-newline': [ 1, {
        ignoreWhenEmpty: false,
        allowEmptyLines: false
      } ],
      'vue/singleline-html-element-content-newline': [ 0, {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true
      } ]
    }
  },
  {
    files: [ '*.vue' ],
    rules: {
      indent: 'off'
    }
  }
]
