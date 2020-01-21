import overview from './overview'
// import projectManage from './management'
// import systemManage from './systemManage'

const whitePage = {
  template: `<div />`
}

const routes = [
  { path: '/overview', component: whitePage, redirect: '/overview/index', children: overview }
  // { path: '/projectManage', component: whitePage, redirect: '/projectManage/index', children: projectManage },
  // { path: '/systemManage', component: whitePage, redirect: '/systemManage/index', children: systemManage }
]

export default routes
