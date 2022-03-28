import { createStore } from 'vuex'
import { todo } from './todo'
import { user } from './user'
import persistedstate from 'vuex-persistedstate'

export default createStore({
  modules: {
    todo,
    user
  },
  plugins: [persistedstate({ paths: ['user.userInfo'] })]
})
