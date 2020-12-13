<template>
    <v-app-bar
        id="app-bar"
        fixed
        dense
        flat
        color="primary"
    >
        <div class="app-bar-content">
            <v-spacer></v-spacer>

            <v-btn
                v-for="(btn, index) in buttons"
                :key="index"
                icon
            >
                <v-icon>mdi-heart</v-icon>
            </v-btn>
        </div>
    </v-app-bar>
</template>
<script>
export default {
    data: () => ({
        buttons: [{
            text: '首頁',
            link: '/login'
        }, {
            text: '我的房間',
            link: '/rooms'
        }, {
            text: '我的留言',
            link: '/rooms'
        }]
    }),
    methods: {
        jumpPage(link) {
            this.$router.push(link)
        }
    }
}
</script>
<style lang="scss">
#app-bar {
    .v-toolbar__content {
        justify-content: center;
    }
    .app-bar-content {
        display: flex;
        width: 100%;
        max-width: 960px;
    }
}
</style>