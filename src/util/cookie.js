let ck = {}

ck.setCookie = (name, value, day) => {
  let exp = new Date()
  exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000)
  document.cookie = name + "=" + encodeURI(value) + "expires=" + exp.toGMTString()
}

ck.getCookie = (name) => {
  let arr, reg = new RegExp("(^| )" + name + "=([^]*)(|$)")
  if (arr = document.cookie.match(reg)) {
    return decodeURI(arr[2])
  }
  else {
    return null
  }
}

export default ck
