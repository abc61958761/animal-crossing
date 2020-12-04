import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { createRouter } from './router';
import { createStore } from './store';

Vue.config.productionTip = false

const store = createStore();
const router = createRouter(store);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
