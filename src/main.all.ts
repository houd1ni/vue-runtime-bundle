
import Vue from 'vue/dist/vue.esm.browser'
import VueRouter from 'vue-router'
import { Renderer, css as felaCss } from 'fela-vue'
import { html, css, cssinject } from './literals'

Object.assign(Vue.config, {
  productionTip: false,
  devtools: false
})

;(window as any).RUNTIME = {
  Vue,
  VueRouter,
  fela: new Renderer(),
  felaCss,
  literals: { html, css, cssinject }
}