<template>
  <div class="container">
    <!-- 조회조건 -->
    <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
      <div class="col-12">
        <input
          type="search"
          class="form-control"
          v-model.trim="searchName"
          @keyup.enter="getList"
          placeholder="Name"
        />
      </div>
      <div class="col-12">
        <button class="btn btn-primary me-1" @click="getList">조회</button>
        <button class="btn btn-success me-1" @click="goToCreate">생성</button>
        <button class="btn btn-info me-1" @click="doExcel">엑셀다운로드</button>
      </div>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <!-- supplier_id, supplier_name, phone, email, address, contact_name, contact_phone, contact_email, business_no, representative_name, created_datetime -->
          <th>Supplier Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
          <th>Contact Name</th>
          <th>Contact Phone</th>
          <th>Contact Email</th>
          <th>Business No</th>
          <th>Representative Name</th>
          <th>Created Datetime</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.supplier_id" v-for="item in list">
          <td>
            <a
              class="link-primary"
              @click="goToDetail(item.supplier_id)"
              role="button"
              >{{ item.supplier_name }}</a
            >
          </td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.contact_name }}</td>
          <td>{{ item.contact_phone }}</td>
          <td>{{ item.contact_email }}</td>
          <td>{{ item.business_no }}</td>
          <td>{{ item.representative_name }}</td>
          <td>{{ item.created_datetime }}</td>
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
      list: [],
      fromDetail: false,
      searchName: ''
    }
  },
  setup() {},
  created() {
    if (this.$route.params.fromDetail) {
      this.fromDetail = this.$route.params.fromDetail
      this.searchName = this.$route.params.searchName
    }
  },
  async mounted() {
    if (this.fromDetail) {
      this.getList()
    }
  },
  unmounted() {},
  methods: {
    async getList() {
      console.log(this.searchName)
      const loader = this.$loading.show({ canCancel: false })
      this.list = await this.$get(
        `/api/product/supplier?supplier_name_like=${this.searchName}`
      )
      console.log(this.list)
      loader.hide()
    },
    goToDetail(id) {
      this.$router.push({
        path: '/product/supplier/detail',
        query: { id: id, searchName: this.searchName }
      })
    },
    doExcel() {
      this.$ExcelFromTable(this.headers, this.customers, 'customers', {})
    },
    doCreate() {
      this.$swal({
        title: '카테고리를 생성 하시겠습니까?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '생성'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })
          const r = await this.$post('/api/product/category', {
            param: {
              category_name: this.selectedItem.category_name,
              category_description: this.selectedItem.category_description
            }
          })
          loader.hide()
          console.log(r)
          if (r.status === 200) {
            this.$refs.btnClose.click()
            this.$swal('카테고리가 생성되었습니다.')
            this.getList()
          }
        }
      })
    }
  }
}
</script>
