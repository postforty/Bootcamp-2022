<template>
  <div>
    <div>
      <input type="text" name="" id="" v-model="firstName" />
      <input type="text" name="" id="" v-model="lastName" />
    </div>
    <h1>{{ fullName }}</h1>
  </div>
  <div>
    <p>Welcome, {{ title }} {{ firstName }} {{ lastName }}</p>
  </div>
  <div>
    <input type="number" name="" id="" v-model="num1" />
    <input type="number" name="" id="" v-model="num2" />
    <span>{{ sum }}</span>
  </div>
  <div>
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
      firstName: 'Sewol',
      lastName: 'Han',
      middelName: '',
      title: 'Mr.',
      num1: 0,
      num2: 0,
      changeHistory: []
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
  methods: {}
}
</script>
