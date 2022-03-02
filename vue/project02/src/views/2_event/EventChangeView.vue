<template>
  <div>
    <!-- <select name="" id="" v-model="selectedCity" @change="changeCity">
      <option value=""></option>
      <option value="02">서울</option>
      <option value="051">부산</option>
      <option value="064">제주</option>
    </select> -->
    <select name="" id="" v-model="selectedCity">
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in dongList.filter((d) => d.dongCode === '1')"
      >
        {{ city.cityTitle }}
      </option>
    </select>
    <select name="" id="">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in dongList.filter((d) => d.cityCode === selectedCity)"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '02',
      dongList: [
        {
          cityCode: '02',
          cityTitle: '서울',
          dongCode: '1',
          dongTitle: '서울 1동'
        },
        {
          cityCode: '02',
          cityTitle: '서울',
          dongCode: '2',
          dongTitle: '서울 2동'
        },
        {
          cityCode: '02',
          cityTitle: '서울',
          dongCode: '3',
          dongTitle: '서울 3동'
        },
        {
          cityCode: '051',
          cityTitle: '부산',
          dongCode: '1',
          dongTitle: '부산 1동'
        },
        {
          cityCode: '051',
          cityTitle: '부산',
          dongCode: '2',
          dongTitle: '부산 2동'
        },
        {
          cityCode: '051',
          cityTitle: '부산',
          dongCode: '3',
          dongTitle: '부산 3동'
        },
        {
          cityCode: '064',
          cityTitle: '제주',
          dongCode: '1',
          dongTitle: '제주 1동'
        },
        {
          cityCode: '064',
          cityTitle: '제주',
          dongCode: '2',
          dongTitle: '제주 2동'
        },
        {
          cityCode: '064',
          cityTitle: '제주',
          dongCode: '3',
          dongTitle: '제주 3동'
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
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
