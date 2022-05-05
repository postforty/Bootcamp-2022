/* eslint-disable */
export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = (key, params = {}) => {
      // userInfo를 받을 두번째 파라미터 params 추가(기본 값은 {})
      return key
        .split('.')
        .reduce((o, i) => {
          if (o) return o[i]
        }, options)
        .replace(/{\w+}/g, (match) => params[match.slice(1, -1)]) // match를 이용해 여러개의 동적 값을 찾는다. slice로 {} 안의 값을 찾아 replace로 userInfo의 해당 값으로 바꾼다.
    }
  }
}
