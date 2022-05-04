<template>
  <div class="container">
    <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
      <div class="col-12">
        <input
          type="search"
          class="form-control"
          v-model.trim="searchName"
          @keyup.enter="getList"
          placeholder="name"
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
        <button class="btn btn-info me-1" @click="doExcel">엑셀다운로드</button>
        <button class="btn btn-danger me-1" @click="$refs.file.click()">
          엑셀업로드
        </button>
        <input
          type="file"
          style="display: none"
          ref="file"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          @change="uploadExcel($event.target.files)"
        />
      </div>
    </div>
    <div v-if="excelList.length > 0">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Active Y/N</th>
            <th>Delivery Y/N</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(item, i) in excelList">
            <td>{{ item.shipper_name }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.active_yn }}</td>
            <td>{{ item.delivery_yn }}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button class="btn btn-warning" @click="uploadData">최종 업로드</button>
      </div>
    </div>
    <table v-else class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Status</th>
          <!-- <th></th> -->
        </tr>
      </thead>
      <tbody>
        <tr :key="item.shipper_id" v-for="item in list">
          <td>{{ item.shipper_id }}</td>
          <td>{{ item.shipper_name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.active_yn }}</td>
          <!-- <td>
            <button
              class="btn btn-success me-1"
              data-bs-toggle="modal"
              data-bs-target="#categoryModal"
              @click="openModal(item.product_category_id)"
            >
              수정
            </button>
            <button
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
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
/* eslint-disable */
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
      },
      excelList: []
    }
  },
  setup() {},
  created() {},
  async mounted() {
    this.list = await this.$get('/api/shipper')
  },
  unmounted() {},
  methods: {
    doExcel() {
      this.$ExcelFromTable(this.headers, this.list, 'category', {})
    },
    async uploadExcel(files) {
      this.excelList = await this.$upload('/api/upload/excel', files[0])
      console.log(this.excelList)
    },
    async uploadData() {
      const items = []
      this.excelList.forEach((item) => {
        items.push([
          item.shipper_name,
          item.phone,
          item.address,
          item.delivery_yn,
          item.active_yn
        ])
      })
      const r = await this.$post('/api/shipper', { param: items })

      console.log(r)
      this.excelList = []
      this.getList()
    },
    async getList() {
      const loader = this.$loading.show({ canCancel: false })
      this.list = await this.$get('/api/shipper')

      console.log(this.list)
      loader.hide()
    },
    doDelete(id) {
      this.$swal({
        title: '카테고리 정말 삭제하시겠습니까?',
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

          loader.hide()

          console.log(r)
          if (r.status === 200) {
            this.$refs.btnClose.click()
            this.$swal('카테고리가 삭제되었습니다.')
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
        title: '카테고리 정말 삭제하시겠습니까?',
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

          loader.hide()

          console.log(r)
          if (r.status === 200) {
            this.$refs.btnClose.click()
            this.$swal('카테고리 상대가 변경되었습니다.')
            this.getList()
          }
        }
      })
    },
    doSave() {
      this.$swal({
        title: '카테고리 정보를 수정하시겠습니까?',
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
          //   put을 통해 수정할때는 200
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
        title: '카테고리를 생성하시겠습니까?',
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

          const r = await this.$post('/api/product/category/', {
            param: {
              category_name: this.selectedItem.category_name,
              category_description: this.selectedItem.category_description
            }
          })

          loader.hide()

          console.log(r)
          if (r.status === 200) {
            this.$refs.btnClose.click()
            this.$swal('카테고리가 저장되었습니다.')
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
    clearSelectedId() {
      this.selectedItem = {
        product_category_id: -1,
        category_name: '',
        category_description: ''
      }
    }
  }
}
</script>
