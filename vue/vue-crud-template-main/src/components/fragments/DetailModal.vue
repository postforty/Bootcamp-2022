<template>
  <div
    class="modal"
    :class="{ show: show }"
    tabindex="-1"
    @keyup.esc="closeModal"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
      @click="handleDialogClick"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ editMode ? 'Modify' : 'Create Member' }}
          </h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>

        <div class="modal-body">
          <!-- 아이디 -->
          <div class="row mb-3">
            <label class="col-sm-4 col-form-label p-1 ps-3">ID</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control form-control-sm"
                :readonly="editMode"
                v-model.trim="detail.id"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-4 col-form-label p-1 ps-3">닉네임</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control form-control-sm"
                v-model.trim="detail.nick"
              />
            </div>
          </div>

          <div class="row mb-3 pt-3 border-top border-gray-300">
            <label class="col-sm-4 col-form-label p-1 ps-3">Password</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control form-control-sm"
                v-model.trim="detail.password"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-4 col-form-label p-1 ps-3">Phone</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control form-control-sm"
                v-model.trim="detail.phone"
              />
            </div>
          </div>

          <div class="row mb-3 pt-3 border-top border-gray-300">
            <label class="col-sm-4 col-form-label p-1 ps-3">Company</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control form-control-sm"
                v-model.trim="detail.company"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-4 col-form-label p-1 ps-3">Address</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control form-control-sm"
                v-model.trim="detail.address"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-4 col-form-label p-1 ps-3">Created Date</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="detail.reg_date"
                readonly
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            v-show="!editMode"
            type="button"
            class="btn btn-success"
            @click="doCreate"
            :disabled="allFieldNotEmpty == false"
          >
            생성
          </button>
          <button
            v-show="editMode"
            type="button"
            class="btn btn-primary"
            @click="doModify"
            :disabled="detail.id === ''"
          >
            수정
          </button>
          <button type="button" class="btn btn-secondary" @click="closeModal">
            취소
          </button>
          <button
            v-show="editMode"
            type="button"
            class="btn btn-danger"
            @click="doDelete"
            :disabled="detail.id === ''"
          >
            삭제
          </button>
        </div>

        <section v-show="loading == true" class="loading-modal">
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    payload: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      show: false,
      detail: {
        id: '',
        nick: '',
        password: '',
        company: '',
        address: '',
        phone: '',
        reg_date: ''
      },
      editMode: false
    }
  },
  computed: {
    allFieldNotEmpty() {
      return (
        this.detail.id !== '' &&
        this.detail.nick !== '' &&
        this.detail.password !== '' &&
        this.detail.phone !== '' &&
        this.detail.company !== '' &&
        this.detail.address !== ''
      )
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {
    showCreateModal() {
      this.editMode = false
      this.detail.password = '9999'
      this.detail.phone = '010-1234-4321'
      this.show = true
    },
    showEditModal() {
      this.editMode = true
      this.getUser()
      this.show = true
    },
    async getUser() {
      this.loading = true

      // 딜레이 테스트
      setTimeout(async () => {
        if (this.loading == true) {
          window.alert('데이터를 불러올 수 없습니다')
          this.loading = false
        }
      }, 3000)

      this.detail = await this.$get(
        `http://localhost:3000/users/${this.payload.id}`
      )

      this.loading = false
    },
    async doCreate() {
      let today = new Date()
      today = this.$convertDateFormat(today, 'YYYY-MM-DD hh:mm:ss')
      this.detail.reg_date = today

      if (window.confirm('입력된 정보로 고객 정보를 생성하시겠습니까?')) {
        const res = await this.$post(
          'http://localhost:3000/users/',
          this.detail
        )
        console.log(res)
        if (res.status === 201) {
          window.alert('고객 정보가 생성되었습니다.')
          this.$emit('reload')
          this.closeModal()
        }
      }
    },
    async doModify() {
      if (window.confirm('고객 정보를 수정하시겠습니까?')) {
        const res = await this.$put(
          `http://localhost:3000/users/${this.detail.id}`,
          this.detail
        )
        console.log('수정: ', this.detail)
        console.log(res)
        if (res.status === 200) {
          window.alert('고객 정보가 저장되었습니다.')
          this.$emit('reload')
          this.closeModal()
        }
      }
    },
    async doDelete() {
      if (window.confirm('고객 정보를 삭제하시겠습니까?')) {
        const res = await this.$delete(
          `http://localhost:3000/users/${this.detail.id}`
        )
        console.log(res)
        if (res.status === 200) {
          window.alert('고객 정보가 삭제되었습니다.')
          this.$emit('reload')
          this.closeModal()
        }
      }
    },
    closeModal() {
      this.detail = {
        id: '',
        nick: '',
        password: '',
        company: '',
        address: '',
        phone: '',
        reg_date: ''
      }
      this.show = false
    },
    handleDialogClick(event) {
      event.stopPropagation()
    }
  }
}
</script>

<style></style>
