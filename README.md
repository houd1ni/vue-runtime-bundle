# vue-runtime-bundle
Vue and friends bundle for embedded in-browser development.
**Fits for migrations to vue!**

[![bundlephobia](https://badgen.net/bundlephobia/minzip/vue-runtime-bundle)](https://bundlephobia.com/result?p=vue-runtime-bundle)  [![npm](https://badgen.net/npm/v/vue-runtime-bundle)](https://www.npmjs.com/package/vue-runtime-bundle) [![Deps](https://david-dm.org/houd1ni/vue-runtime-bundle.svg)](https://david-dm.org/houd1ni/vue-runtime-bundle) [![DevDeps](https://david-dm.org/houd1ni/vue-runtime-bundle/dev-status.svg)](https://david-dm.org/houd1ni/vue-runtime-bundle)

**Allows easily scaffold an embedded application with Vue, VueRouter, and optionally fela-vue or literal css.**

Included:
- [vue](https://github.com/vuejs/vue)
- [vue-router](https://github.com/vuejs/vue-router)
- [fela-vue](https://github.com/houd1ni/fela-vue)


## USAGE

See [Test Example](https://github.com/houd1ni/vue-runtime-bundle/tree/master/test/)

**I suggest to use fela-vue 'cause it has all production stuff and could be easily adopted after migration to, for instance, vue-cli builds.**

Common principle is:
- Include `dist/fela.js`(recommended) or `dist/lit.js` or `dist/all.js`(to play with).
- Make your components according to
  - Either [fela-vue](https://github.com/houd1ni/fela-vue) documentation.
  - Or the example above using css\`...\` or cssinject\`...\` literals. 
  - and html\`here goes your vue template\` as a template field of them.
- Do `new Vue()`.