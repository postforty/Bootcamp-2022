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
      <label class="col-sm-2 col-form-label">Representative</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="supplier.representative_name"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model.trim="supplier.email" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model.trim="supplier.phone" />
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
          type="email"
          class="form-control"
          v-model.trim="supplier.contact_email"
        />
      </div>
    </div>
    <button class="btn btn-secondary me-1" @click="goToList">목록</button>
    <button class="btn btn-primary" @click="doSave">저장</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      id: '',
      searchName: '',
      supplier: {
        supplier_name: '',
        email: '',
        phone: '',
        address: '',
        contact_name: '',
        contact_phone: '',
        contact_email: '',
        business_no: '',
        representative_name: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async doSave() {
      if (this.supplier.supplier_name === '') {
        return this.$swal('Supplier Name을 입력하세요.')
      }

      this.$swal({
        title: '공급자를 생성 하시겠습니까?',
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

          const r = await this.$post('http://localhost:3000/api/supplier', {
            param: this.supplier
          })

          loader.hide()

          console.log(r)

          if (r.status === 200) {
            this.$swal('공급자 정보가 저장되었습니다.')
            this.$router.push({
              path: '/supplier/detail',
              query: { supplier_id: r.data.insertId }
            })
          }
        }
      })
    },
    goToList() {
      this.$router.push({ path: '/supplier/list' })
    }
  }
}
</script>
