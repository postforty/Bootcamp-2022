<template>
    <div>
    <!-- <button type="button" @click="childFunc" ref="btn">자식 컴포넌트 데이터 변경</button> -->
    <button type="button" @click="countUp" ref="btn">자식 버튼</button>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      msg: '메시지',
      count: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    childFunc() {
      this.msg = '변경된 메시지'
    },
    countUp() {
      this.count++
    }
  }
}
</script>
