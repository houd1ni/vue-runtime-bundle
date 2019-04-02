
import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.browser' non-production
import VueRouter from 'vue-router'
import { Renderer, css } from 'fela-vue'
import { html } from './literals'

Vue.config.productionTip = false

;(window as any).RUNTIME = {
  Vue,
  VueRouter,
  fela: new Renderer(),
  literals: { html, css }
}