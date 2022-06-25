<template>
  <div id="app"><stars-rating :config="config"></stars-rating></div>
</template>

<script>
import starsRating from '@/components/rating-stars'
export default {
  name: 'App',
  components: {
    starsRating: starsRating
  },
  data() {
    return {
      config: {
        rating: 4.5,
        isIndicatorActive: true,
        style: {
          fullStarColor: '#ed8a19',
          emptyStarColor: '#737373',
          starWidth: 100,
          starHeight: 100
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
