<template>
  <div>
    <p>{{ ProvideView_size }}</p>
    <p>{{ ProvideView_str }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  inject: ['ProvideView_size', 'ProvideView_str'],
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
