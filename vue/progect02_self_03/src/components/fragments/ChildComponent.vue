<template>
  <div>
    <p>{{ str }}</p>
    <p>{{ num }}</p>
    <p>{{ isOk }}</p>
    <p>{{ arr }}</p>
    <p>{{ obj }}</p>
    <p>{{ str2 }}</p>
    <button @click="callParent">부모로 데이터 전달</button>
  </div>
</template>
<script>
export default {
  components: {},
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
  mounted() {},
  unmounted() {},
  methods: {
    doPrint() {
      console.log('doPrint 실행')
    },
    callParent() {
      this.$emit('change-data', this.str2)
    }
  }
}
</script>
