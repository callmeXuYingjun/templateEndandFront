import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import router from './router/index'
import store from './vuex/store'
import App from './App.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000';
import 'view-ui-plus/dist/styles/viewuiplus.css'

createApp(App).use(router).provide('$axios', axios).use(store).use(ViewUIPlus).mount('#app')
