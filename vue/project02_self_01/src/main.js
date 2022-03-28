import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins'
import i18nPlugin from './plugins/i18n'
import en from './i18n/en'
import ko from './i18n/ko'
import PageTitle from './components/fragments/PageTitle'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

const i18nStrings = { en, ko }

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(mixin)
app.use(i18nPlugin, i18nStrings)
app.component('page-title', PageTitle)

app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

app.directive('number', {
  mounted(el) {
    el.addEventListener('input', () => {
      console.log(event.target.value)
      event.target.value = event.target.value.replace(/[^0-9]/g, '')
    })
  }
})

app.directive('lowercase', {
  mounted(el) {
    el.addEventListener('input', () => {
      console.log(event.target.value)
      event.target.value = event.target.value.replace(/[^a-z]/g, '')
    })
  }
})

app.directive('uppercase', {
  mounted(el) {
    el.addEventListener('input', () => {
      console.log(event.target.value)
      event.target.value = event.target.value.replace(/[^A-Z]/g, '')
    })
  }
})

app.directive('korean', {
  mounted(el) {
    el.addEventListener('input', () => {
      console.log(event.target.value)
      event.target.value = event.target.value.replace(
        /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]|\|/g,
        ''
      )
    })
  }
})

app.mount('#app')
