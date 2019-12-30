const getWinSize = () => ({
  screenHeight: window.screen.height,
  screenWidth: window.screen.width,
  screenAvailHeight: window.screen.availHeight,
  screenAvailWidth: window.screen.availWidth,
  bodyHeight: document.body.clientHeight,
  bodyWidth: document.body.clientWidth,
  htmlHeight: document.documentElement.clientHeight,
  htmlWidth: document.documentElement.clientWidth
})

const getConvert = (data, value = 'value', label = 'label') => {
  // data 必须是一个对象数组
  let convert = {}
  data.forEach(v => {
    convert[v[value]] = v[label]
  })
  return convert
}

const getConvertValue = (v, convert = {}) => {
  return v && convert && convert[v] !== undefined ? convert[v] : v
}

const getStringLen = string => {
  // 强转为字符串
  string = string ? string + '' : ''
  let arr = string.match(/[^\x00-\xff]/ig)
  return string.length + (arr && arr.length ? arr.length : 0)
}

const tools = {
  getWinSize,
  getConvert,
  getConvertValue,
  getStringLen
}

export default tools
