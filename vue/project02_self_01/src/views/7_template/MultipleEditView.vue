<template>
  <div class="container">
    <!-- 조회조건 -->
    <div class="row row-cols-lg-auto g-3 align-items-center mb-2">
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
        <button
          class="btn btn-success me-1"
          @click="doSave"
          :disabled="selectedCustomers.length === 0"
        >
          저장
        </button>
        <button
          class="btn btn-danger me-1"
          @click="doDelete"
          :disabled="selectedCustomers.length === 0"
        >
          삭제
        </button>
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
              type="checkbox"
              class="form-check-input"
              :value="customer.id"
              v-model="selectedCustomers"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="customer.name"
              :disabled="
                selectedCustomers.filter(
                  (selectedId) => selectedId === customer.id
                ).length == 0
              "
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="customer.company"
              :disabled="
                selectedCustomers.filter(
                  (selectedId) => selectedId === customer.id
                ).length == 0
              "
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="customer.email"
              :disabled="
                selectedCustomers.filter(
                  (selectedId) => selectedId === customer.id
                ).length == 0
              "
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="customer.phone"
              :disabled="
                selectedCustomers.filter(
                  (selectedId) => selectedId === customer.id
                ).length == 0
              "
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="customer.address"
              :disabled="
                selectedCustomers.filter(
                  (selectedId) => selectedId === customer.id
                ).length == 0
              "
            />
          </td>
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
        { title: 'Name', key: 'name' },
        { title: 'Company', key: 'company' },
        { title: 'Email', key: 'email' },
        { title: 'Phone', key: 'phone' },
        { title: 'Address', key: 'address' }
      ],
      customers: [],
      searchName: '',
      selectedCustomers: []
    }
  },
  setup() {},
  created() {
    if (this.$route.params.fromDetail) {
      this.fromDetail = this.$route.params.fromDetail
      this.searchName = this.$route.params.searchName
    }
  },
  mounted() {
    if (this.fromDetail) {
      this.getCustomers()
    }
  },
  unmounted() {},
  methods: {
    async getCustomers() {
      this.selectedCustomers = []
      const loader = this.$loading.show({ canCancel: false })

      this.customers = await this.$get(
        `http://localhost:3000/customers?name_like=${this.searchName}`
      )

      loader.hide()
    },
    async doSave() {
      const selectedCustomerData = []
      this.selectedCustomers.forEach((id) => {
        selectedCustomerData.push(
          this.customers.filter((customer) => customer.id === id)[0]
        )
      })

      let isEmptyName = false
      let isEmptyCompany = false
      let isEmptyEmail = false
      let isEmptyPhone = false
      let isEmptyAddress = false

      selectedCustomerData.forEach((customer) => {
        if (customer.name === '') {
          isEmptyName = true
        }
        if (customer.company === '') {
          isEmptyCompany = true
        }
        if (customer.email === '') {
          isEmptyEmail = true
        }
        if (customer.phone === '') {
          isEmptyPhone = true
        }
        if (customer.address === '') {
          isEmptyAddress = true
        }
      })

      if (isEmptyName) {
        return this.$swal('입력되지 않은 Name이 있습니다.')
      }
      if (isEmptyCompany) {
        return this.$swal('입력되지 않은 Company이 있습니다.')
      }
      if (isEmptyEmail) {
        return this.$swal('입력되지 않은 Email이 있습니다.')
      }
      if (isEmptyPhone) {
        return this.$swal('입력되지 않은 Phone이 있습니다.')
      }
      if (isEmptyAddress) {
        return this.$swal('입력되지 않은 Address이 있습니다.')
      }

      //   console.log(selectedCustomerData)

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

          selectedCustomerData.forEach(async (customer) => {
            await this.$put(
              `http://localhost:3000/customers/${customer.id}`,
              customer
            )
          })

          loader.hide()
          this.$swal('고객 정보가 정상적으로 수정되었습니다.')
          this.selectedCustomers = []
          //   this.getCustomers()
        }
      })
    },
    async doDelete() {
      this.$swal({
        title: '정말 삭제하시겠습니까?',
        text: '삭제된 데이터는 복원되지 않습니다.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '삭제'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })

          this.selectedCustomers.forEach(async (id) => {
            await this.$delete(`http://localhost:3000/customers/${id}`)
          })

          loader.hide()
          this.$swal('고객 정보가 정상적으로 삭제되었습니다.')
          this.selectedCustomers = []
          this.getCustomers()
        }
      })
    }
  }
}
</script>
