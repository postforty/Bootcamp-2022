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
        <button class="btn btn-primary" @click="getCustomers">조회</button>
      </div>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
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
            <a href="" class="link-primary" @click="goToDetail(customer.id)">{{
              customer.name
            }}</a>
          </td>
          <td>{{ customer.company }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
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
      customers: [],
      searchName: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async getCustomers() {
      this.customers = await this.$get(
        `http://localhost:3000/customers?name_like=${this.searchName}`
      )
    },
    goToDetail(id) {
      this.$router.push({ path: '/template/detail', query: { id } })
      // this.$router.push({ name: 'DetailView', params: { id: id } })
    }
  }
}
</script>
