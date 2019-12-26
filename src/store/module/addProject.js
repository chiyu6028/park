const addProject = {
  namespaced: true,
  state: {
    project_id: null
  },
  mutations: {
    setProjectId (state, { projectId }) {
      state.project_id = projectId
    }
  }
}

export default addProject
