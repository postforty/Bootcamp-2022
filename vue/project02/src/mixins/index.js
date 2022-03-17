import axios from 'axios'

export default {
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async $get(url) {
      return (
        await axios.get(url).catch((e) => {
          console.log(e)
        })
      ).data
    },
    async $post(url, data) {
      return (
        await axios.post(url, data).catch((e) => {
          console.log(e)
        })
      ).data
    },
    async $put(url, data) {
      return (
        await axios.put(url, data).catch((e) => {
          console.log(e)
        })
      ).data
    },
    async $delete(url) {
      return (
        await axios.delete(url).catch((e) => {
          console.log(e)
        })
      ).data
    }
  }
}
