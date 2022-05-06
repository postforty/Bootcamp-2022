import axios from 'axios'
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver'

export default {
  created() {},
  mounted() {
    // console.log('mixin에서 출력')
  },
  unmounted() {},
  methods: {
    // printA() {
    //   console.log('A')
    // }
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
    }
  }
}
