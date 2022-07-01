<template>
    <span style="margin-right: 20px">Click to cycle through states:</span>
    <div class="btn-container">
        <!-- <Transition name="slide-up"> -->
        <Transition name="slide-up" mode="out-in">
            <button v-if="docState === 'saved'"
                    @click="docState = 'edited'">Edit</button>
            <button v-else-if="docState === 'edited'"
                    @click="docState = 'editing'">Save</button>
            <button v-else-if="docState === 'editing'"
                    @click="docState = 'saved'">Cancel</button>
        </Transition>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
  components: {},
  data() {
    return {
      sampleData: '',
      docState: ref('saved')
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

button {
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
