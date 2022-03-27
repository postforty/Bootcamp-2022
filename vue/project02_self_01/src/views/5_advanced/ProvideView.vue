<template>
  <div>
    <provide-inject />
  </div>
</template>
<script>
import ProvideInject from '@/components/fragments/ProvideInject.vue'
export default {
  components: { ProvideInject },
  data() {
    return {
      sampleData: 'AAA'
    }
  },
  provide() {
    return {
      ProvideViewSize: 5,
      ProvideViewStr: this.sampleData
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
