<template>
  <div>
    <select name="" id="">
      <option :value="city.code" :key="city.code" v-for="city in cities">
        {{ city.title }}
      </option>
    </select>
    <!-- <div :key="city.code" v-for="city in cities">
      <input type="checkbox" name="" id="" :value="city.code" />
      <label for="">{{ city.title }}</label>
    </div> -->
    <br />
    <button @click="doSearch">조회</button>
    <table>
      <thead>
        <tr>
          <th>제품번호</th>
          <th>제품명</th>
          <th>가격</th>
          <th>주문수량</th>
          <th>합계</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(drink, i) in drinkList">
          <td>{{ i + 1 }}</td>
          <!-- <td>{{ drink.drinkId }}</td> -->
          <td>{{ drink.drinkName }}</td>
          <td>{{ drink.price }}</td>
          <td><input type="number" name="" id="" v-model="drink.qty" /></td>
          <td>{{ drink.price * drink.qty }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />
    <br />
    <br />
    <br />

    <button @click="doSearch2">조회</button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Addres</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="customer.id" v-for="customer in customerList">
          <td>{{ customer.name }}</td>
          <td>{{ customer.company }}</td>
          <td>{{ customer.gender }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' }
      ],
      drinkList: [],
      customerList: []
    }
  },
  setup() {},
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
    async doSearch2() {
      const resource = 'http://localhost:3000/customers'
      const res = await fetch(resource)
      const resJson = await res.json()
      console.log(resJson)
      this.customerList = resJson
    }
  }
}
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
tr,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
