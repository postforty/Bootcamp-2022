<template>
  <div></div>
</template>
<script>
import Formatter from '@/mixins/Fromatter.js'
export default {
  mixins: [Formatter],
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    // this.getCustomers()
    console.log(this.$convertDateFormat('20220315', 'YYYY-MM-DD'))
  },
  unmounted() {},
  methods: {
    //   async getCustomers() {
    //     const customers = await this.$get('http://localhost:3000/customers')
    //     console.log(customers)
    //   }
  }
}
</script>
