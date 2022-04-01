<template>
  <div v-if="userRole === 'G'">
    <button>조회</button>
  </div>
  <div v-else-if="userRole === 'M'">
    <button>조회</button>
    <button>생성</button>
  </div>
  <div v-else>
    <button>조회</button>
    <button>생성</button>
    <button>삭제</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userRole: 'M'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
