
import Vue from 'vue/dist/vue.esm.browser'
import VueRouter from 'vue-router'
import { Renderer } from 'fela-vue'
import { html, css, cssinject } from './literals'

;(window as any).RUNTIME = {
  Vue,
  VueRouter,
  fela: new Renderer(),
  literals: { html, css, cssinject }
}