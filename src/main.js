import { createApp } from 'vue'
import App from './App.vue'
import Popup from './components/Popup.vue'

import './assets/main.css'

const app = createApp(App);
app.component('Popup', Popup)
createApp(App).mount('#app')

