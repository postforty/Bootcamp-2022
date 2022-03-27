<template>
  <div class="container">
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
      cities: []
    }
  },
  //   setup() {},
  //   beforeCreate() {
  //     console.log('beforeCreate')
  //   },
  created() {
    console.log('created')
    this.getA()
  },
  //   beforeMount() {},
  mounted() {
    // this.cities = [
    //   { title: '서울', code: '02' },
    //   { title: '부산', code: '051' },
    //   { title: '제주', code: '052' }
    // ]
    this.fnInterval = window.setInterval(() => {
      console.log('aaaa')
    }, 1000)
  },
  //   beforeUpdate() {},
  //   updated() {},
  //   beforeUnmount() {},
  unmounted() {
    console.log('unmounted')
    clearInterval(this.fnInterval)
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
    }
  }
}
</script>
