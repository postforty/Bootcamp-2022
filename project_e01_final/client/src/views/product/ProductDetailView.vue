<template>
  <div class="container">
    <dir class="row">
      <div class="col-md-6">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                :src="`http://localhost:3000/static/images/${product.img1}`"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <h2>{{ product.product_name }}</h2>
        <p>{{ product.category_name }} | {{ product.supplier_name }}</p>
        <h3>{{ $convertNumberFormat(product.original_price, '#,###') }}원</h3>
      </div>
      <div class="row">
        <img
          :src="`http://localhost:3000/static/images/${product.img2}`"
          alt=""
        />
      </div>
    </dir>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      product_id: '',
      searchName: '',
      product: {}
    }
  },
  setup() {},
  created() {
    this.product_id = this.$route.query.product_id
    // this.searchName = this.$route.query.searchName
  },
  mounted() {
    this.getProduct()
  },
  unmounted() {},
  methods: {
    async getProduct() {
      this.product = await this.$get(`/api/product/${this.product_id}`)
      console.log(this.product)
    },
    goToList() {
      this.$router.push({ path: '/supplier/list' })
    },

    goToChange() {
      this.$router.push({ name: 'ChangeView', params: { id: this.id } })
    }
  }
}
</script>
