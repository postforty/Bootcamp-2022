<template>
  <div>
    <div>
      <input type="text" name="" id="" v-model="firstName" />
      <input type="text" name="" id="" v-model="lastName" />
    </div>
    <h1>Welcome, {{ fullName }}</h1>
    <div>
      <p>{{ title }} {{ firstName }} {{ lastName }}</p>
    </div>
    <div>
      <h3>{{ title }} {{ firstName }} {{ lastName }}</h3>
    </div>
    <div>
      <input type="number" name="" id="" v-model="num1" />
      <input type="number" name="" id="" v-model="num2" />
      <span>{{ sum }}</span>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'Seungwon',
      lastName: 'Go',
      middleName: '',
      title: 'Mr.',
      num1: 0,
      num2: 0
    }
  },
  computed: {
    fullName() {
      return this.title + ' ' + this.firstName + ' ' + this.lastName
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
