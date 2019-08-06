import CryptoJS from 'crypto-js'

function createSign(postParam = {}, getParam = {}) {
  let key = "1.0"
  let obj = Object.assign({}, postParam, getParam)
  
  let timestamp = Date.parse(new Date()) / 1000
  obj.timestamp = timestamp
  obj.key = key
  obj = objSort(obj)
  let str = queryParams(obj).toString();
  let md5Str = CryptoJS.MD5(str).toString();
  return md5Str
}
/*let key = "1.0";
let param = request.data; //post 参数
let queryParam = pm.request.url.query.members; //get中的参数

//将post和get合并
for (let i in queryParam) {
  param[queryParam[i].key] = queryParam[i].value;
}

postman.setGlobalVariable("timestamp", Math.floor(new Date().getTime() / 1000));
param.timestamp = postman.getGlobalVariable('timestamp');
param.key = key;
//排序
param = objSort(param);
//json，然后生成签名
urlStr = queryParams(param).toString();
console.log(urlStr)
let md5Str = CryptoJS.MD5(urlStr).toString();
postman.setGlobalVariable("sign", md5Str);
*/
//排序方法
function objSort(obj) {
  let keys = Object.keys(obj).sort();
  let arr = {};
  for (let i in keys) {
    arr[keys[i]] = obj[keys[i]];
  }
  return arr;
}
//
function queryParams(data) {
  let _result = [];
  for (let key in data) {
    let value = data[key];
    if (value) {
      _result.push(key + '=' + value);
    }
  }
  return _result.join('&');
}

function setHeader(data) {
  // body...
  return {
    'Sign': createSign(data),
    'Timestamp': Date.parse(new Date()) / 1000,
    'Authorization': localStorage.getItem("loginUser") ? "Bearer "+JSON.parse(localStorage.getItem("loginUser")).account.access_token : "",
  }
}
export default {
  setHeader: setHeader
}
