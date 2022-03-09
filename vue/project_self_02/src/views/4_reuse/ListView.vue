<template>
  <div>
    <button class="btn btn-danger" @click="doSearch">조회</button>
    <!-- selectType는 radio를 문자열 그대로 넘길 것이기 때문에 데이터바인딩이 불필요하다. -->
    <simple-grid
      :headers="headers"
      :items="drinkList"
      selectType="checkbox"
      ckeckedKey="drinkId"
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
      drinkList: []
    }
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
    }
  }
}
</script>
