<template>
  <div>
    <input type="text" name="" id="" v-model="firstName" />
    <input type="text" name="" id="" v-model="lastName" />
    <h1>Welcome, {{ fullName }}</h1>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'Sewol',
      lastName: 'Han',
      middleName: '',
      title: 'Mr. '
    }
  },
  computed: {
    fullName() {
      return this.title + this.firstName + ' ' + this.lastName
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
