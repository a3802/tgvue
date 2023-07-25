import { createApp } from 'vue'
import { CountDown } from 'vant';
import { Form, Field } from 'vant';
import { Toast } from 'vant';
import App from './App.vue'
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import './api/request.js';
// import 'amfe-flexible';
import './libs/rem.js';
import router from './router/index';

const app = createApp(App)
app.use(router).use(CountDown).use(Toast).use(Form).use(Field)

app.mount('#app')