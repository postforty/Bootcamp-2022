<template>
  <div>{{ size }}</div>
  <div>{{ str }}</div>
</template>
<script>
export default {
  components: {},
  inject: ['size', 'str'],
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
