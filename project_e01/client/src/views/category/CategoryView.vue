<template>
  <div class="container">
    <!-- 조회조건 -->
    <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
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
        <button class="btn btn-info me-1" @click="openModal">생성</button>
        <button class="btn btn-success me-1" @click="doExcel">
          엑셀다운로드
        </button>
      </div>
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
              @click="openModal(item.product_category_id)"
            >
              수정</button
            ><button class="btn btn-danger" @click="doDelete">삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
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
          <div class="modal-body">
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label">Name</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="selectedItem.category_name"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label">Description</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="selectedItem.category_description"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              ref="btnClose"
            >
              닫기
            </button>
            <button type="button" class="btn btn-primary" @click="doSave">
              저장
            </button>
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
      searchName: '',
      selectedItem: {
        product_category_id: -1,
        category_name: '',
        category_description: ''
      }
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
    doSave() {
      this.$swal({
        title: '카테고리 정보를 수정 하시겠습니까?',
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
            `/api/product/category/${this.selectedItem.product_category_id}`,
            {
              param: {
                category_name: this.selectedItem.category_name,
                category_description: this.selectedItem.category_description
              }
            }
          )
          loader.hide()
          console.log(r)
          // if (r.status === 200) {
          if (r.serverStatus === 2) {
            this.$refs.btnClose.click()
            this.$swal('카테고리 정보가 저장되었습니다.')
            this.getList()
          }
        }
      })
    },
    doCreate() {},
    openModal(id) {
      // 깊은 복사
      this.selectedItem = JSON.parse(
        JSON.stringify(
          this.list.filter((item) => item.product_category_id === id)[0]
        )
      )
    }
  }
}
</script>
