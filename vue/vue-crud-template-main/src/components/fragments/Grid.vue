<template>
  <div class="grid-wrap">
    <table class="grid table table-bordered mt-2 mb-4">
      <thead>
        <tr>
          <!-- <th>{{ headers[0]['title'] }}</th>
        <th>{{ headers[1]['title'] }}</th>
        <th>{{ headers[2]['title'] }}</th>
        <th>{{ headers[3]['title'] }}</th>
        <th>{{ headers[4]['title'] }}</th>
        <th>{{ headers[5]['title'] }}</th>
        <th>{{ headers[6]['title'] }}</th> -->
          <th
            v-for="header in headers"
            :key="header.key"
            :class="{
              wide: header.class === 'wide',
              medium: header.class === 'medium',
              short: header.class === 'short'
            }"
          >
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody id="tbBody">
        <tr v-for="(item, index) in formattedItems" :key="index">
          <td v-for="header in headers" :key="header.key">
            <span v-if="header.key">{{ item[header.key] }}</span>
            <span v-if="header.button">
              <button
                class="btn btn-link"
                @click="handleMethod(header.button.method, item.id)"
              >
                <span v-html="header.button.icon"></span>
                {{ header.button.label }}
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-show="!formattedItems.length" class="my-4 text-black-50">
      <h6>표시할 데이터가 없습니다.</h6>
    </div>
  </div>
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
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    sliceStart: {
      type: Number,
      default: 0
    },
    sliceEnd: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {}
  },
  setup() {},
  created() {},
  computed: {
    formattedItems: function () {
      console.log('grid: ', this.items.length)
      return this.items.slice(this.sliceStart, this.sliceEnd)
      //.slice(this.sliceStart, this.sliceEnd)
    }
  },
  mounted() {},
  unmounted() {},
  methods: {
    changePage(start, end) {
      console.log('changePage', start, end)
      this.sliceStart = start
      this.sliceEnd = end
    },
    handleMethod(method, id) {
      // console.log(`handleMethod: ${method} id: ${id}`)
      this.$emit('clickButtons', method, id)
    }
  }
}
</script>
