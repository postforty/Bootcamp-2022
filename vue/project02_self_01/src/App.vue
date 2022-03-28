<template>
  <HeaderLayout v-if="$route.path != '/'" />
  <router-view />
  <FooterLayout />
</template>
<script>
import HeaderLayout from '@/components/layouts/HeaderLayout.vue'
import FooterLayout from '@/components/layouts/FooterLayout.vue'
export default {
  components: { HeaderLayout, FooterLayout }
}
</script>
