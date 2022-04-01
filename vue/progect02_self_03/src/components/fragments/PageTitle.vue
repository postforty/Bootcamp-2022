<template>
  <div>
    <h3>
      {{ title }}<small>{{ title2 }}</small>
    </h3>
    <div>
      {{ list }}
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: '페이지 제목'
    },
    title2: {
      type: String,
      default: ''
    },
    num1: {
      type: Number,
      default: 0
    },
    isBoolean: {
      type: Boolean,
      default: true
    },
    list: {
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
