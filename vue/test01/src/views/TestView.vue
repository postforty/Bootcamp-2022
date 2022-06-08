<template>
  <div>{{ ExampleData }}</div>
  <button type="" @click="message()">about</button>
</template>
<script>
import ExampleData from '@/components/data/ExampleData.js'
export default {
  components: {},
  data() {
    return {
      ExampleData
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    message() {
      this.$router.push('/about')
    }
  }
}
</script>
