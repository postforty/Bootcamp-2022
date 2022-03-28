<template>
  <div class="container">
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">{{ customer.id }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">{{ customer.name }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company</label>
      <div class="col-sm-10">{{ customer.company }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">{{ customer.email }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">{{ customer.phone }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address</label>
      <div class="col-sm-10">{{ customer.address }}</div>
    </div>
    <button class="btn btn-secondary me-1" @click="goToList">목록</button>
    <button class="btn btn-primary">수정</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      id: '',
      searchName: '',
      customer: {}
    }
  },
  setup() {},
  created() {
    this.id = this.$route.query.id
    // this.searchName = this.$route.qurey.searchName
  },
  mounted() {
    this.getCustomer()
  },
  unmounted() {},
  methods: {
    async getCustomer() {
      this.customer = await this.$get(
        `http://localhost:3000/customers/${this.id}`
      )
    },
    goToList() {
      //   this.$router.push({ path: '/template/listtodetail' })
      this.$router.push({
        name: 'ListToDetailView',
        params: { fromDetail: true, searchName: this.searchName }
      })
    }
  }
}
</script>
