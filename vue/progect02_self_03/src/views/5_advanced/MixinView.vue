<template>
  <div>aaa</div>
</template>
<script>
// import Axios from '@/mixins/axios.js'
import Formatter from '@/mixins/Formatter.js'
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
    console.log('component에서 출력')
    this.getCustomers()
    console.log(this.$convertDateFormat('20220315', 'YYYY-MM-DD')) // (날짜, 형식)
    console.log(this.$convertNumberFormat(3500, '#,###')) // 3,500
    console.log(this.$convertNumberFormat(235643500, '#,###')) // 235,643,500
    console.log(this.$convertNumberFormat(5425.1, '#,###.##')) // 5,425.1
    console.log(this.$convertNumberFormat(5425.1, '#,###.#0')) // 5,425.10
    console.log(this.$convertNumberFormat(5425.1, '#.###,#0')) // 5.425,10
    console.log(this.$convertNumberFormat(5425.1, '$#,###.#0')) // $5,425.10
    console.log(this.$convertNumberFormat(-5425.1, '$#,###.#0')) // -$5,425.10
    console.log(this.$convertNumberFormat(125, '#,###.#0%')) // 125.00%
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
