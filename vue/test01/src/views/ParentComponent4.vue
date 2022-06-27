<template>
    <div>
    <child-component @send-array="sendArr" />
    </div>
</template>
<script>
import ChildComponent from '@/components/ChildComponent4'
export default {
  components: { ChildComponent },
  methods: {
    sendArr(data) {
      console.log(data)
    }
  }
}
</script>
