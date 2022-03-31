<template>
  <div :class="class1">클래스 바인딩1</div>
  <div :class="{ active: isActive, 'text-red': 3 == 3 }">클래스 바인딩2</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      class1: ['active', 'text-red'],
      isActive: false
      //   hasError: true
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
