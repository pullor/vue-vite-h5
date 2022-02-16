import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './router'
import * as Vant from './vant';

import './styles/index.less';

const app = createApp(App);
app.use(createPinia()).use(router)

Object.values(Vant)
.reduce((app, com) => app.use(com), app);


app.mount('#app');
