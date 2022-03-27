<template>
  <div>
    <p>{{ str }}</p>
    <p>{{ num }}</p>
    <p>{{ isOk }}</p>
    <p>{{ arr }}</p>
    <p>{{ obj }}</p>
    <p>{{ str2 }}</p>
    <button @click="callParent">부모로 테이터 전달</button>
    <button @click="callParent2">부모로 테이터 전달2</button>
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
  mounted() {
    console.log(this.str)
  },
  unmounted() {},
  methods: {
    doPrint() {
      console.log('doPrint')
    },
    callParent() {
      this.$emit('change-data', this.str2)
    },
    callParent2() {
      this.$emit('change-data2', (this.str2 = 'Busan'))
    }
  }
}
</script>
