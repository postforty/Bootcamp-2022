<template>
  <div class="container">
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Supplier Name</label>
      <div class="col-sm-10">{{ supplier.supplier_name }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">{{ supplier.phone }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">{{ supplier.email }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address</label>
      <div class="col-sm-10">{{ supplier.address }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Contact Name</label>
      <div class="col-sm-10">{{ supplier.contact_name }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Contact Phone</label>
      <div class="col-sm-10">{{ supplier.contact_phone }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Contact Email</label>
      <div class="col-sm-10">{{ supplier.contact_email }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Business No</label>
      <div class="col-sm-10">{{ supplier.business_no }}</div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Representative Name</label>
      <div class="col-sm-10">{{ supplier.representative_name }}</div>
    </div>
    <button class="btn btn-secondary me-1" @click="goToList">목록</button>
    <button class="btn btn-primary" @click="goToChange">수정</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      supplier_id: '',
      searchName: '',
      supplier: {}
    }
  },
  setup() {},
  created() {
    this.supplier_id = this.$route.query.id
    this.searchName = this.$route.query.searchName
  },
  mounted() {
    this.getSupplier()
  },
  unmounted() {},
  methods: {
    async getSupplier() {
      this.supplier = (
        await this.$get(`/api/product/supplier/${this.supplier_id}`)
      )[0]
    },
    goToList() {
      this.$router.push({
        name: 'SupplierView',
        params: { fromDetail: true, searchName: this.searchName }
      })
    },
    goToChange() {
      this.$router.push({
        name: 'ChangeView',
        params: { id: this.supplier_id }
      })
    }
  }
}
</script>
