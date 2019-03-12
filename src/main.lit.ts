
import Vue from 'vue/dist/vue.esm.browser'
import VueRouter from 'vue-router'
import { html, css, cssinject } from './literals'

;(window as any).RUNTIME = {
  Vue,
  VueRouter,
  literals: { html, css, cssinject }
}