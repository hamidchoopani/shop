import router from '@/router/routes'
import vuetify from './plugins/vuetify'
    
// sweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Components
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)    
app.use(router)
app.use(pinia)
app.use(vuetify)
app.use(VueSweetalert2);
app.mount('#app')
