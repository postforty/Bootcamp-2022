<template>
  <div>
    <div><input type="text" name="" id="" v-focus /></div>
    <div><input type="text" name="" id="" v-number /></div>
    <div><input type="text" name="" id="" v-lowercase /></div>
    <div><input type="text" name="" id="" v-uppercase /></div>
    <div><input type="text" name="" id="" v-korean /></div>
  </div>
</template>
<script>
export default {
  components: {},
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    },
    // 키 이벤트 시점: keydown, keypress, input, keyup
    // keyup 시점에야 비로소 사용자 눈에 보여지고,
    // input 시점에는 value가 할당된다.
    // 이점을 이용한다.
    number: {
      mounted(el) {
        el.addEventListener('input', () => {
          console.log(event.target.value)
          event.target.value = event.target.value.replace(/[^0-9]/g, '')
        })
      }
    },
    lowercase: {
      mounted(el) {
        el.addEventListener('input', () => {
          console.log(event.target.value)
          event.target.value = event.target.value.replace(/[^a-z]/g, '')
        })
      }
    },
    uppercase: {
      mounted(el) {
        el.addEventListener('input', () => {
          console.log(event.target.value)
          event.target.value = event.target.value.replace(/[^A-Z]/g, '')
        })
      }
    },
    korean: {
      mounted(el) {
        el.addEventListener('input', () => {
          console.log(event.target.value)
          event.target.value = event.target.value.replace(
            /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]|\|/g,
            ''
          )
        })
      }
    }
  },
  data() {
    return {
      sampleData: ''
    }
  }
}
</script>
