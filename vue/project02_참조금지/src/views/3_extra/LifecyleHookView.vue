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
  //   setup() {},
  //   beforeCreate() {
  //     console.log('beforeCreate')
  //   },
  // data, props, components, watch, computed, methods 이런 모든 정보를 가지고 준비가 끝난 상태
  created() {
    console.log('created')

    this.getA()
  },
  // 추측: 가상 DOM 준비 끝난 상태
  //   beforeMount() {},
  // 실제 DOM이 랜더링이 끝난 상태
  mounted() {
    console.log('mounted')
    // this.cities = [
    //   { title: '서울', code: '02' },
    //   { title: '부산', code: '051' },
    //   { title: '제주', code: '052' }
    // ]

    this.fnInterval = window.setInterval(() => {
      console.log('aaaa')
    }, 1000)
  },
  //
  //   beforeUpdate() {},
  // data 변경
  updated() {
    console.log('updated')
  },
  //   beforeUnmount() {},
  // 컴포넌트를 빠져 나갈때
  unmounted() {
    window.clearInterval(this.fnInterval)
    this.fnInterval = null
    this.cities = null
  },
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
