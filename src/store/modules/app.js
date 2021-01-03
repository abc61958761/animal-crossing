const app = {
  state() {
    return {
      isAppBar: false,
      isAppFooter: false
    };
  },
  mutations: {
    SET_IS_APP_BAR(state, criteria) {
      state.isAppBar = criteria;
    },
    SET_IS_APP_FOOTER(state, criteria) {
      state.isAppFooter = criteria;
    }
  },
  actions: {
    setIsAppBar({ commit }, criteria) {
      commit('SET_IS_APP_BAR', criteria);
    },
    setIsAppFooter({ commit }, criteria) {
      commit('SET_IS_APP_FOOTER', criteria);
    }
  },
  getters: {
    getAppBar(state) {
      return state.isAppBar;
    },
    getAppFooter(state) {
      return state.isAppFooter;
    }
  },
};

export default app;
