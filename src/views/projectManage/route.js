import Index from './index.vue'
import ProjectList from './projectList'
import AddProject from './addProject'
import Draft from './draft'

export default {
  path: 'projectManage',
  component: Index,
  redirect: '/index/projectManage/projectList',
  children: [
    { path: 'projectList', component: ProjectList },
    { path: 'addProject', component: AddProject },
    { path: 'draft', component: Draft }
  ]
}
