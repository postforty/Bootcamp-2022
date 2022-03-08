<template>
  <div class="container">
    <button class="btn btn-danger" ref="btnSearch" @click="doSearch">
      조회
    </button>
    <button class="btn btn-danger" @click="doDelete">삭제</button>
    <button class="btn btn-danger" @click="doExcel">엑셀다운로드</button>
    <simple-grid
      :headers="headers"
      :items="drinkList"
      selectType="checkbox"
      checkedKey="drinkId"
      changeEventName="change-item2"
      @change-item2="changeCheckedValue"
      ref="smGrid"
    />
  </div>
</template>
<script>
import SimpleGrid from '@/components/fragments/SimpleGrid.vue'
export default {
  components: { SimpleGrid },
  data() {
    return {
      headers: [
        { title: '제품번호', key: 'drinkId' },
        { title: '제품명', key: 'drinkName' },
        { title: '가격', key: 'price' }
      ],
      drinkList: [],
      checkedItems: [],
      isShowExcelDownBtn: true
    }
  },
  setup() {
    // composition api
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      this.drinkList = [
        {
          drinkId: '1',
          drinkName: '코카콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: '오렌지주스',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '3',
          drinkName: '커피',
          price: 500,
          qty: 1
        },
        {
          drinkId: '4',
          drinkName: '물',
          price: 700,
          qty: 1
        },
        {
          drinkId: '5',
          drinkName: '보리차',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '6',
          drinkName: '포카리',
          price: 1000,
          qty: 1
        },
        {
          drinkId: '7',
          drinkName: '뽀로로',
          price: 1300,
          qty: 1
        }
      ]
    },
    changeCheckedValue(data) {
      this.checkedItems = data
      // console.log('부모 컴포넌트', data)
    },
    doDelete() {
      console.log(this.checkedItems)
      this.$refs.smGrid.sampleData = 'B'
      this.$refs.smGrid.doPrint()
    },
    doExcel() {
      this.$refs.smGrid.doExcel()
    }
  }
}
</script>
