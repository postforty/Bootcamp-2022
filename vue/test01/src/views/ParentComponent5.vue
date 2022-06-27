<template>
    <div>
    <!-- <h2>{{testComputed}}</h2>
    <h2>{{checkChild}}</h2> -->
    <button type="button" @click="checkChild">부모 버튼</button>
    <ChildComponent ref="child_component" />
    </div>
</template>
<script>
import ChildComponent from '@/components/ChildComponent5'
export default {
  components: { ChildComponent },
  computed: {
    msg: function() {
      return this.$refs.child_component.msg
    },
    countUp() {
      return this.$refs.child_component.count
    },
    testComputed() {
      return 1 + this.countUp
    }
  },
  methods: {
    checkChild() {
    //   console.log(this.msg)
      console.log(this.countUp)
      return this.countUp
    }
  }
}
</script>
