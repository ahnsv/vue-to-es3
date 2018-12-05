import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'

const CustomElement = wrap(Vue, () => import(`./Home.vue`))

window.customElements.define('my-element', CustomElement)