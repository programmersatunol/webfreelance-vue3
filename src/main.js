import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import { configure } from "vue-gtag";

configure({
  tagId: "G-7245R3C4SW"
})

app.mount('#app')
