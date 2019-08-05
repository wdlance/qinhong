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
import Axios from "axios"
import ENV from "../config/api.config"
/*引入全局css样式*/
import "@/assets/css/common.scss"
/*引入全局directives*/
import preventReClick from "@/util/directives"
import inputLimit from "@/util/directives"
/*引入全局变量*/
import Global from "@/util/global"
Vue.prototype.Global = Global

if(ENV.ENV=='dev'){
	Axios.defaults.baseURL = '/api'
}else{
	Axios.defaults.baseURL = 'http://10.0.2.21'
}

/*Axios.defaults.baseURL = 'http://10.0.2.21'*/

Vue.use(VueBus);
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Vuex)

Vue.http.options.emulateJSON = false;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
