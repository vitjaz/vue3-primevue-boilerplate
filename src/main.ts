import { createApp } from 'vue'
import './style.scss'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import type { PrimeVueConfiguration } from 'primevue/config'
import { router } from '@/router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  locale: {
    passwordPrompt: 'Придумайте пароль',
    weak: 'Слабый пароль',
    medium: 'Средний пароль',
    strong: 'Сильный пароль',
  },
} as PrimeVueConfiguration)
app.use(ToastService)
app.mount('#app')
