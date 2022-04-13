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
        <button class="btn btn-success me-1" @click="goToCreate">생성</button>
        <button class="btn btn-primary me-1" @click="doExcel">
          엑셀다운로드
        </button>
        <div class="btn-group">
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
            <i class="fas fa-th-large"></i>
          </button>
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
    <div class="row" v-else-if="showMethod === 'card'">
      <!-- 12 그리드 중 카드 하나가 3, 4, 6의 크기를 차지 -->
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
              <i class="fas fa-building"></i> {{ customer.company }}
            </p>
            <p class="card-text">
              <i class="fas fa-envelope"></i> {{ customer.email }}
            </p>
            <p class="card-text">
              <i class="fas fa-phone-square"></i> {{ customer.phone }}
            </p>
            <p class="card-text">
              <i class="fas fa-address-book"></i> {{ customer.address }}
            </p>
            <a @click="goToDetail(customer.id)" class="btn btn-primary"
              >Detail</a
            >
          </div>
        </div>
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
      searchName: '',
      fromDetail: false,
      showMethod: 'list' // 'card'
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
        query: { id, searchName: this.searchName }
      })
      // this.$router.push({ name: 'DetailView', params: { id: id } })
    },
    doExcel() {
      const loader = this.$loading.show({ canCancel: false })

      this.$ExcelFromTable(this.headers, this.customers, 'customers')

      loader.hide()
    },
    goToCreate() {
      this.$router.push({ path: '/template/create' })
    }
  }
}
</script>
