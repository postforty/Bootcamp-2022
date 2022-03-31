<template>
  <div><input type="text" name="" id="" v-bind:value="userId" readonly /></div>
  <div><input type="text" name="" id="" :value="userId" readonly /></div>
  <br />
  <img src="@/assets/logo.png" alt="" />
  <br />
  <img :src="imgSrc" alt="" />
  <br />
  <input type="search" name="" id="" v-model="txt1" />
  <button :disabled="txt1 === ''">조회</button>
  <br />
  <!-- <input type="checkbox" name="" id="chkEmail" value="" v-model="agreeEmail" /> -->
  <input
    type="checkbox"
    name=""
    id="chkEmail"
    value=""
    v-model="agreeEmail"
    @change="
      style1.display === 'none'
        ? (style1.display = 'block')
        : (style1.display = 'none')
    "
  />
  <label for="chkEmail">이메일 보내기 동의</label>
  <br />
  <!-- <input type="email" name="" id="" v-show="agreeEmail.length > 0" /> -->
  <input type="email" name="" id="" :style="style1" />
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'Sewol',
      imgSrc:
        'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
      txt1: '',
      agreeEmail: [],
      style1: {
        display: 'none'
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
