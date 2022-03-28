<template>
  <h1 v-html="$translate(`${lang}.welcome`, userInfo)"></h1>
  <!-- <div>{{ $translate(`${lang}.email`, userInfo) }}</div> -->
  <button>{{ $translate(`${lang}.search`) }}</button>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      lang: 'ko',
      //   name: 'Sewol',
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
