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

const tools = {
  getWinSize
}

export default tools
