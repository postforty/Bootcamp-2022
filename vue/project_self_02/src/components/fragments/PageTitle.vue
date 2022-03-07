<template>
  <div>
    <!-- <h3>페이지 제목</h3> -->
    <h3>
      {{ title }} <small>({{ title2 }})</small>
    </h3>
    <div>{{ list }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    // props는 properties의 약자
    title: {
      type: String,
      // 부모 component로 부터 전달 받은 값이 없을 때의 기본값
      default: '페이지 제목'
    },
    title2: {
      type: String,
      default: ''
    },
    num1: {
      type: Number,
      default: 0
    },
    isBoolean: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      // 배열과 오브젝트는 기본값 지정시 function 함수로 return해야 한다.
      default: function () {
        return []
      }
    }
  }
  //   },
  //   setup() {},
  //   created() {},
  //   mounted() {},
  //   unmounted() {},
  //   methods: {}
}
</script>
