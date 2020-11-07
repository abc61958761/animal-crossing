<template>
    <v-bottom-navigation
        id="app-footer"
        fixed
        horizontal
        dark
    >
        <v-btn
            v-for="(btn, index) in buttons"
            :key="index"
            text
            @click="jumpPage(btn.link)"
        >
            <span>{{btn.text}}</span>
        </v-btn>
    </v-bottom-navigation>
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