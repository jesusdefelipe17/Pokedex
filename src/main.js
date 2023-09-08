import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router/router' // Importa tu configuración de Vue Router

createApp(App)
  .use(router) // Usa Vue Router
  .mount('#app')
