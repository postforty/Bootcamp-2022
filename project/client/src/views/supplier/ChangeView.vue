<template>
  <div class="container">
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Supplier Name</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="supplier.supplier_name"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model.trim="supplier.phone" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model.trim="supplier.email" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="supplier.address"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Contact Name</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="supplier.contact_name"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Contact Phone</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="supplier.contact_phone"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Contact Email</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="supplier.contact_email"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Business No</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="supplier.business_no"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Representative Name</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="representative_name"
        />
      </div>
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
      supplier: {
        supplier_name: '',
        phone: '',
        email: '',
        address: '',
        contact_name: '',
        contact_phone: '',
        contact_email: '',
        business_no: '',
        representative_name: '',
        created_datetime: ''
      }
    }
  },
  setup() {},
  created() {
    this.supplier_id = this.$route.query.id
  },
  mounted() {
    this.getSupplier()
  },
  unmounted() {},
  methods: {
    async getSupplier() {
      this.supplier = await this.$get(
        `/api/product/supplier/${this.supplier_id}`
      )
    },
    async doSave() {
      if (this.customer.name === '') {
        return this.$swal('Name을 입력하세요.')
      }
      if (this.customer.company === '') {
        return this.$swal('Company을 입력하세요.')
      }
      this.$swal({
        title: '고객 정보를 저장하시겠습니까?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '저장'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })

          const r = await this.$put(
            `http://localhost:3000/customers/${this.customer.id}`,
            this.customer
          )

          loader.hide()

          console.log(r)
          //   put을 통해 수정할때는 200
          if (r.status === 200) {
            this.$swal('고객 정보가 저장되었습니다.')
            this.$router.push({
              path: '/template/detail',
              query: { id: this.id }
            })
          }
        }
      })
    },
    goToList() {
      this.$router.push({
        name: 'SupplierView'
      })
    },
    goToDetail() {
      this.$router.push({
        path: '/product/supplier/detail',
        query: { id: this.id }
      })
    }
  }
}
</script>
