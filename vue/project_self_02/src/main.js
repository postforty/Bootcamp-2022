import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins'
import i18nPlugin from './plugins/i18n'
import en from './i18n/en'
import ko from './i18n/ko'
import PageTitle from './components/fragments/PageTitle.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

const i18nStrings = { en, ko }
// createApp(App).use(store).use(router).mount('#app') // 기존
const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(mixin)
app.use(i18nPlugin, i18nStrings)
app.component('page-title', PageTitle) // 추가
app.mount('#app')
