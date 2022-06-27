<template>
    <div>
    <button @click="addArr">자식 버튼: 배열 추가</button>
    <h2>{{checked2}}</h2>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  components: {},
  data() {
    return {
      // checked: [1, 2, 3, 4, 5],
      checked2: []
    }
  },
  mounted() {
    this.$emit('send-array', this.checked)
  },
  methods: {
    addArr() {
      this.checked2.push("추가")
      // console.log(this.checked)
    }
  }
}
</script>
