/* eslint-disable */
export default {
  install: (app, options) => {
    // 파라미터에 i18nPlugin, i18nStrings이 각각 들어간다.
    // globalProperties에 특정 키 $translate를 잡아두면 모든 컴포넌트에서 바로 접근이 가능해진다.
    app.config.globalProperties.$translate = (key) => {
      // 예를 들어 key "ko.hi"는 split() 함수에 의해 ['ko', 'hi']가 된다.
      // reduce() 함수를 통해 배열 ['ko', 'hi']의 'ko'를 키로하여
      return key.split('.').reduce((o, i) => {
        // o['ko'] = {hi: '안녕하세요'}를 찾고, 'hi'를 키로 하여
        if (o) return o[i] // o['hi'] = '안녕하세요'를 찾아 return하게 된다.
      }, options)
    }
  }
}
