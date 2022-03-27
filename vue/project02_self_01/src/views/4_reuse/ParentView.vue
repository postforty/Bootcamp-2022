<template>
  <div>
    <button @click="changeValue">변경</button>
    <child-component
      :str="sampleData"
      :num="num1"
      :isOk="true"
      :arr="list"
      :obj="person"
      ref="child"
      @change-data="getData"
      @change-data2="getData2"
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
      person: { name: 'Sewol' }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeValue() {
      this.num1 = 235
      this.$refs.child.str2 = 'Busan'
      this.$refs.child.doPrint()
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
