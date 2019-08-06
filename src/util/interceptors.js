import axios from 'axios'
import router from 'vue-router'
import Sign from "./sign"
import ENV from "../../config/api.config"

const $axios = axios.create({
  baseURL: ENV.ENV == 'dev' ? '/api' : 'http://www.qxgnew.com/merchant', // api的base_url
  timeout: 5000 // 请求超时时间
});

// 拦截请求
$axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      let headers = Sign.setHeader(config.data)
      config.headers.post['Sign'] = headers.Sign
      config.headers.post['Timestamp'] = headers.Timestamp
      config.headers.post['Authorization'] = headers.Authorization
    }
    return config;
  }, error => { //请求错误处理   
    Promise.reject(error)
  }
)

// 拦截响应
$axios.interceptors.response.use(
  response => {
    return Promise.resolve(response.data)
  },
  err => {

    if (err.response) {
      switch (err.response.status) {
        case 401:
          // 这里写清除token的代码
          router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.fullPath } // 登录成功后跳入浏览的当前页面
          })
          break;
        case 422:
          return Promise.reject(err.response.data)
          break;
        case 405:
          return Promise.reject(err.response.data)
      }
    }
    console.log(JSON.stringify(err.response))
    return err
  }
)
export default $axios;
