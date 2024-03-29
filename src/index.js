import Vue from 'vue'
import ElementUI from 'element-ui'
import '@utils/axios'
import App from './App.vue'
import router from './views/router.js'
import store from './store'
//import 'babel-polyfill'
// import echarts from 'echarts'

import 'element-ui/lib/theme-chalk/index.css'
import '@css/common.scss'
import uploader from 'vue-simple-uploader'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

Vue.use(VideoPlayer)

// Vue.prototype.$echarts = echarts
Vue.use(uploader)

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
