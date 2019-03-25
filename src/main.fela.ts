
import Vue from 'vue/dist/vue.esm.browser'
import VueRouter from 'vue-router'
import { Renderer, css } from 'fela-vue'
import { html } from './literals'

;(window as any).RUNTIME = {
  Vue,
  VueRouter,
  fela: new Renderer(),
  literals: { html, css }
}