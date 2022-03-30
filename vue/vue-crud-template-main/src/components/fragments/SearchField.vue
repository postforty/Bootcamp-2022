<template>
  <div class="searchfield-wrap input-group">
    <span class="input-group-addon"><i class="fa fa-search"></i></span
    ><input
      v-model.trim="value"
      type="text"
      class="form-control"
      @change="changeSearch"
      placeholder="Search"
    />
    <span
      v-show="value !== ''"
      @click="value = ''"
      role="button"
      class="btn-clear"
      ><i class="fa fa-times"></i
    ></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  watch: {
    value() {
      this.$emit('search', this.value)
    }
  },
  methods: {}
}
</script>
<style>
.input-group .btn-clear {
  position: absolute;
  right: 0;
  height: 36px;
  line-height: 36px;
  width: 36px;
}
</style>
