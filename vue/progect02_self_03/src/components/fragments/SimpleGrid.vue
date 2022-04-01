<template>
  <div class="container mt-2">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th v-if="selectType === 'radio' || selectType === 'checkbox'"></th>
          <th :key="th.key" v-for="th in headers">{{ th.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.drinkId" v-for="item in items">
          <td v-if="selectType === 'radio'">
            <input
              type="radio"
              name=""
              id=""
              v-model="checkedItem"
              @change="doSelect"
            />
          </td>
          <td v-if="selectType === 'checkbox'">
            <input
              type="checkbox"
              name=""
              id=""
              :value="item[checkedKey]"
              v-model="checkedItems"
              @change="doSelect"
            />
          </td>
          <td :key="th.key" v-for="th in headers">
            {{ item[th.key] }}
          </td>
        </tr>
      </tbody>
    </table>
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
    selectType: {
      type: String,
      default: ''
    },
    checkedKey: {
      type: String,
      default: ''
    },
    changeEventName: {
      type: String,
      default: 'change-item'
    }
  },
  data() {
    return {
      checkedItem: '',
      checkedItems: [],
      sampleData: 'A'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSelect() {
      if (this.selectType === 'radio') {
        console.log(this.checkedItem)
      } else if (this.selectType === 'checkbox') {
        console.log(this.checkedItems)
        this.$emit(this.changeEventName, this.checkedItems)
      }
    },
    doPrint() {
      console.log('doPrint 함수 호출')
      console.log(this.sampleData)
    }
  }
}
</script>
