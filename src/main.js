import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from "./router"
import Vuex from 'vuex'
import store from './store'
import VueBus from './util/bus'

Vue.use(VueBus);
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Vuex)

import global from './global.js'

Vue.prototype.GLOBAL = global
Vue.http.options.emulateJSON = false;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
