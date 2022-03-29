<template>
  <div class="container">
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Customer</label>
      <div class="col-sm-10">
        <select class="form-select" v-model="selectedId" @change="getCustomer">
          <option value="">==Select Customer==</option>
          <option
            :value="customer.id"
            :key="customer.id"
            v-for="customer in customers"
          >
            {{ customer.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.name"
          :disabled="!editMode"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.company"
          :disabled="!editMode"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.email"
          :disabled="!editMode"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.phone"
          :disabled="!editMode"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model.trim="customer.address"
          :disabled="!editMode"
        />
      </div>
    </div>
    <button
      class="btn btn-secondary me-1"
      v-show="!editMode"
      @click="editMode = true"
      :disabled="selectedId === ''"
    >
      수정
    </button>
    <button
      class="btn btn-secondary me-1"
      v-show="editMode"
      @click="editMode = false"
    >
      취소
    </button>
    <button class="btn btn-primary" @click="doSave" :disabled="!editMode">
      저장
    </button>
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
      },
      customers: [],
      selectedId: '',
      editMode: false
    }
  },
  setup() {},
  created() {
    this.getCustomerList()
  },
  updated() {
    this.getCustomerList()
  },
  mounted() {
    this.getCustomer()
  },
  unmounted() {},
  methods: {
    async getCustomerList() {
      this.customers = await this.$get('http://localhost:3000/customers')
    },
    async getCustomer() {
      this.editMode = false
      const loader = this.$loading.show({ canCancel: false })

      if (this.selectedId === '') {
        this.customer = {
          name: '',
          company: '',
          email: '',
          phone: '',
          address: ''
        }
      } else {
        this.customer = await this.$get(
          `http://localhost:3000/customers/${this.selectedId}`
        )
      }
      loader.hide()
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
            this.editMode = false
          }
        }
      })
    },

    goToList() {
      this.$router.push({
        name: 'ListToDetailView'
      })
    },
    goToDetail() {
      this.$router.push({ path: '/template/detail', query: { id: this.id } })
    }
  }
}
</script>
