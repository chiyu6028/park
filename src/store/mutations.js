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
  }
}

export default mutations
