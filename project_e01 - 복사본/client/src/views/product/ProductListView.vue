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
    <div class="row">
      <div
        class="col-xl-3 col-lg-4 col-md-6 mb-2"
        :key="product.product_id"
        v-for="product in products"
      >
        <div class="card">
          <img
            :src="`http://localhost:3000/static/images/${product.img1}`"
            alt=""
            style="height: 180px; width: auto"
          />

          <div class="card-body">
            <h5 class="card-title">{{ product.product_name }}</h5>
            <p class="card-text">
              {{ $convertNumberFormat(product.original_price, '#,###') }}원 |
              {{ product.category_name }} |
              {{ product.supplier_name }}
            </p>

            <a @click="goToDetail(product.product_id)" class="btn btn-primary"
              >Detail</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      headers: [
        { title: 'Name', key: 'name' },
        { title: 'Company', key: 'company' },
        { title: 'Email', key: 'email' },
        { title: 'Phone', key: 'phone' },
        { title: 'Address', key: 'address' }
      ],
      products: [],
      searchName: ''
    }
  },
  setup() {},
  created() {},
  async mounted() {
    this.products = await this.$get('/api/product')
    console.log(this.products)
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
