import Index from './index.vue'
import userList from './userManage/userManageList.vue'

export default {
  path: 'systemManage',
  component: Index,
  redirect: '/index/systemManage/userList',
  children: [
    { path: 'userList', component: userList }
  ]
}
