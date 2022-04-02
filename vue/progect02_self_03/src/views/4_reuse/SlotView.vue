<template>
  <div>
    <!-- <button
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    > -->
    <button
      class="btn btn-primary me-1"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop_1"
    >
      show Modal_1
    </button>
    <slot-modal modalId="staticBackdrop_1">
      <template v-slot:title>모달창 타이틀_1</template>
      <template v-slot:body>
        <p>first_1</p>
        <p>second_1</p>
      </template>
      <template v-slot:footer>
        <button>저장</button>
      </template>
    </slot-modal>
    <button
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop_2"
    >
      show Modal_2
    </button>
    <slot-modal modalId="staticBackdrop_2">
      <template v-slot:title>모달창 타이틀_2</template>
      <template v-slot:body>
        <p>first_2</p>
        <p>second_2</p>
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
      //   bShow: false
    }
  }
  //   setup() {},
  //   created() {},
  //   mounted() {},
  //   unmounted() {},
  //   methods: {}
}
</script>
