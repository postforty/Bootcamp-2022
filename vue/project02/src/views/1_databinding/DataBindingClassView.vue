<template>
  <div>
    <div :class="class1">클래스 바인딩1</div>
    <div :class="{ active: isActive, 'text-red': hasError }">
      클래스 바인딩2
    </div>
    <div :class="{ active: 3 == 2, 'text-red': hasError }">클래스 바인딩3</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      class1: ['active', 'text-red'],
      isActive: true,
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
