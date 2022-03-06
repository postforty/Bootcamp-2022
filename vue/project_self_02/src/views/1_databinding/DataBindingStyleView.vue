<template>
  <!-- div에 직접 적용 -->
  <div style="color: red; font-size: 30px">
    스타일 바인딩: 글씨는 red, 폰트 크기: 30px
  </div>
  <!-- 문자열 바인딩 -->
  <div :style="style1">스타일 바인딩: 글씨는 red, 폰트 크기: 30px</div>
  <!-- object 이용. 이 방식을 주로 사용한다. -->
  <div :style="style2">스타일 바인딩: 글씨는 red, 폰트 크기: 30px</div>
  <button @click="style2.color = 'blue'">색상바꾸기</button>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      style1: 'color: red; font-size: 30px', // 문자열 바인딩이 가능하지만 특정 속성만 변경하고자 할때 어려울 수 있다.
      // style 바인딩은 object로 하는 것이 가장 좋다. 키는 카멜 표현식을 사용한다.
      style2: {
        color: 'red',
        fontSize: '30px'
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
