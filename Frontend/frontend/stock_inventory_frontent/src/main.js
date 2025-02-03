// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import vuetify from './plugins/vuetify'
// import { loadFonts } from './plugins/webfontloader'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap';
// import '@/assets/css/main.scss'

// loadFonts()

// createApp(App)
//   .use(router)
//   .use(store)
//   .use(vuetify)
//   .mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'aos/dist/aos.css'; // Import AOS styles


// Import your SCSS file
import '@/assets/css/main.scss';

// Load custom fonts
loadFonts();

// Create and mount Vue app
const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);

app.mount('#app');
