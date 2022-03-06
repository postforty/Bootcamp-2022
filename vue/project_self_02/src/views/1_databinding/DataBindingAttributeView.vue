<template>
  <div>
    <input type="text" name="" id="" v-bind:value="userId" readonly />
    <input type="text" name="" id="" :value="userId" readonly />
    <br />
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <!-- 단방향의 경우 "txt1 === ''"와 같은 표현식을 쓸 수 있다. -->
    <button :disabled="txt1 === ''">조회</button>
    <br />
    <input
      type="checkbox"
      name="chkEmail"
      id=""
      value=""
      v-model="agreeEmail"
    />
    <label for="">이메일 보내기 동의</label>
    <br />
    <input type="email" name="" id="" v-show="agreeEmail.length > 0" />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'jeremy',
      txt1: '',
      agreeEmail: [],
      imgSrc: 'https://kr.vuejs.org/images/logo.png'
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
