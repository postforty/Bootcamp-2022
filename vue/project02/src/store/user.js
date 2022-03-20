import VueCookies from 'vue-cookies'

export const user = {
  namespaced: true,
  state() {
    return {
      userInfo: {}
    }
  },
  getters: {
    isLogin(state) {
      // if (state.userInfo.name) {
      //   return true
      // } else {
      //   return false
      // }

      if (VueCookies.get('userInfo')) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    setUser(state, userInfo) {
      state.userInfo = userInfo
      VueCookies.set('userInfo', userInfo, '10s')
    },
    logout(state) {
      state.userInfo = {}
      VueCookies.remove('userInfo')
    }
  },
  actions: {}
}
