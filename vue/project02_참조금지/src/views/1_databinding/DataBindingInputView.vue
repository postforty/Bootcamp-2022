<template>
  <div>
    <input type="text" name="" id="" v-model.trim="userId" />
    <button @click="myFunction">클릭</button>
    <button @click="changeData">변경</button>
    <br />
    <input type="number" name="" id="" v-model="num1" />+
    <input type="number" name="" id="" v-model="num2" />=
    <span>{{ num1 + num2 }}</span>
    <br />
    <input type="text" name="" id="" v-model.number="num3" />+
    <input type="text" name="" id="" v-model.number="num4" />=
    <span>{{ num3 + num4 }}</span>
    <!-- <input type="number" name="" id="" v-model="sum" />' -->
    <!-- <button @click="calulate">계산</button> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'Won',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      sum: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'Hong'
    },
    caclulate() {
      this.sum = this.num1 + this.num2
    }
  }
}
</script>
