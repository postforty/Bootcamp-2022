<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <h1>Hello {{ userName2 }}</h1>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userName: 'Sewol',
      userName2: 'Han'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
