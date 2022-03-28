<template>
  <div>{{ todos }}</div>
  <div>전체 항목 수: {{ todosCount }}</div>
  <div>완료 항목 수: {{ $store.getters['todo/doneTodosCount'] }}</div>
  <div>미완료 항목 수: {{ $store.getters['todo/notDoneTodosCount'] }}</div>
  <button @click="addItem">추가(mutations)</button>
  <button @click="addItem2">추가(actions)</button>
  <div><button @click="login">로그인</button></div>
  <div v-if="userInfo.name">{{ userInfo.name }}님 환영합니다.</div>
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
      // mutations 함수 호출
      this.$store.commit('todo/add', { id: 4, title: 'todo 4', done: false })
    },
    addItem2() {
      // actions 함수 호출
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
