import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';

import App from './App.vue';
import router from './router';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

const vuetify = createVuetify();

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
