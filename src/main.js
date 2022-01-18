import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { router } from './router/index'
import * as Icons from '@element-plus/icons'
import store from './store/index'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)

Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
  })

app.mount('#app')
