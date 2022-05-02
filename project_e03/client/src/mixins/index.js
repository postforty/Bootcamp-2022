import axios from 'axios'
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver'
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

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
    async $upload(url, file) {
      const formData = new FormData()
      formData.append('attachment', file)
      return (
        await axios
          .post(url, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          })
          .catch((e) => {
            console.log(e)
          })
      ).data
    },
    async $ExcelFromTable(
      header = [],
      rows = [],
      fileName = 'excel',
      option = {}
    ) {
      header = header.filter((h) => h.title && h.key)
      // https://github.com/exceljs/exceljs#tables
      const wb = new ExcelJS.Workbook()
      const ws = wb.addWorksheet() // name,{pageSetup:https://github.com/exceljs/exceljs#page-setup}
      ws.addTable({
        name: 'myTable',
        ref: 'A1',
        headerRow: true,
        // style: { theme: 'TableStyleDark3', showRowStripes: true },
        columns: header.map((h) => ({
          name: h.title
        })), // width 설정가능, total함수 가능
        rows: rows.map((r) => header.map((h) => r[h.key])),
        ...option
      })

      saveAs(new Blob([await wb.xlsx.writeBuffer()]), `${fileName}.xlsx`)
    },
    $convertNumberFormat(amount, format) {
      let currencySymbol = ''
      let lastSymbol = ''

      if (format.substr(0, 1) !== '#') {
        currencySymbol = format.substr(0, 1)
      }

      if (format.slice(-1) !== '#' && format.slice(-1) !== '0') {
        lastSymbol = format.slice(-1) // #,###%
        format = format.slice(0, -1) // #,###
      }

      let groupingSeparator = '' // 숫자 3자리마다 구분자 , 혹은 .
      let decimalSeparator = '' // 소수점 구분자 , 혹은 .
      let maxFractionDigits = 0 // 소수점 몇자리까지 표기할건지

      if (format.indexOf('.') === -1) {
        // #,###
        groupingSeparator = ','
      } else if (format.indexOf(',') === -1) {
        // #.###
        groupingSeparator = '.'
      } else if (format.indexOf(',') < format.indexOf('.')) {
        // #,###.##
        groupingSeparator = ','
        decimalSeparator = '.'
        maxFractionDigits = format.length - format.indexOf('.') - 1
      } else {
        // #.###,##
        groupingSeparator = '.'
        decimalSeparator = ','
        maxFractionDigits = format.length - format.indexOf(',') - 1
      }

      let sign = '' // amount가 음수로 들어왔을 때
      let dec = 1
      for (let i = 0; i < maxFractionDigits; i++) {
        // dec = 10, i=1
        dec = dec * 10
        // dec = 100
      }
      // dec = 1000

      // amount = -3500 * 100 = 350000 / 100 = -3500.00
      // format = #,###.#0
      let v = String(Math.round(parseFloat(amount) * dec) / dec) // '-3500.00'

      if (v.startsWith('-')) {
        sign = '-'
        v = v.substring(1) // '3500.00'
      }

      if (maxFractionDigits > 0 && format.slice(-1) === '0') {
        v = parseFloat(v).toFixed(maxFractionDigits)
      }

      let d = '' // 소수점 이하 값만
      if (maxFractionDigits > 0 && v.indexOf('.') > -1) {
        d = v.substring(v.indexOf('.')) // .00
        d = d.replace('.', decimalSeparator) // .00 -> ,00
        v = v.substring(0, v.indexOf('.')) // 3500
      }

      const regexp = /(\d+)(\d{3})/

      // v = 3524500

      while (regexp.test(v)) {
        // $1 = 3524, $2 = 500
        // v = 3524,500

        // $1 = 3, $2 = 524
        // v = 3,524,500
        v = v.replace(regexp, '$1' + groupingSeparator + '$2')
      }

      return sign + currencySymbol + String(v) + String(d) + lastSymbol
    }
  }
}
