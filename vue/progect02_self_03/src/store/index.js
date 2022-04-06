import { createStore } from 'vuex'
import { todo } from './todo'

export default createStore({
  modules: {
    todo
  }
})
