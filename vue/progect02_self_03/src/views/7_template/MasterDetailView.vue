<template>
  <div class="container">
    <!-- 조회조건 -->
    <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
      <div class="col-12">
        <input
          type="search"
          class="form-control"
          v-model.trim="searchName"
          placeholder="Name"
          @keyup.enter="getCustomers"
        />
      </div>
      <div class="col-12">
        <button class="btn btn-primary me-1" @click="getCustomers">조회</button>
      </div>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="customer.id" v-for="customer in customers">
          <td>
            <input
              type="radio"
              class="form-check-input"
              :value="customer.id"
              v-model="selectedId"
              @change="getCustomer"
            />
          </td>
          <td>
            {{ customer.name }}
          </td>
          <td>{{ customer.company }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
        </tr>
      </tbody>
    </table>
    <div v-show="selectedId !== ''" class="bg-light p-3">
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="customer.name"
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
      customers: [],
      searchName: '',
      selectedId: '',
      customer: {},
      editMode: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async getCustomers() {
      const loader = this.$loading.show({ canCancel: false })

      this.customers = await this.$get(
        `http://localhost:3000/customers?name_like=${this.searchName}`
      )

      loader.hide()
    },
    async getCustomer() {
      this.editMode = false

      if (this.selectedId === '') {
        this.customer = {
          name: '',
          company: '',
          email: '',
          phone: '',
          address: ''
        }
      } else {
        const loader = this.$loading.show({ canCancel: false })
        this.customer = await this.$get(
          `http://localhost:3000/customers/${this.selectedId}`
        )
        loader.hide()
      }
    },
    async doSave() {
      if (!this.customer.name) {
        return this.$swal('Name을 입력하세요.')
      }
      if (this.customer.company === '') {
        return this.$swal('Company를 입력하세요.')
      }
      this.$swal({
        title: '고객을 정보를 수정 하시겠습니까?',
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

          if (r.status === 200) {
            this.$swal('고객 정보가 저장되었습니다.')
            this.editMode = false
            this.selectedId = ''
            this.getCustomers()
          }
        }
      })
    }
  }
}
</script>
