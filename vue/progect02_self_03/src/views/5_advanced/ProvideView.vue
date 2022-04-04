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
      ProvideView_size: 5,
      ProvideView_str: this.sampleData
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
