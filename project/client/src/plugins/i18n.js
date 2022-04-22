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

    // {name}
    // match.slice(1, -1)
    // name
    // 'Seungwon Go'

    // {
    //     name: 'Seungwon Go',
    //     email: 'seungwon.go@gmail.com',
    //     lang: 'en'
    //   }
  }
}
