<template>
  <div>
    <div>{{ todos }}</div>
    <div>전체 항목수: {{ todosCount }}</div>
    <button @click="addItem">추가(mutations)</button>
    <button @click="addItem2">추가(actions)</button>
    <div><button @click="login">로그인</button></div>
    <div v-if="userInfo.name">{{ userInfo.name }}님 환영합니다.</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  computed: {
    todos() {
      //   return this.$store.state.todos
      return this.$store.state.todo.todos
    },
    todosCount() {
      //   return this.$store.getters.todosCount
      return this.$store.getters['todo/todosCount']
    },
    userInfo() {
      return this.$store.state.user.userInfo
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addItem() {
      // mutations에 정의된 함수 호출할 때는 commit 사용
      //   this.$store.commit('add', { id: 4, title: 'todo 4', done: false })
      this.$store.commit('todo/add', { id: 4, title: 'todo 4', done: false })
    },
    addItem2() {
      // actions에 정의된 함수 호출할 때는 dispatch 사용
      //   this.$store.dispatch('add', { id: 4, title: 'todo 4', done: false })
      this.$store.dispatch('todo/add', { id: 4, title: 'todo 4', done: false })
    },
    login() {
      this.$store.commit('user/setUser', {
        name: 'Seungwon Go',
        email: 'seungwon.go@gmail.com'
      })
    }
  }
}
</script>
