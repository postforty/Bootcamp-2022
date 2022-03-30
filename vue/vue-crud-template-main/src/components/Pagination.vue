<template>
  <!-- BEGIN pagination -->
  <nav class="pagination row py-2">
    <div class="col-12 col-md-3"></div>
    <div
      class="col-12 col-md-6 d-flex align-items-center justify-content-center"
    >
      <div class="btn-group">
        <button
          class="btn btn-white"
          :class="{ disabled: currentPage - maxPagination < 1 }"
          type="button"
          @click="addPaging(-1)"
        >
          <i class="fa fa-chevron-left"></i>
        </button>
        <button
          v-for="pageli in calPageList"
          :key="pageli.page"
          class="btn btn-white"
          :class="{ active: currentPage == pageli.page }"
          @click="changePage(pageli.page)"
        >
          {{ pageli.page }}
        </button>
        <button
          class="btn btn-white"
          type="button"
          :class="{ disabled: start + maxPagination > pageList.length }"
          @click="addPaging(1)"
        >
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <div
      class="col-12 col-md-3 d-flex align-items-center justify-content-center"
    >
      <span class="fs-6 me-1" style="width: 80px">표시개수 : </span>
      <select
        class="form-select form-select-sm"
        v-model="resultPerPage"
        id="floatingSelect"
        @change="initPaging"
        style="max-width: 70px"
      >
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>
  </nav>
  <!-- END pagination -->
</template>
<script>
export default {
  components: {},
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    itemCount: {
      type: Number, // 불러온 데이터 개수
      default: 0
    }
  },
  data() {
    return {
      resultPerPage: 5, // 한페이지에 보여질 result 개수
      pageLength: 0,
      pageList: [],
      start: 0, // 페이지네이션 start
      end: 0, // 페이지네이션 end
      currentPage: 1,
      maxPagination: 5 // 최대 페이지네이션
    }
  },
  watch: {
    items() {
      this.initPaging()
    }
  },
  setup() {},
  created() {
    this.initPaging() // 페이지네이션 초기화
  },
  computed: {
    calPageList: function () {
      return this.pageList.slice(this.start - 1, this.end)
    }
  },
  mounted() {},
  unmounted() {},
  methods: {
    // 페이지네이션 초기화
    initPaging() {
      this.pageLength = Math.ceil(this.itemCount / this.resultPerPage)

      this.pageList = []
      for (let i = 1; i <= this.pageLength; i++) {
        this.pageList.push({ page: i })
      }

      this.start = 1
      this.end = this.pageLength
      if (this.pageLength > 5) {
        this.end = 5
      }
      // console.log(
      //   `resultPerPage:${this.resultPerPage} pageLength:${this.pageLength} itemCount:${this.itemCount} start:${this.start} end:${this.end} `
      // )
      this.changePage(1)
    },
    addPaging(num) {
      if (num > 0) {
        this.start += this.maxPagination
        this.end += this.maxPagination
        if (this.end > this.pageList.length) {
          this.end = this.pageList.length
        }
      } else {
        this.start -= this.maxPagination
        this.end = this.start + this.maxPagination - 1
      }
      this.changePage(this.start)
    },
    changePage(num) {
      this.currentPage = num
      const start = this.resultPerPage * (this.currentPage - 1)
      const end = this.resultPerPage * this.currentPage

      this.$emit('changePage', start, end)
    }
  }
}
</script>
