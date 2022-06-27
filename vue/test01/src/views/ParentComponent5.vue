<template>
    <div>
    <!-- <h2>{{msg}}</h2> -->
    <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
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
    }
  },
  methods: {
    checkChild() {
      console.log(this.msg)
    }
  }
}
</script>
