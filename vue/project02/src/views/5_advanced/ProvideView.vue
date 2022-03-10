<template>
  <div>
    <provide-inject />
  </div>
</template>
<script>
import ProvideInject from '@/components/fragments/ProvideInject.vue'
export default {
  components: { 'provide-inject': ProvideInject },
  data() {
    return {
      sampleData: ''
    }
  },
  provide() {
    return {
      size: 5,
      str: 'AAA'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
