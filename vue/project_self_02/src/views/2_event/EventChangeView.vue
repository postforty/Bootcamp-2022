<template>
  <div>
    <select name="" id="" v-model="selectedCity" @change="changeCity">
      <option value="02">서울</option>
      <option value="051">부산</option>
      <option value="064">제주</option>
    </select>
    <select name="" id="">
      <option value="" :key="dong.code" v-for="dong in dongList">
        {{ dong.title }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '',
      dongList: []
    }
  },
  methods: {
    changeCity() {
      console.log(this.selectedCity)
      if (this.selectedCity === '02') {
        this.dongList = [
          { code: '1', title: '서울 1동' },
          { code: '2', title: '서울 2동' },
          { code: '3', title: '서울 3동' }
        ]
      } else if (this.selectedCity === '051') {
        this.dongList = [
          { code: '1', title: '부산 1동' },
          { code: '2', title: '부산 2동' },
          { code: '3', title: '부산 3동' }
        ]
      } else if (this.selectedCity === '064') {
        this.dongList = [
          { code: '1', title: '제주 1동' },
          { code: '2', title: '제주 2동' },
          { code: '3', title: '제주 3동' }
        ]
      }
    }
  }
}
</script>
