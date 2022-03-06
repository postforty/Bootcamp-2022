<template>
  <div>
    <button @click="increaseCounter">Add 1</button>
    <!-- 함수를 호출하지 않고 click 속성에 바로 적용할 수도 있다. -->
    <!-- <button @click="counter += 1">Add 1</button> -->
    <p>{{ counter }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter += 1
    }
  }
}
</script>
