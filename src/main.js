import { createApp } from 'vue'
import { CountDown } from 'vant';
import { Toast } from 'vant';
import App from './App.vue'
import './api/request.js';
// import 'amfe-flexible';
import './libs/rem.js';
import router from './router/index';

const app = createApp(App)
app.use(router).use(CountDown).use(Toast)

app.mount('#app')