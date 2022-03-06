<template>
  <div>
    <div :class="class1">클래스 바인딩1</div>
    <!-- class는 배열로 바인딩 처리 할 수 있지만 object의 불리언 값을 이용하는 것이 유리하다. 따라서 실무에서는 "클래스 바인딩2"와 같은 방식을 사용한다. -->
    <!-- 키가 두단어 이상일때는 ''로 묶어 줘야 한다. 한다어 일때는 그럴 필요가 없다. -->
    <div :class="{ active: isActive, 'text-red': hasError }">
      클래스 바인딩2
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      class1: ['active', 'text-red'],
      // isActive가 true라서 .active가 적용된다.
      isActive: true,
      // hasError가 false라서 .text-red가 적용되지 않는다.
      hasError: false
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
<!-- scoped 속성을 주지 않으면 global로 적용된다. 현재 vue 파일내에서만 사용하기
위해 scoped를 붙인다. -->
<style scoped>
.active {
  background-color: green;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
