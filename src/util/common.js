//判断通过flag判断flag值为param的对象是否在arr数组对象中
function inArrayObj(arr, flag, param) {
  if (arr.length == 0) {
    return null;
  }
  return arr.find((v) => {
    return v[flag] == param;
  });
}

function getIndexByFlag(array, flag, param) {
  array.forEach((v, k, arr) => {
    if (v[flag] == param) {
      return k
    }
  })
}
/*判断是否是对象*/
function isObject(obj) {
  if (obj instanceof Object) {
    return true
  } else {
    return false
  }
}
/*函数防抖，一段时间内只执行一次*/
function debounce(fn, wait) {
  let timeout = null
  return function() {
    if (timeout !== null) clearTimeout(timeout)
    timeout = setTimeout(fn, wait);
  }
}
/*节流函数，通过控制每次事件执行的时间间隔控制短时间多次执行方法
handler:要执行的方法
wait：每次点击事件执行的时间间隔(毫秒)
*/

function throttle(handler, wait) {
  var lastTime = 0;
  return function() {
    var nowTime = new Date().getTime();
    console.log("nowTime=" + nowTime + ",lastTime=" + lastTime)
    if (nowTime - lastTime > wait) {
      handler.apply(this, arguments);
      lastTime = nowTime;
    }

  }
}

/*异常处理*/
function delError(e) {
  if (isObject(e)) {
    if (e.response && e.response.status == 401) {
      location.href = "/"
      localStorage.removeItem("loginUser")
    } else {
      console.log("请求失败:" + JSON.stringify(e))
    }
  } else {
    console.log("请求失败:" + e)
  }
}


export default {
  inArrayObj: inArrayObj,
  isObject: isObject,
  throttle: throttle,
  debounce: debounce,
  delError: delError
}
