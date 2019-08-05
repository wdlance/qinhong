import Axios from "axios"
import Vue from "vue"
import Sign from "@/util/sign";
import Common from "@/util/common"
const state = {
  adminList: [],
  dataCount: 0
}
const getters = {
  /*通过id获取某个管理员信息*/
  getAdminById: function(state) {
    return function(id) {
      return state.adminList.find(admin => admin.id === id)
    }
  }
}
const mutations = {
  list_account_mutation: (state, payload) => {
    state.adminList = payload.data.list.data
    state.dataCount = payload.data.list.total
  },
  edit_account_mutation: (state, payload) => {
    
  }
}
const actions = {
  /*管理员登录*/
  account_login_action: (ctx, param) => {
    let data = {
      username: param.username,
      password: param.password
    }
    let formData = new FormData()
    formData.append("username", param.username)
    formData.append("password", param.password)
    return new Promise((resolve, reject) => {
      let headers = Sign.setHeader(data)
      Axios.post(`/backend/auth/login`, formData, {
        headers: headers
      }).then(function(response) {
        if (response.data.code == '000') {
          localStorage.setItem("loginUser", JSON.stringify(response.data.data))
          resolve(response.data)
        } else {
          resolve(response.data)
        }
      }, function(err) {
        Common.delError(err)
      });
    })
  },
  /*管理员登出*/
  account_logout_action: (ctx, param) => {
    return new Promise((resolve, reject) => {
      let headers = Sign.setHeader({})
      Axios.post(`/backend/auth/logout`, {}, {
        headers: headers
      }).then(function(response) {
        if (response.data.code == '000') {
          resolve(response.data)
        } else {
          resolve(response.data)
        }
      }, function(err) {
        Common.delError(err)
      });
    })
  },
  /*获取管理员列表*/
  list_account_action: (ctx, param) => {
    return new Promise((resolve, reject) => {
      let headers;
      if (param != undefined) {
        headers = Sign.setHeader({ param })
      } else {
        headers = Sign.setHeader({})
      }

      let formData = new FormData()
      if (param != undefined && param.keyword != undefined) {
        formData.append("keyword", param.keyword)
      }
      if (param != undefined && param.keyword != undefined) {
        formData.append("status", param.status)
      }
      if (param != undefined && param.keyword != undefined) {
        formData.append("page", param.page)
      }

      Axios.get(`/backend/admin/list`, {
        params: formData,
        headers: headers
      }).then(function(response) {
        if (response.data.code == "000") {
          ctx.commit("list_account_mutation", response.data)
        }
        resolve(response.data)
      }, function(err) {
        Common.delError(err)
      });
    })
  },
  /*添加管理员*/
  add_account_action: (ctx, param) => {
    return new Promise((resolve, reject) => {
      let headers = Sign.setHeader({ param })
      let formData = new FormData()
      formData.append("username", param.username)
      formData.append("password", param.password)
      formData.append("mobile", param.mobile)
      formData.append("nickname", param.nickname)
      formData.append("email", param.email)
      formData.append("avatar", param.avatar)
      formData.append("contacts", param.contacts)
      Axios.post(`/backend/admin/add`, formData, {
        headers: headers
      }).then(function(response) {
        resolve(response.data)
      }, function(err) {
        Common.delError(err)
      });
    })
  },
  /*编辑管理员*/
  edit_account_action: (ctx, param) => {
    return new Promise((resolve, reject) => {
      let headers = Sign.setHeader({ param })
      let formData = new FormData()
      formData.append("user_id", param.user_id)
      formData.append("mobile", param.mobile)
      formData.append("nickname", param.nickname)
      formData.append("email", param.email)
      formData.append("avatar", param.avatar)
      formData.append("contacts", param.contacts)
      Axios.post(`/backend/admin/edit`, formData, {
        headers: headers
      }).then(function(response) {
        if (response.data.code == '000') {
          ctx.commit("edit_account_mutation", param)
        }
        resolve(response.data)
      }, function(err) {
        Common.delError(err)
      });
    })
  },
  /*解封账号*/
  unfreeze_account_action: (ctx, param) => {
    return new Promise((resolve, reject) => {
      let headers = Sign.setHeader({ param })
      let formData = new FormData()
      formData.append("user_id", param.user_id)
      Axios.post(`/backend/admin/unfreeze-account`, formData, {
        headers: headers
      }).then(function(response) {
        resolve(response.data)
        ctx.commit("unfreeze-account_mutation", response.data)
      }, function(err) {
        Common.delError(err)
      });
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
