<template>
  <div>
    <div>{{ todos }}</div>
    <div>젠체 항목수: {{ todosCount }}</div>
    <button @click="addItem">추가(mutation)</button>
    <button @click="addItem2">추가(dispatch)</button>
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
      //   return this.$store.getters.todosCount
      return this.$store.state.user.userInfo
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addItem() {
      //   this.$store.commit('add', { id: 4, title: 'todo 4', done: false })
      this.$store.commit('todo/add', { id: 4, title: 'todo 4', done: false })
    },
    addItem2() {
      //   this.$store.dispatch('add', { id: 5, title: 'todo 5', done: false })
      this.$store.dispatch('todo/add', { id: 5, title: 'todo 5', done: false })
    },
    login() {
      this.$store.commit('user/setUser', {
        name: 'Sewol',
        email: 'sewol@gmail.com'
      })
    }
  }
}
</script>
