export default {
  methods: {
    async $get(url) {
      return (
        await axios.get(url).catch((e) => {
          console.log(e)
        })
      ).data
    },
    async $post(url, data) {
      return await axios.post(url, data).catch((e) => {
        console.log(e)
      })
    },
    async $put(url, data) {
      return await axios.put(url, data).catch((e) => {
        console.log(e)
      })
    },
    async $delete(url) {
      return await axios.delete(url).catch((e) => {
        console.log(e)
      })
    },

    // 날짜 변환
    $convertDateFormat(d, f) {
      let year = ''
      let month = ''
      let day = ''
      let hour = ''
      let minute = ''
      let second = ''

      if (typeof d === 'string') {
        year = d.substr(0, 4)
        month = d.substr(4, 2)
        day = d.substr(6, 2)
      } else if (typeof d === 'object') {
        year = d.getFullYear()
        month = (d.getMonth() + 1).toString().padStart(2, 0)
        day = d.getDate().toString().padStart(2, 0)
        hour = d.getHours().toString().padStart(2, 0)
        minute = d.getMinutes().toString().padStart(2, 0)
        second = d.getSeconds().toString().padStart(2, 0)
      }

      return f
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('hh', hour)
        .replace('mm', minute)
        .replace('ss', second)
    }
  }
}
