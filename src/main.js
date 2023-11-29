import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import { plugin, defaultConfig } from '@formkit/vue'
import './assets/main.css'
import 'animate.css'

const app = createApp(App)
app.use(MotionPlugin)
app.use(
  plugin,
  defaultConfig({
    theme: 'genesis',
  }),
)
app.use(createPinia())
app.mount('#app')
