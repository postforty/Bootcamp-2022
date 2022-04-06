<template>
  <div>
    <!-- <div>{{ $store.state.todos }}</div> -->
    <div>{{ todos }}</div>
    <button @click="addItem">추가(mutations)</button>
    <button @click="addItem2">추가(actions)</button>
    <button @click="doneItem">완료(mutations)</button>

    <div>전체 항목수: {{ todosCount }}</div>
    <div>완료된 항목수: {{ doneTodosCount }}</div>
    <div>미완료 항목수: {{ notDoneTodosCount }}</div>
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
      // 데이터 가져올 때
      return this.$store.state.todo.todos
    },
    todosCount() {
      // return 값 가져올 때
      return this.$store.getters['todo/todosCount']
    },
    doneTodosCount() {
      return this.$store.getters['todo/doneTodosCount']
    },
    notDoneTodosCount() {
      return this.$store.getters['todo/notDoneTodosCount']
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
    doneItem() {
      this.$store.commit('todo/done', 3)
    },
    addItem2() {
      // actions에 정의된 함수 호출할 때는 dispatch 사용
      this.$store.dispatch('todo/add', { id: 5, title: 'actions', done: false })
    }
  }
}
</script>
