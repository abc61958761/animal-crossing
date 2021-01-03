<template>
    <v-bottom-navigation
        id="app-footer"
        fixed
        horizontal
        background-color="primary"
        class="d-flex d-sm-none"
    >
        <v-btn
            v-for="(btn, index) in buttons"
            :key="index"
            text
            dark
            @click="jumpPage(btn.link)"
        >
            <span>{{btn.text}}</span>
            <v-icon>{{btn.icon}}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>
<script>
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
    methods: {
        jumpPage(link) {
            this.$router.push(link)
        }
    }
}
</script>