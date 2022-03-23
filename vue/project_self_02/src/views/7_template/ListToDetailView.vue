<template>
  <div class="container">
    <div>
      <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
        <div class="col-12">
          <input
            type="search"
            class="form-control"
            v-model.trim="searchName"
            @keyup.enter="getCustomers"
            placeholder="name"
          />
        </div>
        <div class="col-12">
          <button class="btn btn-primary me-1" @click="getCustomers">
            조회
          </button>
          <button class="btn btn-success me-1" @click="goToCreate">생성</button>
          <button class="btn btn-primary me-1" @click="doExcel">
            엑셀다운로드
          </button>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <button
              class="btn btn-outline-secondary"
              :class="{ active: showMethod === 'list' }"
              @click="showMethod = 'list'"
            >
              <i class="fas fa-list"></i>
            </button>
            <button
              class="btn btn-outline-secondary"
              :class="{ active: showMethod === 'card' }"
              @click="showMethod = 'card'"
            >
              <i class="fa-solid fa-table-cells-large"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="showMethod === 'card'">
      <div
        class="col-xl-3 col-lg-4 col-md-6 mb-2"
        :key="customer.id"
        v-for="customer in customers"
      >
        <div class="card">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Image cap"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
          <div class="card-body">
            <h5 class="card-title">{{ customer.name }}</h5>
            <p class="card-text">
              <i class="fa-solid fa-building"></i>{{ customer.company }}
            </p>
            <p class="card-text">
              <i class="fa-solid fa-envelope"></i>{{ customer.email }}
            </p>
            <p class="card-text">
              <i class="fa-solid fa-square-phone"></i>{{ customer.phone }}
            </p>
            <p class="card-text">
              <i class="fa-solid fa-address-book"></i>{{ customer.address }}
            </p>
            <a @click="goToDetail(customer.id)" class="btn btn-primary"
              >Detail</a
            >
          </div>
        </div>
      </div>
    </div>
    <table
      class="table table-striped table-bordered"
      v-if="showMethod === 'list'"
    >
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
            <a
              class="link-primary"
              @click="goToDetail(customer.id)"
              role="button"
              >{{ customer.name }}</a
            >
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
      headers: [
        { title: 'Name', key: 'name' },
        { title: 'Company', key: 'company' },
        { title: 'Email', key: 'email' },
        { title: 'Phone', key: 'phone' },
        { title: 'Address', key: 'address' }
      ],
      customers: [],
      searchName: '',
      fromDetail: false,
      showMethod: 'list'
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
      const loader = this.$loading.show({ canCancel: false })
      this.customers = await this.$get(
        `http://localhost:3000/customers?name_like=${this.searchName}`
      )
      loader.hide()
    },
    goToDetail(id) {
      this.$router.push({
        path: '/template/detail',
        query: { id: id, searchName: this.searchName }
      })
      // this.$router.push({ name: 'DetailView', params: { id: id } }) // POST 방식, url이 노출되지 않지만 사용자가 url을 공유할 수 없다. 따라서 보안상의 문제가 없다면 GET방식을 써야
    },
    doExcel() {
      this.$ExcelFromTable(this.headers, this.customers, 'customers', {})
    },
    goToCreate() {
      this.$router.push({ path: '/template/create' })
    }
  }
}
</script>
