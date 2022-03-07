<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th :key="th.key" v-for="th in headers">{{ th.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(item, i) in items">
        <td :key="th.key" v-for="th in headers">{{ item[th.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  components: {},
  // props에서 부모 component로 부터 데이터를 받는다.
  props: {
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
    //   },
    //   data() {
    //     return {
    //       sampleData: ''
    //     }
  }
}
</script>
