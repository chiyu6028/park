import Vue from 'vue'
import ElementUI from 'element-ui'
import '@utils/axios'
import App from './App.vue'
import router from './views/router.js'
// import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import '@css/common.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')