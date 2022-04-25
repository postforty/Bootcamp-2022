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
    <select name="" id="" v-model="selected">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selected: '',
      fullName: '',
      firstName: 'Seungwon',
      lastName: 'Go',
      middleName: '',
      title: 'Mr.',
      num1: 0,
      num2: 0,
      changeHistory: []
    }
  },
  watch: {
    firstName(newValue, oldValue) {
      console.log(`${oldValue} -> ${newValue}`)
    },
    selected(newValue, oldValue) {
      this.changeHistory.push(newValue)
      console.log(this.changeHistory)
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
