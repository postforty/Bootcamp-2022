<template>
  <div><div :class="class1">클래스 바인딩</div></div>
  <div>
    <div :class="{ active: 0, 'text-red': hasError }">클래스 바인딩</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      class1: ['active', 'text-red'],
      isActive: false,
      hasError: true
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.active {
  background-color: green;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
