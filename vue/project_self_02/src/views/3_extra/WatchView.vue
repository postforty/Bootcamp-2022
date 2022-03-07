<template>
  <div>
    <select name="" id="" v-model="selected">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selected: '',
      changeHistory: []
    }
  },
  watch: {
    selected(newValue, oldValue) {
      this.changeHistory.push(newValue)
      console.log(this.changeHistory)
    }
  }
}
</script>
