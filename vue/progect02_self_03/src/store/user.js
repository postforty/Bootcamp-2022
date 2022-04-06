export const user = {
  namespaced: true,
  state() {
    return {
      userInfo: {
        // name: 'Sewol',
        // email: 'sewol@gmail.com',
        // tel: '010-0000-0000'
      }
    }
  },
  getters: {
    isLogin(state) {
      if (state.userInfo.name) {
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
