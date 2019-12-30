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
    { path: 'addProject', component: AddProject, props: { flag: 'add' } },
    { path: 'draft', component: Draft },
    { path: 'editProject/:id', component: AddProject, props: { flag: 'edit' } }
  ]
}
