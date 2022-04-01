<template>
  <div>
    <input type="text" name="" id="" v-model="firstName" />
    <input type="text" name="" id="" v-model="lastName" />
    <h1>Welcome, {{ fullName }}</h1>
  </div>
  <input type="number" name="" id="" v-model="num1" />*
  <input type="number" name="" id="" v-model="num2" />=
  <span>{{ sum }}</span>
  <button @click="doCalculate">콘솔에 결과 출력</button>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'Sewol',
      lastName: 'Han',
      middleName: '',
      title: 'Mr. ',
      num1: 0,
      num2: 0
    }
  },
  computed: {
    fullName() {
      return this.title + this.firstName + ' ' + this.lastName
    },
    sum() {
      return this.num1 * this.num2
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doCalculate() {
      console.log(this.sum)
    }
  }
}
</script>
