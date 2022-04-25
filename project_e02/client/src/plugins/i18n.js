/* eslint-disable */
export default {
  install: (app, options) => {
    //   en.hi = ['en','hi']
    app.config.globalProperties.$translate = (key, params = {}) => {
      return key
        .split('.')
        .reduce((o, i) => {
          if (o) return o[i] // o['en'] = {hi: 'Hello'}
          // o['hi'] = 'hello'
        }, options)
        .replace(/{\w+}/g, (match) => params[match.slice(1, -1)])
    }
  }
}
