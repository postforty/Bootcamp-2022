<template>
  <div>
    <button
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      show Modal
    </button>
    <slot-modal modalId="staticBackdrop">
      <template v-slot:title> 모달창 타이틀 </template>
      <template v-slot:body>
        <p>first</p>
        <p>second</p>
      </template>
      <template v-slot:footer>
        <button>저장</button>
      </template>
    </slot-modal>
  </div>
</template>
<script>
import SlotModal from '@/components/fragments/SlotModal.vue'
export default {
  components: { 'slot-modal': SlotModal },
  data() {
    return {
      bShow: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
