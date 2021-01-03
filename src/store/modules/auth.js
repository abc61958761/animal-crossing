import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken'

const auth = {
    state() {
      return {
        user: null,
        token: null
      };
    },
    mutations: {
      SET_CREDENTIAL(state, user) {
        const token = jwt.sign(user, 'animal-token');
        state.user = user;
        state.token = token;

        Cookies.set('animal-token', token);
      },
      ME(state, user) {
        state.user = user;
      },
      CLEAN_CREDENTIAL(state) {
        state.user = null;
        state.token = null;
        Cookies.remove('animal-token');
      }
    },
    actions: {
      login({ commit, rootState }) {
        commit('SET_CREDENTIAL', rootState.storage.users[0]);
      },
      logout({ commit }) {
        commit('CLEAN_CREDENTIAL');
      },
      verify({ commit, state, dispatch }, criteria) {
        const user = {
          ...state.user,
          ...criteria,
          certified: true
        }

        dispatch('verifyInitUser',  user, { root: true });
        commit('SET_CREDENTIAL', user);
      },
      me({ commit, dispatch }, token) {
        const user = jwt.verify(token, 'animal-token');

        dispatch('verifyInitUser',  user, { root: true });
        commit('ME', user);
      }
    },
    getters: {
      getUser(state) {
        return state.user;
      }
    },
  };
  
  export default auth;
  
  