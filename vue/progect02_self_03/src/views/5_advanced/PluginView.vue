<template>
  <div>
    <h1>{{ $translate(`${lang}.welcome`, userInfo) }}</h1>
    <h1>{{ $translate(`${lang}.hi`) }}</h1>
    <button class="btn btn-primary">{{ $translate(`${lang}.search`) }}</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      lang: 'en',
      userInfo: {
        name: 'Sewol Han',
        email: 'sewol@gmail.com',
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
