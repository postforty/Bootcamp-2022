<template>
  <SectionLayoutA />
  <SectionLayoutB />
  <SectionLayoutC />
  <SectionLayoutD />
  <SectionLayoutE :products="products" />
  <SectionLayoutF />
</template>
<script>
import SectionLayoutA from '@/components/layouts/SectionLayoutA.vue'
import SectionLayoutB from '@/components/layouts/SectionLayoutB.vue'
import SectionLayoutC from '@/components/layouts/SectionLayoutC.vue'
import SectionLayoutD from '@/components/layouts/SectionLayoutD.vue'
import SectionLayoutE from '@/components/layouts/SectionLayoutE.vue'
import SectionLayoutF from '@/components/layouts/SectionLayoutF.vue'

export default {
  components: {
    SectionLayoutA,
    SectionLayoutB,
    SectionLayoutC,
    SectionLayoutD,
    SectionLayoutE,
    SectionLayoutF
  },
  data() {
    return {
      products: []
    }
  },
  setup() {},
  created() {
    this.getProducts()
  },
  mounted() {},
  unmounted() {},
  methods: {
    getProducts() {
      this.products = [
        {
          id: 1,
          title: '포켓몬빵1',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        },
        {
          id: 2,
          title: '포켓몬빵2',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        },
        {
          id: 3,
          title: '포켓몬빵3',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        },
        {
          id: 4,
          title: '포켓몬빵4',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        },
        {
          id: 5,
          title: '포켓몬빵5',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        },
        {
          id: 6,
          title: '포켓몬빵6',
          price: '6,000원',
          region: '충북 청주시 흥덕구 가경동',
          counts1: '관심 7',
          counts2: '채팅 33',
          imgUrl: require('@/assets/img1.png')
        },
        {
          id: 7,
          title: '포켓몬빵7',
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
