<template>
  <div>A</div>
</template>
<script>
// import Axios from '@/mixins/axios'
import Formatter from '@/mixins/formatter.js'

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
    console.log('컴포넌트에서 출력')
    console.log(this.$converDateFormat(new Date(), 'MM-DD-YYYY'))
    // this.printA()
    // this.printB()
    this.getCustomers()
  },
  unmounted() {},
  methods: {
    // printB() {
    //   console.log('B')
    // }
    async getCustomers() {
      const customers = await this.$get('http://localhost:3000/customers')
      console.log(customers)
    }
  }
}
</script>
