<template>
  <div>
    <input type="radio" name="" id="ai" value="AI" v-model="favorite" />
    <label for="ai">인공지능</label>
    <input type="radio" name="" id="blockchain" value="BC" v-model="favorite" />
    <label for="blockchain">블록체인</label>
    <input type="radio" name="" id="iot" value="IOT" v-model="favorite" />
    <label for="iot">사물인터넷</label>
    <input type="radio" name="" id="other" value="OTH" v-model="favorite" />
    <label for="other">기타</label>
  </div>
  <div v-show="favorite === 'OTH'">
    <input type="text" name="" id="" v-model="otherValue" />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favorite: '',
      otherValue: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
