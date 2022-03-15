<template>
  <div>
    <button class="btn btn-danger" @click="doSearch">조회</button>
    <!-- 삭제 버튼 생성 -->
    <button class="btn btn-danger" @click="doDelete">삭제</button>
    <button class="btn btn-danger" @click="doExcel">엑셀다운로드</button>
    <!-- selectType는 radio를 문자열 그대로 넘길 것이기 때문에 데이터바인딩이 불필요하다. -->
    <!-- simple-grid 내에 커스텀 이벤트(@change-item)를 만들 수 있다. -->
    <!-- 자식 component에서 커스텀 이벤트의 이름을 변경하는 하드코딩을 방지하기 위해 changeEventName을 추가한다. -->
    <!-- ref는 유일한 값을 가진다. 여기에서는 부모 component에서 자식 component의 doPrint 함수를 호출하기 위해서 사용한다. -->
    <simple-grid
      :headers="headers"
      :items="drinkList"
      selectType="checkbox"
      ckeckedKey="drinkId"
      changeEventName="change-item2"
      @change-item2="changeCheckedValue"
      ref="smGrid"
    />
  </div>
</template>
<script>
// @를 사용하면 vue파일 경로가 변경되더라도 에러가 발생하지 않는다.
import SimpleGrid from '@/components/fragments/SimpleGrid.vue'
export default {
  components: { SimpleGrid },
  data() {
    return {
      // SimpleGrid.vue에 thead 정보를 전달
      headers: [
        { title: '제품번호', key: 'drinkId' },
        { title: '제품명', key: 'drinkName' },
        { title: '가격', key: 'price' }
      ],
      drinkList: [],
      // 자식 component의 data(선택된 값)를 담는 배열
      checkedItems: []
    }
  },
  setup() {
    // composition api
  },
  created() {},
  mounted() {
    this.doSearch()
  },
  unmounted() {
    this.drinkList = null
  },
  methods: {
    doSearch() {
      // SimpleGrid.vue에 tbody 정보를 전달
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
    // 파라미터에 자식 component의 data를 넣는다.
    changeCheckedValue(data) {
      // 자식 component의 data를 checkedItems 배열에 넣는다.
      this.checkedItems = data

      // console.log('부모 component : ', data)
    },
    // 삭제 함수 선언
    doDelete() {
      console.log(this.checkedItems)
      // $refs는 전체 ref를 의미한다.
      this.$refs.smGrid.sampleData = 'B'
      this.$refs.smGrid.doPrint()
    },
    doExcel() {
      this.$ExcelFromTable(this.headers, this.drinkList, 'drinklist')
    }
  }
}
</script>
