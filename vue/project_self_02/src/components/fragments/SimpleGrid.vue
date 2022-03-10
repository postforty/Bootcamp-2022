<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <!-- radio, checkbox 컬럼의 헤드를 만든다. -->
        <th v-if="selectType === 'radio' || selectType === 'checkbox'"></th>
        <th :key="th.key" v-for="th in headers">{{ th.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(item, i) in items">
        <!-- radio 컬럼의 바디를 만든다. -->
        <td v-if="selectType === 'radio'">
          <!-- radio 버튼을 checkedItem으로 그룹핑한다. -->
          <!-- change 이벤트로 checked 확인, doSelect 함수 호출 -->
          <input
            type="radio"
            name=""
            id=""
            v-model="checkedItem"
            @change="doSelect"
          />
        </td>
        <!-- checkbox 컬럼의 바디를 만든다. -->
        <td v-if="selectType === 'checkbox'">
          <!-- checkbox 버튼을 checkedItems으로 그룹핑한다.  -->
          <!-- change 이벤트로 checked 확인, doSelect 함수 호출 -->
          <!-- value로 유일한 Key값인 drinkId를 데이터바인딩, 어떤 row가 선택되었는지 알 수 있다. -->
          <input
            type="checkbox"
            name=""
            id=""
            :value="item[ckeckedKey]"
            v-model="checkedItems"
            @change="doSelect"
          />
        </td>
        <td :key="th.key" v-for="th in headers">{{ item[th.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  components: {},
  // props에서 부모 component로 부터 데이터를 받는다.
  props: {
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 부모 component로 부터 radio, checkbox 문자열을 받는다.
    selectType: {
      type: String,
      default: ''
    },
    // 부모 component로 부터 drinkId를 받는다.
    ckeckedKey: {
      type: String,
      default: ''
    },
    // 커스텀 이벤트의 기본값이 change-item인 changeEventName 프로퍼티를 만든다.
    changeEventName: {
      type: String,
      default: 'change-item'
    }
  },
  data() {
    return {
      // radio 버튼 데이터바인딩
      checkedItem: '',
      // checkbox 버튼 데이터바인딩
      checkedItems: [],
      // 부모 componet에서 접근하고자 하는 data인 sampleData
      sampleData: 'A'
    }
  },
  methods: {
    // radio, checkbox 버튼 이벤트의 실행 함수
    doSelect() {
      if (this.selectType === 'radio') {
        console.log(this.checkedItem)
      } else if (this.selectType === 'checkbox') {
        // console.log(this.checkedItems)

        // $emit은 부모 component의 이벤트를 실행 시켜주는 글로벌 함수
        // 파라미터 첫 번째에는 이벤트명, 두 번째에는 데이터 입력
        // 첫 번째 파라미터의 명을 props의 changeEventName으로 변경한다.
        this.$emit(this.changeEventName, this.checkedItems)
      }
    },
    // 부모 component에서 호출하고자 하는 doPrint 함수를 선언
    doPrint() {
      console.log('doPrint 함수 호출')
      console.log(this.sampleData)
    }
  }
}
</script>
