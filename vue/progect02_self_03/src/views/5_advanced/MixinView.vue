<template>
  <div>aaa</div>
</template>
<script>
// import Axios from '@/mixins/axios.js'
export default {
  //   mixins: [Axios],
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    console.log('component에서 출력')
    this.getCustomers()
  },
  unmounted() {},
  methods: {
    async getCustomers() {
      const customers = await this.$get('http://localhost:3000/customers')
      console.log(customers)
    }
  }
}
</script>
