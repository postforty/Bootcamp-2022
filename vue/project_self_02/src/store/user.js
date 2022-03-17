export const user = {
  namespaced: true,
  state() {
    return {
      userInfo: {}
    }
  },
  getters: {
    isLogin(state) {
      if (state.userInfo.namespaced) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    setUser(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {}
}
