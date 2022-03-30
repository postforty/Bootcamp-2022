<template>
  <section v-show="loading == true" class="loading-section">
    <div class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </section>
  <header>
    <h1>UsersView</h1>
  </header>
  <main class="main">
    <!-- table: users list -->
    <h4 class="mb-4">user management</h4>
    <div v-show="loading == false">
      <search-field @search="handleChangeSearch" />
      <date-picker
        :selectedDate="searchDate.startDate"
        placeholder="가입일로 검색"
        @clearDate="handleClearDate"
      />
      <button
        type="button"
        class="btn btn-primary btn-success btn-create"
        @click="showCreateModal"
      >
        생성
      </button>
    </div>
    <div>
      <grid-pagination
        :headers="headers"
        :items="filteredItems"
        @click-buttons="handleClickButtons"
      />
      <!-- 회원정보 (수정/생성/삭제)를 위한 Modal -->
      <DetailModal
        :payload="modalDetailPayload"
        ref="DetailModal"
        @reload="loadData"
      />
      <!-- <ModalEList :payload="modalEPayload" ref="ModalEList" /> -->
    </div>
  </main>
</template>

<script>
import GridPagination from '@/components/layouts/GridPagination.vue'
import DatePicker from '@/components/fragments/DatePicker.vue'
import SearchField from '@/components/fragments/SearchField.vue'
import DetailModal from '@/components/fragments/DetailModal.vue'

export default {
  components: {
    DatePicker,
    SearchField,
    GridPagination,
    DetailModal
  },
  data() {
    return {
      searchDate: { startDate: null, endDate: null, keyName: 'time' },
      search: '',
      modalDetailPayload: { id: '' },
      headers: [
        {
          title: 'ID',
          key: 'id',
          class: 'medium',
          button: null
        },
        {
          title: 'Nick',
          key: 'nick',
          class: 'medium',
          button: null
        },
        {
          title: 'Password',
          key: 'password',
          class: 'short',
          button: null
        },
        {
          title: 'Company',
          key: 'company',
          class: 'short',
          button: null
        },
        {
          title: 'Address',
          key: 'address',
          class: 'wide',
          button: null
        },
        {
          title: 'Phone',
          key: 'phone',
          class: 'medium',
          button: null
        },
        {
          title: 'Reg Date',
          key: 'reg_date',
          class: 'medium',
          button: null
        },
        {
          title: '수정',
          key: '',
          class: 'short',
          button: {
            label: '수정',
            method: 'showEditModal',
            icon: '<i class="fas fa-user-edit"></i>'
          }
        }
      ],
      items: [],
      loading: true
    }
  },
  computed: {
    filteredItems: function () {
      const start = this.searchDate.startDate
      const end = this.searchDate.endDate

      let result = []
      if (start === null || start === '') {
        result = this.items
      } else {
        if (end === null) {
          const tomorrow = new Date(start.getTime() + 24 * 60 * 60 * 1000)
          // console.log(`start:${start}, end: ${end}`)
          result = this.items.filter((item) => {
            return item.time > start && item.time < tomorrow
          })
        }
      }
      if (this.search !== '') {
        result = result.filter((item) => {
          return (
            item.id.includes(this.search) ||
            item.nick.includes(this.search) ||
            item.phone.includes(this.search) ||
            item.company.includes(this.search) ||
            item.address.includes(this.search)
          )
        })
      }
      return result
    }
  },
  setup() {},
  created() {
    this.loadData()
  },
  mounted() {
    // datepicker의 날짜가 변경되었을 때의 커스텀이벤트 'dateChanged'를 감지해서
    // 날짜 정보를 가져온다.
    //{
    //  detail: {
    //   date: e.date,
    //   dateString: // 2022-03-01 의 형태
    //  }
    //}
    const datepicker = document.querySelector('#datepicker')

    datepicker.addEventListener('dateChanged', (e) => {
      this.handleChangeDate(e.detail)
    })
  },
  methods: {
    async loadData() {
      this.loading = true

      // 딜레이 테스트
      setTimeout(async () => {
        if (this.loading == true) {
          window.alert('데이터를 불러올 수 없습니다')
          this.loading = false
        }
      }, 3000)

      this.items = await this.$get(`http://localhost:3000/users`)

      // data 가공
      this.items = this.items
        .map((data) => {
          let time = new Date(data.reg_date)
          let timestamp = time.getMilliseconds()
          data.reg_date = this.$convertDateFormat(time, 'YYYY-MM-DD')

          // data.req_time = time
          return { ...data, time: time, timestamp: timestamp }
        })
        .sort(function (a, b) {
          return b.time - a.time
        })

      this.loading = false
    },
    handleClickButtons(method, id) {
      if (method === 'showEditModal') {
        this.modalDetailPayload.id = id
        this.showEditModal()
      } else if (method === 'showEList') {
        this.showEList(id)
      } else if (method === 'sendMessage') {
        this.sendMessage(id)
      }
    },
    showCreateModal() {
      this.$refs.DetailModal.showCreateModal()
    },
    showEditModal() {
      this.$refs.DetailModal.showEditModal()
    },
    handleChangeDate(detail) {
      this.searchDate.startDate = detail.date
    },
    handleChangeSearch(search) {
      console.log(search)
      this.search = search
    },
    handleClearDate() {
      console.log('handleClearDate')
      this.searchDate.startDate = null
    }
  }
}
</script>

<style></style>
