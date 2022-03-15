export default {
  methods: {
    // 날짜
    // 한국은 2022.03.15
    // 2022-03-15
    // 2022/03/15
    // 미국은 Mar 15, 2022
    // 유럽은 15.05.2022
    // d = '20220315', f = 'YYYY.MM.DD'
    // new Date()
    $convertDateFormat(d, f) {
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

      // f = 'YYYY.MM.DD', YYYY/MM/DD, DD.MM.YYYY
      return f.replace('YYYY', year).replace('MM', month).replace('DD', day)
    },
    // 금액에 대한 포맷
    // 3500
    // 3500.1
    // 한국 3,500
    // 미국 $3,500.00
    // 유럽 3.500,00
    // #,###
    // $#,###.00
    // #,###.####
    // #.###,##
    $convertCurrencyFormat(n, f) {}
  }
}
