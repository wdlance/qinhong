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
//引入axios
import Axios from 'axios'
//修改原型链，全局使用axios,这样之后可在每个组件的methods中调用$axios命令完成数据请求
Vue.prototype.$axios=Axios 
/*引入axios拦截器*/
import "./util/interceptors"

/*引入全局css样式*/
import "@/assets/css/common.scss"

/*引入全局directives*/
import preventReClick from "@/util/directives"
import inputLimit from "@/util/directives"

/*引入全局变量*/
import Global from "@/util/global"
Vue.prototype.Global = Global

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
