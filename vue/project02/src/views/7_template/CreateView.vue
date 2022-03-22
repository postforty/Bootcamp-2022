<template>
  <div class="container">
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model.trim="customer.name" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.company"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model.trim="customer.email" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model.trim="customer.phone" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.address"
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
      customer: {
        name: '',
        company: '',
        email: '',
        phone: '',
        address: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async doSave() {
      if (this.customer.name === '') {
        return this.$swal('Name을 입력하세요.')
      }

      if (this.customer.company === '') {
        return this.$swal('Company를 입력하세요.')
      }

      this.$swal({
        title: '고객을 생성 하시겠습니까?',
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

          const r = await this.$post(
            'http://localhost:3000/customers',
            this.customer
          )

          loader.hide()

          console.log(r)

          if (r.status === 201) {
            this.$swal('고객 정보가 저장되었습니다.')
            this.$router.push({ path: '/template/listtodetail' })
          }
        }
      })
    },
    goToList() {
      this.$router.push({ name: 'ListToDetailView' })
    }
  }
}
</script>
