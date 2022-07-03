import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
const instance = axios.create({
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`
  }
})
export default {
  data() {
    return {}
  },
  methods: {
    async $get(url) {
      return (
        await axios.get(url).catch(e => {
          console.log(e)
        })
      ).data
    },
    async $post(url, data) {
      return await instance
        .post(url, data)
        .then(res => {
          console.log(res)
        })
        .catch(e => {
          console.log(e)
        })
    },
    async $put(url, data) {
      return await axios.put(url, data).catch(e => {
        console.log(e)
      })
    },
    async $delete(url) {
      return await axios
        .delete(url)

        .catch(e => {
          console.log(e)
        })
    },
    async $upload(url, file) {
      const formData = new FormData()
      formData.append('file', file)
      return await axios
        .post(url, formData)
        .then(res => {
          return res.data
        })
        .catch(e => {
          console.log(e)
        })
    },

    // router mixins
    $goBack() {
      this.$router.go(-1)
    },
    $goMain() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
