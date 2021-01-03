<template>
    <v-app-bar
        id="app-bar"
        fixed
        dense
        flat
        color="primary"
    >
        <img src="@/assets/logo-mobile.svg" height="36" />
        <!-- <img src="@/assets/logo-destop.svg" height="40" class="d-none d-sm-flex"/> -->
        <v-btn
            v-for="(btn, index) in buttons"
            :key="index"
            text
            dark
            class="d-none d-sm-flex"
            @click="jumpPage(btn.link)"
        >
            <span>{{btn.text}}</span>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
            icon
            color="white"
        >
            <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn
                    icon
                    color="white"
                    v-on="on"
                >
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item two-line class="d-block text-center">
                    <v-list-item-content class="character--text">
                        <v-list-item-title class="mb-2 font-weight-bold">{{user.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{user.island}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action class="ma-1">
                        <v-btn class="my-1" depressed color="primary" outlined @click="jumpPage('/report')">錯誤與回報</v-btn>
                        <v-btn depressed color="#109980" dark @click="logout">登出</v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({
        buttons: [{
            text: '首頁',
            link: '/',
            icon: "mdi-history"
        }, {
            text: '我的房間',
            link: '/my-room',
            icon: "mdi-music-note"
        }, {
            text: '我的留言',
            link: '/message',
            icon: "mdi-map-marker"
        }]
    }),
    computed: {
        ...mapGetters({
            user: 'getUser',
        })
    },
    methods: {
        jumpPage(link) {
            this.$router.push(link)
        },
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/');
        }
    }
}
</script>
<style lang="scss">
// #app-bar {
//     .v-toolbar__content {
//         justify-content: center;
//         padding: 0px;
//     }
//     .app-bar-content {
//         display: flex;
//         width: 100%;
//         // max-width: 960px;
//     }
// }
.v-list-item{
    &__action > button{
        width: 100%;
    }
}
</style>