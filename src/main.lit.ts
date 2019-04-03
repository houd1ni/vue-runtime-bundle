
import Vue from 'vue/dist/vue.esm.browser'
import VueRouter from 'vue-router'
import { html, css, cssinject } from './literals'

Object.assign(Vue.config, {
    productionTip: false,
    devtools: false
})

;(window as any).RUNTIME = {
  Vue,
  VueRouter,
  literals: { html, css, cssinject }
}