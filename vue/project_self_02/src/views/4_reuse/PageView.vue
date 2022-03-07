<template>
  <div>
    <page-title title="고객조회" :title2="title2" :list="list" />
  </div>
</template>
<script>
import PageTitle from '@/components/fragments/PageTitle.vue'

export default {
  components: { 'page-title': PageTitle }, // key 명을 value 명과 다르게 할 경우
  // components: { 'PageTitle': PageTitle },
  // 위 코드는 오브젝트이기 때문에 아래 코드와 동일하다.
  // components: { PageTitle },
  data() {
    return {
      title2: '고객리스트를 조회하는 화면',
      list: [1, 2, 3, 4]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
