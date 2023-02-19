import 'maz-ui/css/main.css'


import './assets/scss/index.scss'


import { createApp } from 'vue'

import MazBtn from 'maz-ui/components/MazBtn'
import MazInput from 'maz-ui/components/MazInput'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'


import App from './App.vue'
import router from './router'
const app = createApp(App);

app.component('MazBtn', MazBtn)
app.component('MazInput', MazInput)
app.component('MazPhoneNumberInput', MazPhoneNumberInput)

app.use(router).mount('#app')
