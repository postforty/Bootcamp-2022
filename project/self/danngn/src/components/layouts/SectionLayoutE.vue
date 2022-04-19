<template>
  <section class="home-main-section background-gray">
    <div class="home-hot-content">
      <h1 class="home-main-title text-center home-hot-title">
        중고거래 인기매물
      </h1>
      <div class="cards-wrap">
        <article class="card-top" :key="i" v-for="(product, i) in products">
          <a
            class="card-link"
            data-event-label="i"
            href="/articles/{{i}}"
            @click="goToArticle"
          >
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
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    goToArticle() {},
    async getProducts() {
      this.products = [
        {
          title: '포켓몬빵',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        },
        {
          title: '포켓몬빵',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        },
        {
          title: '포켓몬빵',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        },
        {
          title: '포켓몬빵',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        },
        {
          title: '포켓몬빵',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        },
        {
          title: '포켓몬빵',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        },
        {
          title: '포켓몬빵',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        }
      ]
    }
  }
}
</script>
