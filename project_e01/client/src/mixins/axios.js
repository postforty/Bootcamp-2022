import axios from 'axios'

export default {
  created() {},
  mounted() {
    // console.log('mixin에서 출력')
  },
  unmounted() {},
  methods: {
    async $get(url) {
      return (
        await axios.get(url).catch((e) => {
          console.log(e)
        })
      ).data
    }
  }
}
