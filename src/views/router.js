import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './login'
import Index from './index.vue'
import overview from './overview/route.js'
import projectManage from './projectManage/route.js'
import systemManage from './systemManage/route.js'
import URL from '@config/urlConfig.js'
import { MessageBox } from 'element-ui'
import axios from 'axios'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/index',
    component: Index,
    redirect: '/index/overview',
    children: [
      overview,
      projectManage,
      systemManage
    ]
  },
  { path: '*', component: Login }
]

const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let islogin = sessionStorage.getItem('islogin')
  let pathname = to.path
  if (pathname === '/thirdlogin') {
    sessionStorage.clear()
    let loginname = to.query ? to.query.loginname : ''
    thirdlogin(pathname, loginname)
  } else {
    if (to.path !== '/login') { // 是否跳转登录页面
      if (islogin !== '1') { // 如果没有登录
        router.push({ path: '/login' }).catch(err => err)
      } else {
        next()
      }
    } else {
      next()
    }
    if (islogin !== '1') {
      router.push({ path: '/login' }).catch(err => err)
    }
    if (to.path === '/login') {
      next()
    }
  }
})

let thirdlogin = (pathname, loginname) => {
  if (loginname) {
    let searchObj = {
      'username': loginname,
      'password': '123456'
    }
    axios.post(URL['LOGIN'], searchObj).then(resp => {
      if (resp.status === 200 && resp.data && resp.data.code === 1) {
        axios.get(URL['getSessionUserInfo']).then(resp => {
          if (resp.status === 200) {
            if (resp.data && resp.data.code === 1 && resp.data.data) {
              let dataItem = resp.data.data
              sessionStorage.setItem('role', dataItem.userRole)
              sessionStorage.setItem('user', JSON.stringify(dataItem))
              sessionStorage.setItem('islogin', '1')
              switch (dataItem.userRole) {
                case '1':
                  router.push({ path: '/index' }).then(res => {
                    // 改变当前页面的路径
                    let location = window.location
                    window.location.replace(location.origin + '/' + location.hash)
                  })
                  break
                case '2':
                case '3':
                  router.push({ path: '/index/projectManage/projectList' }).then(res => {
                    // 改变当前页面的路径
                    let location = window.location
                    window.location.replace(location.origin + '/' + location.hash)
                  })
                  break
              }
            } else {
              MessageBox.alert(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
            }
          } else {
            MessageBox.alert('系统异常，请联系管理员！')
          }
        })
      } else {
        this.dialogVisible = true
        this.loginResult = resp.data && resp.data.msg ? resp.data.msg : '系统异常，请联系管理员！'
      }
    })
  } else {
    MessageBox.alert('快捷登录失败!')
  }
}

export default router
