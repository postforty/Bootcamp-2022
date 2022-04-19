<template>
  <SectionLayoutA />
  <SectionLayoutB />
  <SectionLayoutC />
  <SectionLayoutD />
  <SectionLayoutE />
  <SectionLayoutF />
</template>
<script>
import SectionLayoutA from '@/components/layouts/SectionLayoutA.vue'
import SectionLayoutB from '@/components/layouts/SectionLayoutB.vue'
import SectionLayoutC from '@/components/layouts/SectionLayoutC.vue'
import SectionLayoutD from '@/components/layouts/SectionLayoutD.vue'
import SectionLayoutE from '@/components/layouts/SectionLayoutE.vue'
import SectionLayoutF from '@/components/layouts/SectionLayoutF.vue'

export default {
  components: {
    SectionLayoutA,
    SectionLayoutB,
    SectionLayoutC,
    SectionLayoutD,
    SectionLayoutE,
    SectionLayoutF
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
