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
          <button class="btn btn-success me-1" @click="openModal">생성</button>
          <button class="btn btn-info me-1" @click="doExcel">
            엑셀다운로드
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-xl-3 col-lg-4 col-md-6 mb-2"
        :key="customer.id"
        v-for="customer in customers"
      ></div>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.product_category_id" v-for="item in list">
          <td>{{ item.product_category_id }}</td>
          <td>{{ item.category_name }}</td>
          <td>{{ item.category_description }}</td>
          <td>
            <button
              class="btn btn-success me-1"
              data-bs-toggle="modal"
              data-bs-target="#categoryModal"
              @click="openModal"
            >
              수정
            </button>
            <button class="btn btn-danger" @click="doDelete">삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <div
        class="modal fade"
        id="categoryModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">카테고리</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
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
        { title: 'ID', key: 'product_category_id' },
        { title: 'Name', key: 'category_name' },
        { title: 'Description', key: 'category_description' }
      ],
      list: [],
      searchName: ''
    }
  },
  setup() {},
  created() {},
  async mounted() {
    this.list = await this.$get('/api/product/category')
  },
  unmounted() {},
  methods: {
    async getList() {
      const loader = this.$loading.show({ canCancel: false })
      this.list = await this.$get('/api/product/category')
      loader.hide()
    },
    doExcel() {
      this.$ExcelFromTable(this.headers, this.list, 'category', {})
    },
    doDelete() {},
    doSave() {},
    doCreate() {},
    openModal() {}
  }
}
</script>
