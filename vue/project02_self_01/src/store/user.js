export const user = {
  namespaced: true,
  state() {
    return {
      userInfo: {}
    }
  },
  getters: {},
  mutations: {
    setUser(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {}
}
