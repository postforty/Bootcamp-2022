<template>
  <div>
    <!-- @keyup에서 keyCode 확인하는 함수 없이 @keyup.enter로 엔터키 감지 가능 -->
    <input type="search" name="" id="" @keyup.enter="doSearch()" />
    <!-- <input type="search" name="" id="" @keyup="checkEnter(event)" /> -->
    <button @click="doSearch">조회</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  //   setup() {},
  //   created() {},
  //   mounted() {},
  //   unmounted() {},
  methods: {
    doSearch() {
      console.log('doSearch 실행')
    }
    // },
    // checkEnter() {
    //   if (event.keyCode === 13) {
    //     this.doSearch()
    //   }
    // }
  }
}
</script>
