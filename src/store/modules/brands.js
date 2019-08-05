import Axios from "axios"
import Vue from "vue"
import Sign from "../../util/sign.js"
const state = {
  menus: [],
  currentMenuIndex: '0_'
}
const getters = {

}
const mutations = {
  get_brands_mutation: function(state, payload) {
    state.menus = payload
  },

}
const actions = {
  /*获取菜单*/
  get_brands_action: function(ctx, param) {
    return new Promise((resolve, reject) => {
      let headers = Sign.setHeader({})
      Axios.get("/backend/brands", {
        params: param,
        headers: headers
      }).then(res => {
        ctx.commit("get_brands_mutation", res.data);
        resolve(res.data)
      }).catch(e => {
        reject(e)
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
