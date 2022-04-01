<template>
  <div>
    <!-- <input type="search" name="" id="" @keyup="checkEnter" /> -->
    <input type="search" name="" id="" @keyup.enter="doSearch" />
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
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log('doSearch 실행')
    },
    checkEnter(event) {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
