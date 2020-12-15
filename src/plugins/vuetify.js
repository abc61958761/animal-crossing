import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#58BCA9',
            secondary: '#F57C7C',
            accent: '#65A3FF',
            error: '#FF9B40',
            character:'#666666'
          },
        },
    },
});
