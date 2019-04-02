
import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.browser' non-production
import VueRouter from 'vue-router'
import { html, css, cssinject } from './literals'

Vue.config.productionTip = false

;(window as any).RUNTIME = {
  Vue,
  VueRouter,
  literals: { html, css, cssinject }
}