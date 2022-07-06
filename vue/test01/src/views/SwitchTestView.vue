<template>
    <div></div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.ageRangeForm2(22))
  },
  unmounted() {},
  methods: {
    ageRangeForm2(age) {
      const front = String(age).slice(0, 1)
      const age_range = ''
      switch (front) {
        case '1':
          abe_range = '10대'
          break
        case '2':
          abe_range = '20대'
          break
        case '3':
          abe_range = '30대'
          break
        case '4':
          abe_range = '20대(이고 싶다 ㅠ_ㅠ)'
          break
        case '5':
          abe_range = '50대'
          break
        case 6:
          abe_range = '60대'
          break
        case 7:
          abe_range = '70대'
          break
        case 8:
          abe_range = '80대'
          break
        case 9:
          abe_range = '90대'
          break
      }
      return abe_range
    }
  }
}
</script>
