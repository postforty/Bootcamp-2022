<template>
  <div>
    <grid
      :headers="headers"
      :items="items"
      :sliceStart="sliceStart"
      :sliceEnd="sliceEnd"
      @click-buttons="handleClickButtons"
    />

    <pagination
      :itemCount="items.length"
      @change-page="changePage"
      :items="items"
    />
  </div>
</template>
<script>
import Grid from '@/components/fragments/Grid.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  components: { Grid, Pagination },
  props: {
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      sliceStart: 0,
      sliceEnd: 5
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changePage(start, end) {
      console.log('changePage', start, end)
      this.sliceStart = start
      this.sliceEnd = end
    },
    handleClickButtons(method, id) {
      // console.log(`handleClickButtons: ${method} id: ${id}`)
      this.$emit('clickButtons', method, id)
    }
  }
}
</script>
