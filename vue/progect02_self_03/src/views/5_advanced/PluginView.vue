<template>
  <div>
    <h1>{{ $translate(`${lang}.hi`) }}</h1>
    <h1>{{ $translate(`${lang}.hi`) }}</h1>
    <button class="btn btn-primary">{{ $translate(`${lang}.search`) }}</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      lang: 'en'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
