export const todo = {
  namespaced: true,
  state() {
    return {
      todos: [
        { id: 1, title: 'todo 1', done: true },
        { id: 2, title: 'todo 2', done: false },
        { id: 3, title: 'todo 3', done: false }
      ]
    }
  },
  getters: {
    todosCount(state) {
      return state.todos.length
    },
    doneTodosCount(state) {
      return state.todos.filter((todo) => todo.done).length
    },
    notDoneTodosCount(state) {
      return state.todos.filter((todo) => !todo.done).length
    }
  },
  mutations: {
    add(state, item) {
      state.todos.push(item)
    },
    done(state, id) {
      state.todos.filter((todo) => todo.id === id)[0].done = true
    }
  },
  actions: {
    // 비동기 처리 가능
    add: ({ commit }, item) => {
      // 서버에 new todo 저장
      setTimeout(() => {
        commit('add', item)
      }, 1000)
    },
    done: ({ commit }, item) => {
      // 서버에 할일 처리여부 done 저장
      setTimeout(() => {
        commit('done', item)
      }, 1000)
    }
  }
}
