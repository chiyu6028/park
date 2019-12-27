const addProject = {
  namespaced: true,
  state: {
    project_id: null,
    flag: null
  },
  mutations: {
    setProjectId (state, { projectId }) {
      state.project_id = projectId
    },
    setFlag (state, { flag }) {
      state.flag = flag
    }
  }
}

export default addProject
