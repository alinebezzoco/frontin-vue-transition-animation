import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AnimateCSS from 'animate.css'

const app = createApp(App)

app.use(router)

app.use(AnimateCSS)

app.mount('#app')
