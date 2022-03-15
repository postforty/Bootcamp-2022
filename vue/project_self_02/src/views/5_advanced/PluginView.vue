<template>
  <div>
    <h1>{{ $translate(`${lang}.welcome`, userInfo) }}</h1>
    <h1>{{ $translate(`${lang}.hi`) }}</h1>
    <button>{{ $translate(`${lang}.search`) }}</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      lang: 'ko',
      userInfo: {
        name: 'Sewol',
        email: 'Sewol@gmail.com',
        lang: 'en'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
