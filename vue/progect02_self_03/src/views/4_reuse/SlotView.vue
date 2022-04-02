<template>
  <div>
    <!-- <button
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    > -->
    <button
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      show Modal
    </button>
    <slot-modal modalId="staticBackdrop">
      <template v-slot:title>모달창 타이틀</template>
      <template v-slot:body>
        <p>first</p>
        <p>second</p>
      </template>
      <template v-slot:footer>
        <button>저장</button>
      </template>
    </slot-modal>
    <button
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop2"
    >
      show Modal2
    </button>
    <slot-modal modalId="staticBackdrop2">
      <template v-slot:title>모달창 타이틀2</template>
      <template v-slot:body>
        <p>first2</p>
        <p>second2</p>
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
  components: { SlotModal },
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
