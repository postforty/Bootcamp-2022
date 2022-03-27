<template>
  <div>
    <p>{{ ProvideViewSize }}</p>
    <p>{{ ProvideViewStr }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  inject: ['ProvideViewSize', 'ProvideViewStr'],
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
