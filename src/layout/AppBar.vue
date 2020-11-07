<template>
    <v-app-bar
        id="app-bar"
        color="#222222"
        fixed
        dark
        dense
        flat
    >
        <div class="app-bar-content">
            <v-spacer></v-spacer>

            <v-btn
                class="d-none d-sm-flex"
                v-for="(btn, index) in buttons"
                :key="index"
                text
                @click="jumpPage(btn.link)"
            >
                <span>{{btn.text}}</span>
            </v-btn>
        </div>
    </v-app-bar>
</template>
<script>
export default {
    data: () => ({
        buttons: [{
            text: '關於我',
            link: '/about-me'
        }, {
            text: '關於專案',
            link: '/about-project'
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