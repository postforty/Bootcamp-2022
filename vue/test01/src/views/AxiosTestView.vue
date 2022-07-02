<template>
    <div>Axios Test</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      babsangData: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getBabsangData()
    this.getAppliedBabsangList()
  },
  unmounted() {},
  methods: {
    async getBabsangData() {
      const babsangData = await this.$get('/babsang')
      babsangData.result.sort(function (a, b) {
        return b.id - a.id
      })
      console.log(babsangData.result)
      this.babsangData = babsangData
    },
    async getAppliedBabsangList() {
      const raw = {
        email: 'wqeqg@y.omc'
      }
      const babsangData = await this.$getParam(
        'https://nicespoons.com/api/v1/babsang/get?type=appliedList',
        raw
      )
      console.log(babsangData)
    }
  }
}
</script>
