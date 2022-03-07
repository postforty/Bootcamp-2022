<template>
  <div>
    <div>
      <input type="text" name="" id="" v-model="firstName" />
      <input type="text" name="" id="" v-model="lastName" />
    </div>
    <div>
      <h1>Welcome, {{ title }} {{ firstName }} {{ lastName }}</h1>
      <h1>computed: Welcome, {{ fullName }}</h1>
    </div>
    <div>
      <p>Welcome, {{ title }} {{ firstName }} {{ lastName }}</p>
    </div>
    <div>
      <h3>Welcome, {{ title }} {{ firstName }} {{ lastName }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstName: '일남',
      lastName: '김',
      middleName: '',
      title: 'Mr. '
    }
  },
  computed: {
    fullName() {
      return this.title + ' ' + this.firstName + ' ' + this.lastName
    }
  }
  //   },
  //   setup() {},
  //   created() {},
  //   mounted() {},
  //   unmounted() {},
  //   methods: {}
}
</script>
