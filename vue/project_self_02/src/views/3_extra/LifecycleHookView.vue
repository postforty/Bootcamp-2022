<template>
  <div>
    <select name="" id="">
      <option :value="city.code" :key="city.code" v-for="city in cities">
        {{ city.title }}
      </option>
    </select>
    <button>조회</button>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>A</th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cities: [],
      fnInterval: null
    }
  },
  // setup() {},
  beforeCreate() {}, // created되기 직전
  created() {
    this.getA()
    // this.cities = [
    //   { title: '서울', code: '02' },
    //   { title: '부산', code: '051' },
    //   { title: '제주', code: '052' }
    // ]
  }, // data, props, components, watch, computed, methods 이런 모든 정보를 가지고 준비가 끝난 상태
  beforeMount() {}, // mounted되기 직전(DOM이 랜더링 되기 직전). 가상 DOM 준비 끝난 상태로 추정됨
  mounted() {
    // this.cities = [
    //   { title: '서울', code: '02' },
    //   { title: '부산', code: '051' },
    //   { title: '제주', code: '052' }
    // ]
    this.fnInterval = window.setInterval(() => {
      console.log('aaa')
    }, 1000)
  }, // 실제 DOM이 랜더링이 끝난 상태
  beforeUpdate() {}, // updated되기 직전
  updated() {}, // data 변경이 일어난 경우. 화면과 연결된 경우 mounted도 함께 작동함
  beforeUnmount() {}, // unmounted 직전
  unmounted() {
    window.clearInterval(this.fnInterval)
    this.fnInterval = null
  }, // 컴포넌트를 빠져 나갈때
  methods: {
    getA() {
      this.cities = [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '052' }
      ]
    },
    getB() {}
  }
}
</script>
