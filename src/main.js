import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setLanguage } from './i18n/i18n.js';

setLanguage('pt');

createApp(App).mount('#app')
