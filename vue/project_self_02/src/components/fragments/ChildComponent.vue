<template>
  <div>
    <p>{{ str }}</p>
    <p>{{ num }}</p>
    <p>{{ isOk }}</p>
    <p>{{ arr }}</p>
    <p>{{ obj }}</p>
    <p>{{ str2 }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  // props는 부모 컴포넌트에서만 값을 변경할 수 있다.
  props: {
    str: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      default: 0
    },
    isOk: {
      type: Boolean,
      default: false
    },
    arr: {
      type: Array,
      default: function () {
        return []
      }
    },
    obj: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      str2: 'Jeju'
    }
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.str)
    this.sampleData = 'AAA'
  },
  unmounted() {},
  methods: {}
}
</script>
