<template>
  <section class="home-main-section background-gray">
    <div class="home-hot-content">
      <h1 class="home-main-title text-center home-hot-title">
        중고거래 인기매물
      </h1>
      <div class="cards-wrap">
        <article class="card-top" :key="product.id" v-for="product in products">
          <!-- <a class="card-link" data-event-label="i" @click="goToArticle()"> -->
          <a class="card-link" @click="goToArticle(product.id)">
            <div class="card-photo">
              <img :alt="product.title" :src="product.imgUrl" />
            </div>
            <div class="card-desc">
              <h2 class="card-title">{{ product.title }}</h2>
              <div class="card-price">{{ product.price }}</div>
              <div class="card-region-name">{{ product.region }}</div>
              <div class="card-counts">
                <span> {{ product.counts1 }} </span>
                ∙
                <span> {{ product.counts2 }} </span>
              </div>
            </div>
          </a>
        </article>
      </div>
      <div class="text-center">
        <a
          class="text-bold text-black text-m"
          id="hot-articles-more"
          data-url="/hot_articles"
        >
          인기매물 더 보기</a
        >
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  props: {
    products: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  created() {},
  methods: {
    goToArticle(id) {
      this.$router.push({
        path: '/articles',
        query: { id: id }
      })
    }
  }
}
</script>
