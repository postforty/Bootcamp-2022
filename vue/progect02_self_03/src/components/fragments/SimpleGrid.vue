<template>
  <div class="container mt-2">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th :key="th.key" v-for="th in headers">{{ th.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.drinkId" v-for="item in items">
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
    }
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
