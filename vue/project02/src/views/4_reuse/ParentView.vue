<template>
  <div>
    <button @click="changeValue">변경</button>
    <child-component
      :str="sampleData"
      :num="3"
      :isOk="true"
      :arr="list"
      :obj="person"
      ref="child1"
      @change-data="getData"
      @change-data2="getData2"
    />
  </div>
</template>
<script>
import ChildComponent from '@/components/fragments/ChildComponent.vue'
export default {
  components: {
    'child-component': ChildComponent
  },
  data() {
    return {
      sampleData: 'Hello World',
      num1: 35,
      isOk: true,
      list: [1, 2, 3],
      obj: { name: 'Jeremy' }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeValue() {
      this.num1 = 350
      this.$refs.child1.str2 = 'Seoul'
      this.$refs.child1.doPrint()
    },
    getData(data) {
      console.log('getData 실행')
      console.log(data)
    },
    getData2(data) {
      console.log('getData2 실행')
      console.log(data)
    }
  }
}
</script>
