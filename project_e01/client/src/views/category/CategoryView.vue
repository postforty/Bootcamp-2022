<template>
  <div class="container">
    <!-- 조회조건 -->
    <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
      <div class="col-12">
        <input
          type="search"
          class="form-control"
          v-model.trim="searchName"
          @keyup.enter="getCustomers"
          placeholder="Name"
        />
      </div>
      <div class="col-12">
        <button class="btn btn-primary me-1" @click="getCustomers">조회</button>
        <button class="btn btn-success me-1" @click="goToCreate">생성</button>
        <button class="btn btn-primary me-1" @click="doExcel">
          엑셀다운로드
        </button>
      </div>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.product_category_id" v-for="item in list">
          <td>{{ item.product_category_id }}</td>
          <td>{{ item.category_name }}</td>
          <td>{{ item.category_description }}</td>
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
      headers: [
        { title: 'ID', key: 'product_category_id' },
        { title: 'Name', key: 'category_name' },
        { title: 'Description', key: 'category_description' }
      ],
      list: [],
      searchName: ''
    }
  },
  setup() {},
  created() {},
  async mounted() {
    this.list = await this.$get('/api/product/category')
  },
  unmounted() {},
  methods: {
    async getCustomers() {
      const loader = this.$loading.show({ canCancel: false })
      this.customers = await this.$get(
        `http://localhost:3000/customers?name_like=${this.searchName}`
      )
      loader.hide()
    },
    goToDetail(id) {
      this.$router.push({
        path: '/template/detail',
        query: { id: id, searchName: this.searchName }
      })
      // this.$router.push({ name: 'DetailView', params: { id: id } })
    },
    doExcel() {
      this.$ExcelFromTable(this.headers, this.customers, 'customers', {})
    },
    goToCreate() {
      this.$router.push({ path: '/template/create' })
    }
  }
}
</script>
