
import Vue from 'vue/dist/vue.esm.browser'
import VueRouter from 'vue-router'
import { Renderer, css as felaCss } from 'fela-vue'
import { html, css, cssinject } from './literals'

;(window as any).RUNTIME = {
  Vue,
  VueRouter,
  fela: new Renderer(),
  felaCss,
  literals: { html, css, cssinject }
}