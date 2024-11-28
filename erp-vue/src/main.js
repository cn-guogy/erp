// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入 Element Plus 样式
import './assets/css/light-theme.css'; // 引入全局样式

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount('#app');
