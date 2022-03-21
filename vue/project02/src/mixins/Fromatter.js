export default {
  methods: {
    // 날짜
    // 한국은 2022.03.15
    // 2022-03-15
    // 2022/03/15
    // 미국은 Mar 15, 2022
    // 유럽은 15.05.2022
    // d = '20220315', f = 'YYYY.MM.DD'는 string
    // new Date()는 object
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
    // '3500', '#,###' -> 3,500
    // 3500, '#.###' -> 3.500
    // 3500.1, '$#,###.00' -> $3,500.10
    // 3500.1, '#,###.##' -> 3,500.1
    // 3500.1, '#.###,##' -> 3.500,1
    // 1250.12, '#,###.##%' -> 1,250.12%
    // -3500, '#,###' -> -3,500
    $convertNumberFormat(amount, format) {
      let currencySymbol = ''
      let lastSymbol = ''

      // 금액 첫 자리가 '$'라면
      if (format.substr(0, 1) !== '#') {
        currencySymbol = format.substr(0, 1)
      }

      // 금액 끝 자리가 '%'라면
      if (format.slice(-1) !== '#' && format.slice(-1) !== '0') {
        lastSymbol = format.slice(-1) // #,###%
        format = format.slice(0, -1) // #,###
      }

      let groupingSeparator = '' // 숫자 3자리마다 구분자 , 혹은 마침표(.)
      let decimalSeparator = '' // 소수점 구분자 , 혹은 마침표(.)
      let maxFractionDigits = 0 // 소수점 몇자리까지 표기할건인가

      if (format.indexOf('.') === -1) {
        // 마침표(.)가 없다면
        // #,###
        groupingSeparator = ','
      } else if (format.indexOf(',') === -1) {
        // 쉼표(,)가 없다면
        // #.###
        groupingSeparator = '.'
      } else if (format.indexOf(',') < format.indexOf('.')) {
        // #,###.##
        groupingSeparator = ','
        decimalSeparator = '.'
        maxFractionDigits = format.length - format.indexOf('.') - 1 // 소수점 몇 자리인지
      } else {
        // #.###,##
        groupingSeparator = '.'
        decimalSeparator = ','
        maxFractionDigits = format.length - format.indexOf(',') - 1 // 쉼표 이하 몇 자리인지
      }

      let sign = '' // amount가 음수로 들어왔을 때 사용할 변수
      let dec = 1
      for (let i = 0; i < maxFractionDigits; i++) {
        // dec = 10, i=1
        dec = dec * 10
        // 최종 dec = 100
      }
      // dec = 1000

      // amount = -3500 * 100 = 350000 / 100 = -3500.00
      // format = #,###.#0
      // parseFloat() 함수로 문자열이 들어와도 숫자로 바꾼다.
      let v = String(Math.round(parseFloat(amount) * dec) / dec) // '3500'으로 들어왔는데 '-3500.00'이 된다.

      if (v.startsWith('-')) {
        // amount가 음수 값으로 들어왔다면
        sign = '-'
        v = v.substring(1) // '3500.00'
      }

      if (maxFractionDigits > 0 && format.slice(-1) === '0') {
        // parseFloat() 함수로 문자열 v를 숫자로 형변환, toFixed()를 이용해 소수점 이하 표기
        v = parseFloat(v).toFixed(maxFractionDigits)
      }

      let d = '' // 소수점 이하 값만 넣으려고 한다.
      if (maxFractionDigits > 0 && v.indexOf('.') > -1) {
        // 소수점 이하 값이 존재하고, 소수점이 있다면
        d = v.substring(v.indexOf('.')) // .00
        d = d.replace('.', decimalSeparator) // decimalSeparator가 ','라면 .00 -> ,00
        v = v.substring(0, v.indexOf('.')) // 3500
      }

      const regexp = /(\d+)(\d{3})/ // 숫자가 한자리 이상, 숫자가 3자리

      // v = 3524500

      while (regexp.test(v)) {
        // v에는 정수값만 들어가 있다. test()를 이용 체크해 v가 정규식과 맞으면 true
        // 첫 번째 while문 돌때
        // $1 = 3524, $2 = 500
        // v = 3524,500

        // 두 번째 while문 돌때
        // $1 = 3, $2 = 524
        // v = 3,524,500
        v = v.replace(regexp, '$1' + groupingSeparator + '$2') // $1은 (\d+)과 매칭, $2는 (\d{3})과 매칭
      }

      return sign + currencySymbol + String(v) + String(d) + lastSymbol
    }
  }
}
