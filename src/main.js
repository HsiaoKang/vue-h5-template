import { createApp } from "vue"
import routes from '@/routes'
import { createPinia } from "pinia"
import "virtual:windi.css"

import "./style.css"
import App from "./App.vue"
import { createRouter } from "vue-router"
import { createWebHashHistory } from "vue-router"

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount("#app")
