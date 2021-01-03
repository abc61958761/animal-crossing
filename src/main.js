import Vue from 'vue'
import Cookies from 'js-cookie';

import App from './App.vue'
import vuetify from './plugins/vuetify';
import { createRouter } from './router';
import { createStore } from './store';

Vue.config.productionTip = false

const store = createStore();
const router = createRouter(store);

store.dispatch('initStorage');
const token = Cookies.get('animal-token');
if (token) {
  store.dispatch('me', token);
}

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
