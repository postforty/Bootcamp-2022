<template>
  <div>
    <button @click="changeValue">변경</button>
    <child-component
      :str="sampleData"
      :num="num1"
      :isOk="true"
      :arr="list"
      :obj="person"
      ref="child1"
      @change-data="getData"
    />
  </div>
</template>
<script>
import ChildComponent from '@/components/fragments/ChildComponent.vue'
export default {
  components: { ChildComponent },
  data() {
    return {
      sampleData: 'Hello World',
      num1: 35,
      isOk: true,
      list: [1, 2, 3],
      person: { name: 'Jeremy' }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeValue() {
      this.num1 = 234
      this.$refs.child1.str2 = 'Busan'
      this.$refs.child1.doPrint()
    },
    getData(data) {
      console.log(data)
    }
  }
}
</script>
