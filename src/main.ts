import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import './style.css'
import './assets/styles/tailwind.css'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')
