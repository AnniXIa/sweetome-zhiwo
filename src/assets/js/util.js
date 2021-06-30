import wx from 'weixin-js-sdk'

/**
 * 从地址栏获取传参
 * @param { String } name 参数名
 * @returns url中的指定参数
 */
const getQueryString = name => {
  let after = window.location.href.split("?")[1]
  if (after) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    let r = after.match(reg)
    if (r != null) {
      return decodeURIComponent(r[2])
    } else {
      return null
    }
  }
}
/**
 * 弹出、关闭弹窗
 * @parame { Object } page 当前调用页面实例this
 * @parame { String } popupType 弹窗字段
 * @parame { Boolean } type 关闭（true）、打开(false)
 */
const showHidePopup = (page, popupType, type) => {
  if (!type) {
    page[popupType] = 1
  } else {
    page[popupType] = 2
    setTimeout(() => { page[popupType] = 0 }, 500)
  }
}
/**
 * 获取当前时间
 * @returns { Object } 当前时间详细数据
 */
const getDate = () => {
  let dates = new Date()
  let years = dates.getYear() //获取当前年份(2位)
  let year = dates.getFullYear()//获取完整的年份(4位)
  let month = dates.getMonth() + 1//获取当前月份(0-11,0代表1月)
  let date = dates.getDate()//获取当前日(1-31)
  let day = dates.getDay()//获取当前星期X(0-6,0代表星期天)
  let hours = dates.getHours() //获取当前小时数(0-23)
  let minute = dates.getMinutes() //获取当前分钟数(0-59)
  let second = dates.getSeconds() //获取当前秒数(0-59)
  let timeStamp = dates.getTime() //获取当前时间(从1970.1.1开始的毫秒数)
  let secs = dates.getMilliseconds() //获取当前毫秒数(0-999)
  let dateDate = dates.toLocaleDateString() //获取当前日期
  let dateTime = dates.toLocaleTimeString() //获取当前时间
  let dateDateTime = dates.toLocaleString() //获取日期与时间
  return { year, month, date, hours, minute, second, day, timeStamp, dateDateTime, dates: dateDateTime.split(' ')[0].replace(/-/g, '/') }
}
/**
 * 时间戳转换时间
 * @param { Number } timestamp 时间戳
 * @param { Boolean、String、Number } type 时间戳类型，默认为秒
 * @returns 转换后的时间
 */
const timestampToTime = (timestamp, type = 0) => {
  var date = new Date(type ? timestamp : timestamp * 1000)//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  return Y + M + D + h + m + s
}
/**
 * 生成随机字符串
 * @param { Number } len 待生成字符串的长度，默认为32位
 * @returns 指定长度的随机字符串
 */
const randomString = (len = 32) => {
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'  /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length
  var pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}
/**
 * 生成随机数
 * @param { Number } min 生成范围下限
 * @param { Number } max 生成范围上限
 * @returns 指定范围内的随机数
 */
const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
} 
/**
 * 设置页面滚动距离
 * @param { Number } scrollTop 指定页面滚动距离
 */
const setPageScrollTop = scrollTop => {
  window.scrollTo(0, scrollTop)
  window.pageYOffset = scrollTop
  document.body.scrollTop = scrollTop
  document.documentElement.scrollTop = scrollTop
}
/**
 * 获取界面宽高
 * @returns 当前界面的宽高
 */
const getScreenWidthHeight = () => {
  return new Promise(resolve => {
    resolve({ width: document.body.clientWidth || document.documentElement.clientWidth, height: document.body.clientHeight || document.documentElement.clientHeight })
  })
}
/**
 * 获取dom距离页面x、y方向的距离
 * @param { Object } dom 指定原生dom
 * @returns dom距离页面x、y方向的距离
 */
const getDomPageDistance = dom => {
  return new Promise(resolve => {
    resolve({ left: dom.offsetLeft, top: dom.offsetTop })
  })
} 
/**
 * 判断当前浏览器环境
 * @returns 当前浏览器环境信息
 */
const getBrowserEnvironment = () => {
  return new Promise(resolve => {
    let u = navigator.userAgent.toLowerCase(), environment
    if (u.indexOf('windowsWechat') > -1) {
      environment = { status: 1, name: "PC端微信浏览器" }
    } else if (u.indexOf('windows') > -1) {
      environment = { status: 2, name: "PC端普通浏览器" }
    } else if (u.indexOf('iphone') > -1) {
      environment = { status: 3, name: "移动端苹果ios浏览器" }
    } else if (u.indexOf('android') > -1) {
      environment = { status: 4, name: "移动端安卓Android浏览器" }
    } else if (u.indexOf('ipad') > -1) {
      environment = { status: 5, name: "IPad端浏览器" }
    } else {
      environment = { status: 6, name: "其它浏览器" }
    }
    Object.assign(environment, { isweChat: u.includes('micromessenger') || u.includes('MicroMessenger') })
    resolve(environment)
  })
}
/**
 * 判断当前手机系统（Android/ios）
 * @returns 当前手机系统信息
 */ 
const isSystem = () => {
  return new Promise(resolve => {
    let u = navigator.userAgent
    let isWx = (u.toLowerCase().match(/MicroMessenger/i) == "micromessenger")
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
    let isIphone = /iphone/gi.test(window.navigator.userAgent)
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    let windowW = window.screen.width
    let windowH = window.screen.height
    let pixelRatio = window.devicePixelRatio
    let isX = isIphone && pixelRatio && pixelRatio === 3 && windowW === 375 && windowH === 812
    let isXsMax = isIphone && pixelRatio && pixelRatio === 3 && windowW === 414 && windowH === 896
    let isXR = isIphone && pixelRatio && pixelRatio === 2 && windowW === 414 && windowH === 896
    resolve({ isAndroid: isAndroid, isiOS: isiOS, system: u, isWx, isX: { isX: isX || isXsMax || isXR, X: isX, XsMax: isXsMax, XR: isXR } })
  })
}
/**
 * audioContext播放音乐
 * @param { String } mp3Url 音乐文件地址
 * @param { String } clickEle 控制按钮的id值
 * @param { Function } callback 回调函数
 */
const audioContextMusic = (mp3Url, clickEle, callback) => {
  let audioContext
  let audioBufferSourceNode
  let analyser
  let clickBtn = document.getElementById(clickEle)
  window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext
  audioContext = new window.AudioContext()
  analyser = audioContext.createAnalyser()
  analyser.fftSize = 256
  loadAudioFile(mp3Url)
  function loadAudioFile(url) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'arraybuffer'
    xhr.onload = function (e) {
      decodecFile(this.response)
    }
    xhr.send()
  }
  function decodecFile(fileContent) {
    audioContext.decodeAudioData(fileContent, function (buffer) {
      start(buffer)
    })
  }
  function start(buffer) {
    if (audioBufferSourceNode) { audioBufferSourceNode.stop() }
    audioBufferSourceNode = audioContext.createBufferSource()
    audioBufferSourceNode.connect(analyser)
    analyser.connect(audioContext.destination)
    audioBufferSourceNode.buffer = buffer
    audioBufferSourceNode.loop = true
    audioBufferSourceNode.start(0)
    callback({ status: 1 })
  }
  clickBtn.onclick = function () {
    if (audioContext.state === "suspended") {
      audioContext.resume()
      callback({ status: 1 })
    } else if (audioContext.state === "running") {
      audioContext.suspend()
      callback({ status: 2 })
    }
  }
}
/**
 * 保留指定位数小数
 * @param { Number } x 原数字
 * @param { Number } n 指定小数位，默认为2
 * @param { String } math 保留方式（none：取整保留、round：四舍五入保留、floor：向下保留）
 * @returns 保留指定位数小数后的数字
 */
const retainedDecimal = (x, n = 2, math = 'round') => {
  let f_x = parseFloat(x)
  if (isNaN(f_x)) {
    return 0
  }
  let _n = '1'
  for (let i = 0; i < n; i++) {
    _n += '0'
  }
  _n = Number(_n)
  if (math == 'none') {
    f_x = parseInt(x * _n) / _n
  } else if (math == 'round') {
    f_x = Math.round(x * _n) / _n
  } else if (math == 'floor') {
    f_x = Math.floor(x * _n) / _n
  }
  let s_x = f_x.toString()
  let pos_decimal = s_x.indexOf('.')
  if (pos_decimal < 0) {
    pos_decimal = s_x.length
    s_x += '.'
  }
  while (s_x.length <= pos_decimal + n) {
    s_x += '0'
  }
  return s_x
}
/**
 * js浮点数精度--两数相加
 * @param { Number } num1 数字1
 * @param { Number } num2 数字2
 * @returns 两数之和
 */
const accAdd = (num1, num2) => {
  let r1, r2, m
  try {
    r1 = num1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = num2.toString().split(".")[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return Math.round(num1 * m + num2 * m) / m
}
/**
 * js浮点数精度--两数相减
 * @param { Number } num1 数字1
 * @param { Number } num2 数字2
 * @returns 两数之差
 */
const accSub = (num1, num2) => {
  let r1, r2, m, n
  try {
    r1 = num1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = num2.toString().split(".")[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  n = (r1 >= r2) ? r1 : r2
  return (Math.round(num1 * m - num2 * m) / m).toFixed(n)
}
/**
 * js浮点数精度--两数相乘
 * @param { Number } num1 数字1
 * @param { Number } num2 数字2
 * @returns 两数之积
 */
const accMul = (num1, num2) => {
  let m = 0, s1 = num1.toString(), s2 = num2.toString()
  try { m += s1.split(".")[1].length } catch (e) { }
  try { m += s2.split(".")[1].length } catch (e) { }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}
/**
 * js浮点数精度--两数相除
 * @param { Number } num1 数字1
 * @param { Number } num2 数字2
 * @returns 两数之商
 */
const accDiv = (num1, num2) => {
  let t1, t2, r1, r2
  try {
    t1 = num1.toString().split('.')[1].length
  } catch (e) {
    t1 = 0
  }
  try {
    t2 = num2.toString().split(".")[1].length
  } catch (e) {
    t2 = 0
  }
  r1 = Number(num1.toString().replace(".", ""))
  r2 = Number(num2.toString().replace(".", ""))
  return (r1 / r2) * Math.pow(10, t2 - t1)
} 
/**
 * 图片base64路径处理
 * @param { String } base64 待处理base64字符串
 * @returns 处理后的base64字符串
 */
const base64Switch = base64 => {
  return "data:image/jpg;base64," + base64.slice(base64.indexOf("/9j"))
}
/**
 * 获取图片信息
 * @param { String } imgUrl 图片地址
 * @returns 图片信息
 */
const getImageInfo = imgUrl => {
  return new Promise(resolve => {
    let _curImg = new Image()
    _curImg.setAttribute("crossOrigin", "anonymous")
    _curImg.src = imgUrl
    _curImg.onload = () => {
      resolve({ newImg: _curImg, width: _curImg.width, height: _curImg.height })
    }
  })
}
/**
 * 获取file文件的详细信息
 * @param { Object } file file文件
 * @returns file文件的详细信息
 */
const getFileData = file => {
  return new Promise(resolve => {
    var reader = new FileReader(), _blobUrl = null
    if (window.createObjectURL != undefined) {
      _blobUrl = window.createObjectURL(file)
    } else if (window.URL != undefined) {
      _blobUrl = window.URL.createObjectURL(file)
    } else if (window.webkitURL != undefined) {
      _blobUrl = window.webkitURL.createObjectURL(file)
    }
    reader.readAsDataURL(file)
    reader.onload = e => {
      let img = new Image()
      img.src = e.target.result
      img.onload = () => {
        resolve({
          name: file.name,
          size: { bit: file.size, Kilobyte: Number((file.size / 1024).toFixed(2)), MByte: Number((file.size / 1024 / 1024).toFixed(2)), width: img.width, height: img.height },
          file: file,
          blob: _blobUrl,
          base64: reader.result
        })
      }
    }
  })
}
/**
 * 获取base64图片大小
 * @param { String } base64Url 图片base64地址
 * @returns base64图片大小
 */
const getBase64Size = base64Url => {
  let equalIndex = base64Url.indexOf('='), base64Size = 0
  if (equalIndex > 0) {
    let str = base64Url.substring(0, equalIndex)
    let strLength = str.length;
    let fileLength = strLength - (strLength / 8) * 2
    base64Size = Math.floor(fileLength)
  } else {
    let strLength = base64Url.length;
    let fileLength = strLength - (strLength / 8) * 2
    base64Size = Math.floor(fileLength)
  }
  return { bit: base64Size, Kilobyte: Number((base64Size / 1024).toFixed(2)), MByte: Number((base64Size / 1024 / 1024).toFixed(2)) }
}
/**
 * 获取网络图片信息
 * @param { String } img 网络图片地址
 * @returns 网络图片信息
 */
const getNetWorkImg = img => {
  let imgElems = document.getElementById(img)
  let url = imgElems.src
  let varperformance = window.performance || window.msPerformance || window.webkitPerformance
  let iTime = varperformance.getEntriesByName(url)[0]
  let imgSize = iTime.decodedBodySize || iTime.encodedBodySize
  return { bit: imgSize, Kilobyte: Number((imgSize / 1024).toFixed(2)), MByte: Number((imgSize / 1024 / 1024).toFixed(2)) }
}
/**
 * base64转文件流
 * @param { String } base64 待处理base64字符串
 * @param { String } filename file名称
 * @returns 转换得到的file文件
 */
const base64toFile = (base64, filename = 'file') => {
  let arr = base64.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let suffix = mime.split('/')[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${filename}.${suffix}`, {
    type: mime
  })
} 
/**
 * js防抖
 * @param { Function } fn 待防抖方法
 * @param { Number } delay 防抖时间间隔，默认为2000毫秒
 * @returns 防抖方法
 */
const DEBOUNCE = (fn, delay = 2000) => {
  let timer
  return () => {
    let th = this, args = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(th, args)
    }, delay)
  }
}
/**
 * js节流
 * @param { Function } fn 待节流方法
 * @param { Number } delay 防抖时间间隔，默认为2000毫秒
 * @returns 节流方法
 */
const THROTTLE = (fn, delay = 2000) => {
  let last, timer
  return () => {
    let th = this, args = arguments, now = +new Date()
    if (last && now - last < delay) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn.apply(th, args)
      }, delay)
    } else {
      last = now
      fn.apply(th, args)
    }
  }
} 

/**
 * 创建script标签并加载
 * @param { String } src js脚本地址
 * @returns Promise回调
 */
const loadScript = src => {
  return new Promise((resolve, reject) => {
    let _script = document.createElement("script")
    _script.async = false
    _script.src = src
    let evtName = null
    let evtListener = null
    function logic() {
      _script.parentNode.removeChild(_script)
      _script.removeEventListener(evtName, evtListener, false)
      resolve()
    }
    evtName = "load"
    evtListener = logic
    _script.addEventListener(evtName, evtListener, false)
    document.body.appendChild(_script)
  })
}

export {
  getQueryString,
  showHidePopup,
  getDate,
  timestampToTime, 
  setPageScrollTop,
  getScreenWidthHeight,
  getDomPageDistance,
  getBase64Size,
  getNetWorkImg,
  base64toFile,
  randomString,
  getRandomNum,
  getBrowserEnvironment,
  isSystem,
  audioContextMusic,
  retainedDecimal,
  base64Switch,
  accAdd,
  accSub,
  accMul,
  accDiv,
  getFileData,
  getImageInfo,
  DEBOUNCE,
  THROTTLE, 
  loadScript
}