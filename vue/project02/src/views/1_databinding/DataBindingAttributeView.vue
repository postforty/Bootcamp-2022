<template>
  <div>
    <input type="text" name="" id="" v-bind:value="userId" readonly />
    <input type="text" name="" id="" :value="userId" readonly />
    <br />
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
    <br />

    <input
      type="checkbox"
      name=""
      id="chkEmail"
      value="1"
      v-model="agreeEmail"
      @change="
        style1.display === 'none'
          ? (style1.display = 'block')
          : (style1.display = 'none')
      "
    />
    <label for="chkEmail">이메일 보내기 동의</label>
    <br />
    <input type="email" name="" id="" :style="style1" />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'jeremyeefef',
      style1: {
        display: 'none'
      },
      txt1: '',
      agreeEmail: [],
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
