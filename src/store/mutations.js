const mutations = {
  setProvince (state, { value = [] }) {
    state.province = value
  },
  setCity (state, { value = [] }) {
    state.city = value
  },
  setEgion (state, { value = [] }) {
    state.egion = value
  },
  setStreet (state, { value = [] }) {
    state.street = value
  },
  setUser (state, value) {
    state.user = value
  },
  setRole (state, value = '3') {
    state.role = value
  },
  setIslogin (state, value) {
    state.islogin = value
  }
}

export default mutations
