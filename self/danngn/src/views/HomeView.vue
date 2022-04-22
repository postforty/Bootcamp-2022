<template>
  <SectionLayoutA />
  <SectionLayoutB />
  <SectionLayoutC />
  <SectionLayoutD />
  <SectionLayoutE :products="products" />
  <SectionLayoutF />
</template>
<script>
import SectionLayoutA from '@/components/layouts/SectionLayoutA.vue'
import SectionLayoutB from '@/components/layouts/SectionLayoutB.vue'
import SectionLayoutC from '@/components/layouts/SectionLayoutC.vue'
import SectionLayoutD from '@/components/layouts/SectionLayoutD.vue'
import SectionLayoutE from '@/components/layouts/SectionLayoutE.vue'
import SectionLayoutF from '@/components/layouts/SectionLayoutF.vue'
import Data from '@/mixins/data.js'

export default {
  mixins: [Data],
  components: {
    SectionLayoutA,
    SectionLayoutB,
    SectionLayoutC,
    SectionLayoutD,
    SectionLayoutE,
    SectionLayoutF
  },
  data() {
    return {}
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getProducts() {
      // this.products = dataFile.products
      // console.log(dataFile.products)
    }
  }
}
</script>
