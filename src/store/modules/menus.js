import axios from "axios"
import Vue from "vue"

const state = {
	menus:[],
	currentMenuIndex:'0_'
}
const getters = {

}
const mutations = {
	get_menus_mutation:function(state,payload){
		state.menus = payload
	},
	
}
const actions = {
		/*获取菜单*/
	get_menus_action:function (ctx,param) {
		return new Promise((resolve,reject)=>{
			axios.get(Vue.prototype.GLOBAL.ajaxUrlPre + "/backend/menus").then(res=>{
				ctx.commit("get_menus_mutation",res.data);
			}).catch(e=>{
				return "请求失败，稍后再试！"
			})
		})
	}
}
export default{
	state,
	getters,
	mutations,
	actions
}