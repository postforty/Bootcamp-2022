<template>
  <div :style="style1">스타일 바인딩: 글씨는 red, 폰트크기: 30px</div>
  <div :style="style2">스타일 바인딩: 글씨는 red, 폰트크기: 30px</div>
  <button @click="style2.color = 'blue'">색상바꾸기</button>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      style1: 'color: red; font-size: 30px',
      style2: {
        color: 'red',
        fontSize: '30px'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
