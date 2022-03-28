import { createStore } from 'vuex'
import { todo } from './todo'
import { user } from './user'

export default createStore({
  modules: {
    todo,
    user
  }
})
