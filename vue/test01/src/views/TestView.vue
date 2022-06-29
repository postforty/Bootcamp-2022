<template>
  <div>{{ ExampleData }}</div>
  <!-- <button type="" @click="message()">about</button>
  <button type="" @click="sumScore(mannerQuestions)">sumScore</button>
  <button type="" @click="checkedButton">checkedButton</button>
  <button type="" @click="computeScore(mannerQuestions)">computeScore</button> -->
  <button type="" @click="test(myManners)">myManners</button>
  <div :key="manner.id"  v-for="manner in mannerQuestions">
    <input type="checkbox" name="" id="" :value="manner" v-model="inputTest">{{manner.question}}
  </div>
  {{inputTest}}
</template>
<script>
/* eslint-disable */
import ExampleData from '@/components/data/ExampleData.js'
export default {
  components: {},
  data() {
    return {
      ExampleData,
      // mannerQuestions: [
      //   { id: 'sg1', question: '식사 후 냅킨을 챙겨줘요.', score: 1 },
      //   { id: 'sg2', question: '수저를 챙겨줘요.', score: 1 },
      //   { id: 'sg3', question: '물을 따라줘요.', score: 1 },
      //   { id: 'sg4', question: '부족한 반찬, 음식을 챙겨줘요.', score: 1 },
      //   { id: 'sg5', question: '분위기를 편하게 만들어요.', score: 1 },
      //   { id: 'sb1', question: '약속 시간을 안 지켜요.', score: -1 },
      //   { id: 'sb2', question: '음식을 지저분하게 먹어요.', score: -1 },
      //   {
      //     id: 'sd3',
      //     question: '맛있는 음식을 지나치게 가져가요.',
      //     count: 1,
      //   },
      //   { id: 'sb4', question: '식사 중 대화 예의가 없어요.', score: -1 },
      //   { id: 'sb5', question: '돈 정산이 깔끔하지 않아요.', score: -1 },
      //   { id: 'bg1', question: '당신은 겸상 매너요정 이에요.', score: 1 },
      //   { id: 'bg2', question: '밥장이 밥상을 잘 주도해요.', score: 1 },
      //   { id: 'bb1', question: '밥장이 사람을 차별해요.', score: -1 },
      //   { id: 'bb2', question: '밥장이 독단적으로 행동해요.', score: -1 },
      // ],
      myManners: [
				[
					{ mannerTitle: '받은 금매너' },
					[
						{ id: 'sg1', question: '식사 후 냅킨을 챙겨줘요.', count: 1 },
						{ id: 'sg2', question: '수저를 챙겨줘요.', count: 9 },
						{ id: 'sg3', question: '물을 따라줘요.', count: 1 },
						{ id: 'sg4', question: '부족한 반찬, 음식을 챙겨줘요.', count: 1 },
						{ id: 'sg5', question: '분위기를 편하게 만들어요.', count: 1 },
					],
				],
				[
					{ mannerTitle: '받은 똥매너' },
					[
						{ id: 'sb1', question: '약속 시간을 안 지켜요.', count: 1 },
						{ id: 'sb2', question: '음식을 지저분하게 먹어요.', count: 1 },
						{
							id: 'sb3',
							question: '맛있는 음식을 지나치게 가져가요.',
							count: 1,
						},
						{ id: 'sb4', question: '식사 중 대화 예의가 없어요.', count: 1 },
						{ id: 'sb5', question: '돈 정산이 깔끔하지 않아요.', count: 1 },
					],
				],
				[
					{ mannerTitle: '받은 금매너' },
					[
						{ id: 'bg1', question: '당신은 겸상 매너요정 이에요.', count: 9 },
						{ id: 'bg2', question: '밥장이 밥상을 잘 주도해요.', count: 10 },
					],
				],
				[
					{ mannerTitle: '받은 똥매너' },
					[
						{ id: 'bb1', question: '밥장이 사람을 차별해요.', count: 2 },
						{ id: 'bb2', question: '밥장이 독단적으로 행동해요.', count: 1 },
					],
				],
			],
      ex: [1,2,3,4,5],
      inputTest: [],
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    message() {
      this.$router.push('/about')
    },
    sumScore(mq) {
      const sumall = mq.map(item => item.score).reduce((prev, curr) => prev + curr, 0)
      console.log(sumall)
    },
    checkedButton() {
      this.inputTest = this.mannerQuestions.slice(0,3)
    },
    test(my){
      for (const i of my){
        // for(const j of i[1])
        //   console.log(j)
        console.log(i[1].length)
      }
    }

    // computeScore(mq) {
    //   // const updatedMannerQuestion = mq.map(p => p.id.slice(0,2) === 'sg' ? {...p, score: p.score * 0.02} : p)
    //   const updatedMannerQuestion = mq.map(p =>
		// 		p.id.slice(0, 2) === 'bg'
		// 			? { ...p, score: p.score * 0.03 }
		// 			: p.id.slice(0, 2) === 'bb'
		// 			? { ...p, score: p.score * 0.02 }
		// 			: p.id.slice(0, 2) === 'sg'
		// 			? { ...p, score: p.score * 0.02 }
		// 			: p.id.slice(0, 2) === 'sb'
		// 			? { ...p, score: p.score * 0.03 }
		// 			: p,
		// 	);
    //   console.log(updatedMannerQuestion)
    // }


  }
}
</script>
