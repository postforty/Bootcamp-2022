<template>
  <div>
    <input type="text" name="" id="" v-model="firstName" />
    <input type="text" name="" id="" v-model="lastName" />
    <!-- <h1>Welcome, {{ fullName }}</h1> -->
  </div>
  <select name="" id="" v-model="selected">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
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
      selected: '',
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
