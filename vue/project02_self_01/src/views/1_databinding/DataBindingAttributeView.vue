<template>
  <div>
    <input type="text" name="" id="" v-bind:value="userID" readonly />
    <input type="text" name="" id="" :value="userID" readonly />
    <br />
    <img :src="imgSrc" alt="" style="width: 100px" />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
    <br />
    <input type="checkbox" name="" id="" value="" v-model="agreeEmail" />
    <!-- <input
      type="checkbox"
      name=""
      id=""
      value=""
      v-model="agreeEmail"
      @change="
        style1.display === 'none'
          ? (style1.display = 'block')
          : (style1.display = 'none')
      "
    /> -->
    <label for="">이메일 보내기 동의</label>
    <input type="email" name="" id="" v-show="agreeEmail.length > 0" />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userID: 'Han',
      //   style1: {
      //     display: 'none'
      //   },
      txt1: '',
      imgSrc: 'https://kr.vuejs.org/images/logo.png',
      agreeEmail: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
