import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './login'
import Index from './index.vue'
import overview from './overview/route.js'
import projectManage from './projectManage/route.js'
import systemManage from './systemManage/route.js'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/index',
    component: Index,
    // redirect: '/index/projectManage',
    redirect: '/index/overview',
    children: [
      overview,
      projectManage,
      systemManage
    ]
  },
  { path: '*', component: Login }
]

export default new VueRouter({
  mode: 'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
