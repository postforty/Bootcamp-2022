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
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'Sewol',
      lastName: 'Han',
      middelName: '',
      title: 'Mr.',
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
  methods: {}
}
</script>
