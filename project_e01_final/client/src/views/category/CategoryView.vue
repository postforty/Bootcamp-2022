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
        <button
          class="btn btn-success me-1"
          data-bs-toggle="modal"
          data-bs-target="#categoryModal"
          @click="openModal()"
        >
          생성
        </button>
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
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.product_category_id" v-for="item in list">
          <td>{{ item.product_category_id }}</td>
          <td>{{ item.category_name }}</td>
          <td>{{ item.category_description }}</td>
          <td>{{ item.use_yn }}</td>
          <td>
            <button
              class="btn btn-success me-1"
              data-bs-toggle="modal"
              data-bs-target="#categoryModal"
              @click="openModal(item.product_category_id)"
            >
              수정</button
            ><button
              class="btn btn-danger me-1"
              @click="doDelete(item.product_category_id)"
            >
              삭제
            </button>
            <button
              class="btn btn-warning"
              @click="
                changeStatus(
                  item.product_category_id,
                  item.use_yn === 'Y' ? 'N' : 'Y'
                )
              "
            >
              {{ item.use_yn === 'Y' ? '사용중지' : '사용' }}
            </button>
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
              @click="clearSelectedItem"
            >
              닫기
            </button>
            <button
              type="button"
              v-if="selectedItem.product_category_id === -1"
              class="btn btn-primary"
              @click="doCreate"
            >
              생성
            </button>
            <button
              type="button"
              v-else
              class="btn btn-primary"
              @click="doSave"
            >
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
      this.list = (
        await this.$post('/api/product/category/search', {
          param: `%${this.searchName.toLowerCase()}%`
        })
      ).data

      console.log(this.list)
      loader.hide()
    },
    doExcel() {
      this.$ExcelFromTable(this.headers, this.list, 'category', {})
    },
    doDelete(id) {
      this.$swal({
        title: '카테고리를 정말 삭제 하시겠습니까?',
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
          const r = await this.$delete(`/api/product/category/${id}`)
          console.log(r)
          loader.hide()
          if (r.status === 200) {
            this.$swal('카테고리가 삭제 되었습니다.')
            this.getList()
          } else if (r.status === 501) {
            this.$swal(
              `삭제하려는 카테고리를 사용하는 제품이 ${r.count}건 존재합니다.`
            )
          }
        }
      })
    },
    changeStatus(id, useYN) {
      let title = '카테고리 사용을 중지하시겠습니까?'
      if (useYN === 'Y') {
        title = '카테고리를 다시 사용하시겠습니까?'
      }
      this.$swal({
        title: title,
        // text: '삭제된 데이터는 복원되지 않습니다.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '상태변경'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })

          const r = await this.$put(`/api/product/category/${id}`, {
            param: { use_yn: useYN }
          })
          console.log(r)

          loader.hide()

          if (r.status === 200) {
            this.$refs.btnClose.click()
            this.$swal('카테고리 상태가 변경되었습니다.')
            this.getList()
          } else if (r.status === 501) {
            this.$swal(
              `삭제하려는 카테고리를 사용하는 제품이 ${r.count}건 존재합니다.`
            )
          }
        }
      })
    },
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
          if (r.status === 200) {
            this.$refs.btnClose.click()
            this.$swal('카테고리 정보가 저장되었습니다.')
            this.getList()
          }
        }
      })
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
    },
    openModal(id) {
      if (id === undefined) {
        this.selectedItem = {
          product_category_id: -1,
          category_name: '',
          category_description: ''
        }
      } else {
        this.selectedItem = JSON.parse(
          JSON.stringify(
            this.list.filter((item) => item.product_category_id === id)[0]
          )
        )
      }
    },
    clearSelectedItem() {
      this.selectedItem = {
        product_category_id: -1,
        category_name: '',
        category_description: ''
      }
    }
  }
}
</script>
