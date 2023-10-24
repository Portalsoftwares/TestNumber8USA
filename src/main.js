import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import "bootstrap/dist/css/bootstrap.min.css"
import  "bootstrap-icons/font/bootstrap-icons.css"

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

const options ={
    confirmButonColor:'#41b882',
    cancelButtonColor:'#ff7674'
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSweetalert2, options)

app.mount('#app')
