<template>
  <div class="container">
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Customer</label>
      <div class="col-sm-10">
        <select class="form-select" v-model="header.customer_id" name="" id="">
          <option :value="customer.customer_id" :key="customer.customer_id">
            {{ customer.customer_name }}
          </option>
        </select>
      </div>
      <div class="col-sm-10">
        <select class="form-select" v-model="header.shipper_id" name="" id="">
          <option :value="header.shipper_id" :key="header.shipper_id">
            {{ shipper.shipper_name }}
          </option>
        </select>
      </div>
    </div>
    <button class="btn btn-secondary me-1" @click="goToList">목록</button>
    <button class="btn btn-primary" @click="doSave">저장</button>
  </div>
  <table></table>
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
      },
      header: {
        customer_id: -1,
        shipper_id: -1
      },
      customerList: [],
      shipperList: []
    }
  },
  setup() {},
  created() {
    this.getCustomerList()
    this.getShipperList()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getCustomerList() {
      this.categoryList = await this.$get('/api/customer')
    },
    async getShipperList() {
      this.categoryList = await this.$get('/api/shipper')
    },
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
