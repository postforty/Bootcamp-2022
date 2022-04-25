<template>
  <div>
    <div>{{ todos }}</div>
    <div>전체 항목수: {{ todosCount }}</div>
    <div>완료된 항목수: {{ doneTodosCount }}</div>
    <div>미완료 항목수: {{ notDoneTodosCount }}</div>
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
  // computed는 다른 데이터를 참조하여 데이터에 정의되지 않은 새로운 데이터를 만든다.
  computed: {
    todos() {
      // return this.$store.state.todos
      return this.$store.state.todo.todos
    },
    todosCount() {
      // return this.$store.getters.todosCount
      // return 값 가져올때
      return this.$store.getters['todo/todosCount']
    },
    doneTodosCount() {
      return this.$store.getters['todo/doneTodosCount']
    },
    notDoneTodosCount() {
      return this.$store.getters['todo/notDoneTodosCount']
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
      // mutations에 정의된 함수를 호출할 때는 commit 사용
      this.$store.commit('todo/add', { id: 4, title: 'mutations', done: false })
    },
    addItem2() {
      // actions에 정의된 함수 호출할 때는 dispatch 사용
      this.$store.dispatch('todo/add', { id: 5, title: 'actions', done: false })
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
