<template>
  <div>
    <input type="text" name="" id="" v-model.trim="userId" />
    <button @click="myFunction">클릭</button>
    <button @click="changeData">변경</button>
    <br />
    <!-- number 타입 -->
    <input type="number" name="" id="" v-model="num1" />+
    <input type="number" name="" id="" v-model="num2" />=
    <span>{{ num1 + num2 }}</span>
    <br />
    <!-- text 타입이라 문자열로 결합 -->
    <input type="text" name="" id="" v-model="num3" />+
    <input type="text" name="" id="" v-model="num4" />=
    <span>{{ num3 + num4 }}</span>
    <br />
    <!-- text 타입에서 v.model.number로 정수형으로 치환 -->
    <input type="text" name="" id="" v-model.number="num5" />+
    <input type="text" name="" id="" v-model.number="num6" />=
    <span>{{ num5 + num6 }}</span>

    <!-- 버튼과 calculate 함수를 이용한 sum 출력 -->
    <!-- <input type="number" name="" id="" v-model="sum" /> -->
    <!-- <button @click="calculate">계산</button> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'jeremy',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      num6: 0,
      sum: 0
    }
  },
  // setup() {},
  // created() {},
  // mounted() {},
  // unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'gildong'
    },
    calculate() {
      this.sum = this.num1 + this.num2
    }
  }
}
</script>
