import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '245822079095-mu2ltoqv401dueudiav4vimiqet9lvvb.apps.googleusercontent.com'
})

app.use(router)
app.use(ElementPlus)

app.mount('#app')