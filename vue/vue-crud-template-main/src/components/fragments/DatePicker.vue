<template>
  <div class="datepicker-wrap input-group">
    <span class="input-group-addon"><i class="fa fa-calendar"></i></span
    ><input
      id="datepicker"
      type="text"
      class="form-control"
      value=""
      @change="changeDate"
      :placeholder="placeholder"
    />
    <span
      v-if="selectedDate !== null"
      @click="clearDate"
      role="button"
      class="btn-clear"
      ><i class="fa fa-times"></i
    ></span>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    selectedDate: {
      type: Object,
      default: function () {
        return {}
      }
    },
    placeholder: {
      type: String
    }
  },
  data() {
    return {}
  },
  setup() {},
  created() {},
  mounted() {
    $('#datepicker')
      .datepicker({
        todayBtn: 'linked',
        format: 'yyyy-mm-dd',
        language: 'ko',
        autoclose: true
      })
      .on('changeDate', function (e) {
        // console.log('changeDate', e)
        const year = e.date.getFullYear()
        const month = (e.date.getMonth() + 1).toString().padStart(2, '0')
        const day = e.date.getDate().toString().padStart(2, '0')
        const dateChanged = new CustomEvent('dateChanged', {
          detail: {
            date: e.date,
            dateString: `${year}-${month}-${day}`
            // 2022-03-01 의 형태
          }
        })

        const datepicker = document.querySelector('#datepicker')
        // dispatch the events
        datepicker.dispatchEvent(dateChanged)
      })
  },
  unmounted() {},
  methods: {
    clearDate() {
      console.log('clearDate')

      $('#datepicker').val('')
      this.$emit('clearDate')
    }
  }
}
</script>
