import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(ElementUI)

import global from './global.js'
Vue.prototype.GLOBAL = global

Vue.http.options.emulateJSON = false;
new Vue({
  el: '#app',
  render: h => h(App)
})
