import { rooms, users } from '@/data';

const storage = {
    state() {
      return {
        users: [],
        rooms: []
      };
    },
    mutations: {
      INIT_DATA(state) {
        state.users = users;
        state.rooms = rooms;
      },
      VERIFY_USER(state, user) {
        state.users = [user]
      }
    },
    actions: {
      initStorage({ commit, dispatch }) {
        dispatch('initRooms', rooms, { root: true });
        commit('INIT_DATA');
      },
      verifyInitUser({ commit }, user) {
        commit('VERIFY_USER', user);
      }
    },
    getters: {
      
    },
  };
  
  export default storage;
  