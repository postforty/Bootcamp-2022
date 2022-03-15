import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageTitle from './components/fragments/PageTitle.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

// createApp(App).use(store).use(router).mount('#app') // 기존
const app = createApp(App)
app.use(store)
app.use(router)
app.component('page-title', PageTitle) // 추가
app.mount('#app')
