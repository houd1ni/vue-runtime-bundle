
import Vue from 'vue/dist/vue.esm.browser'
import VueRouter from 'vue-router'
import { Renderer, css } from 'fela-vue'
import { html } from './literals'

Object.assign(Vue.config, {
  productionTip: false,
  devtools: false
})

;(window as any).RUNTIME = {
  Vue,
  VueRouter,
  fela: new Renderer(),
  literals: { html, css }
}