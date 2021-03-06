import Axios from "axios"
import Vue from "vue"
import Sign from "@/util/sign.js"
import Common from "@/util/common"
const state = {
  menus: [],
  currentMenuIndex: '0_'
}
const getters = {

}
const mutations = {
  get_menus_mutation: function(state, payload) {
    state.menus = payload
  },

}
const actions = {
  /*获取菜单*/
  get_menus_action: function(ctx, param) {
    return new Promise((resolve, reject) => {
      let headers = Sign.setHeader({})
      
      Axios.get("http://localhost:8080/static/json/menus.json", {
        headers: headers
      }).then(res => {
        ctx.commit("get_menus_mutation", res.data);
        resolve(res.data)
      }).catch(e => {
      	if(Common.isObject(e)){
          if(e.response&&e.response.status==401){
            Common.logout()
          }else{
            console.log("请求失败:"+JSON.stringify(e))
          }
        }else{
          console.log("请求失败:"+e)
        }
      })
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
