const room = {
    state() {
      return {
        rooms: null,
        room: null
      };
    },
    mutations: {
      INIT_ROOMS(state, rooms) {
        state.rooms = rooms;
      },
      SET_ROOM(state, room) {
        state.room = room;
      }
    },
    actions: {
      initRooms({ commit }, rooms) {
        commit('INIT_ROOMS', rooms);
      },
      queryRoom({ commit, state }, roomId) {
        const room = state.rooms[roomId];
        commit('SET_ROOM', room);
      }
    },
    getters: {
      getRooms(state) {
        return state.rooms;
      },
      getRoom(state) {
        return state.room;
      }
    },
  };
  
  export default room;
  