import { createApp } from 'vue'
import App from './App.vue'
import mixin from './mixins'

const app = createApp(App)

app.mixin(mixin)
app.mount('#app')
