<template>
  <div></div>
</template>
<script>
import Formatter from '@/mixins/formatter.js'
// import Axios from '@/mixins/axios.js'
export default {
  mixins: [Formatter],
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
    // console.log('컴포넌트에서 출력')
    // console.log(this.$convertDateFormat('20220315', 'YYYY-MM-DD'))
    console.log(this.$convertNumberFormat(3500, '#,###'))
    console.log(this.$convertNumberFormat(235643500, '#,###'))
    console.log(this.$convertNumberFormat(5425.1, '#,###.##'))
    console.log(this.$convertNumberFormat(5425.1, '#,###.#0'))
    console.log(this.$convertNumberFormat(5425.1, '#.###,#0'))
    console.log(this.$convertNumberFormat(5425.1, '$#,###.#0'))
    console.log(this.$convertNumberFormat(-5425.1, '$#,###.#0'))
    console.log(this.$convertNumberFormat(125, '#,###.#0%'))
    // this.printA()
    // this.getCustomers()
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
