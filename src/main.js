import { createApp } from 'vue'
import { CountDown } from 'vant';
import App from './App.vue'
// import 'amfe-flexible';
import './libs/rem.js';
import router from './router/index';
const app = createApp(App)
app.use(router).use(CountDown)
app.mount('#app')