export default {
  // 날짜
  // 한국은 2022.03.15
  // 2022-03-15
  // 2022/03/15
  // 미국은 Mar 15, 2022
  // 유럽은 15.05.2022
  // d = '20220315', f = 'YYYY.MM.DD'
  // new Date()
  methods: {
    $converDateFormat(d, f) {
      let year = ''
      let month = ''
      let day = ''

      if (typeof d === 'string') {
        year = d.substr(0, 4)
        month = d.substr(4, 2)
        day = d.substr(6, 2)
      } else if (typeof d === 'object') {
        year = d.getFullYear()
        month = (d.getMonth() + 1).toString().padStart(2, 0)
        day = d.getDate().toString().padStart(2, 0)
      }

      return f.replace('YYYY', year).replace('MM', month).replace('DD', day)
    }
  }
}
