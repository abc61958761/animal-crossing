import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

Vue.use(Vuex);

/**
 * CreateStore - Function to create store.
 *
 * @returns {Object}  Description.
 */
export function createStore() {
  return new Vuex.Store({
    modules
  });
}
