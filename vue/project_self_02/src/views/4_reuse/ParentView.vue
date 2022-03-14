<template>
  <div>
    <button @click="changeValue">변경</button>
    <!-- 데이터바인딩(:)하지 않으면 문자열로 취급한다.  -->
    <child-component str="Hello_1" />
    <p>----- 구분선 -----</p>
    <!-- num="3"은 문자열, :num="3"은 정수형이다. -->
    <child-component
      :str="sampleData"
      :num="num1"
      :isOk="isOk"
      :arr="list"
      :obj="person"
    />
  </div>
</template>
<script>
import ChildComponent from '@/components/fragments/ChildComponent.vue'
export default {
  components: {
    'child-component': ChildComponent
  },
  data() {
    return {
      sampleData: 'Hello_2',
      num1: 35,
      isOk: true,
      list: [1, 2, 3],
      person: { name: 'Jeremy' }
    }
  },
  // setup() {},
  // created() {},
  // mounted() {},
  // unmounted() {},
  methods: {
    changeValue() {
      this.num1 = 235
    }
  }
}
</script>
