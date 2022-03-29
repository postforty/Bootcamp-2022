<template>
  <div class="container">
    <!-- 조회조건 -->
    <div class="row">
      <div class="col-5">
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
            <button class="btn btn-primary me-1" @click="getCustomers">
              조회
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
              <td>{{ customer.name }}</td>
              <td>{{ customer.company }}</td>
              <td>{{ customer.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-2 text-center">
        <button class="btn btn-danger mb-2" @click="doAdd">
          <i class="fas fa-chevron-right"></i>
        </button>
        <br />
        <button class="btn btn-danger" @click="doRemove">
          <i class="fas fa-chevron-left"></i>
        </button>
      </div>
      <div class="col-5">
        <div class="row row-cols-lg-auto g-3 align-items-center mb-2">
          <div class="col-12">
            <input
              type="search"
              class="form-control"
              v-model.trim="searchName2"
              @keyup.enter="getCustomers2"
              placeholder="Name"
            />
          </div>
          <div class="col-12">
            <button class="btn btn-primary me-1" @click="getCustomers2">
              조회
            </button>
            <button class="btn btn-danger me-1">저장</button>
          </div>
        </div>
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="customer.id" v-for="customer in customers2">
              <td>
                <input
                  type="checkbox"
                  class="form-check-input"
                  :value="customer.id"
                  v-model="selectedCustomers2"
                  @change="customer.isChecked = !customer.isChecked"
                />
              </td>
              <td>{{ customer.name }}</td>
              <td>{{ customer.company }}</td>
              <td>{{ customer.email }}</td>
            </tr>
          </tbody>
        </table>
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
      customers: [],
      customers2: [],
      searchName: '',
      searchName2: '',
      selectedCustomers: [],
      selectedCustomers2: []
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
    async getCustomers2() {},
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
    doAdd() {
      const selectedCustomerData = []
      this.selectedCustomers.forEach((id) => {
        const item = this.customers.filter((customer) => customer.id === id)[0]
        item.isChecked = false
        selectedCustomerData.push(item)
      })

      console.log(selectedCustomerData)

      const existCustomers2 = [...this.customers2]
      selectedCustomerData.forEach((selectedCustomer) => {
        if (
          existCustomers2.filter((c) => c.id === selectedCustomer.id).length ===
          0
        ) {
          existCustomers2.push(selectedCustomer)
        }
      })
      this.customers2 = existCustomers2
      this.selectedCustomers = []
    },
    doRemove() {
      const newCustomers2 = []

      this.customers2.forEach((customer) => {
        if (!customer.isChecked) {
          newCustomers2.push(customer)
        }
      })

      this.customers2 = newCustomers2
    }
    // doRemove() {
    //   const selectedCustomerData = []
    //   this.selectedCustomers2.forEach((id) => {
    //     selectedCustomerData.push(
    //       this.customers2.filter((customer) => customer.id === id)[0]
    //     )
    //   })

    //   const existCustomers2 = [...this.customers2]
    //   selectedCustomerData.forEach((selectedCustomer) => {
    //     existCustomers2.forEach((item, idx) => {
    //       if (item.id === selectedCustomer.id) {
    //         existCustomers2.splice(idx, 1)
    //       }
    //     })
    //   })
    //   this.customers2 = existCustomers2
    // }
  }
}
</script>
