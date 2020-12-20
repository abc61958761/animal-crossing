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
                            <v-list-item-title class="mb-2 font-weight-bold">Carol</v-list-item-title>
                            <v-list-item-subtitle>小廢廢島</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action class="ma-1">
                            <v-btn class="my-1" depressed color="primary" outlined @click="jumpPage('/report')">錯誤與回報</v-btn>
                            <v-btn depressed color="#109980" dark>登出</v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-app-bar>
</template>
<script>
export default {
    data: () => ({
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
        padding: 0px;
    }
    .app-bar-content {
        display: flex;
        width: 100%;
        max-width: 960px;
    }
}
.v-list-item{
    &__action > button{
        width: 100%;
    }
}
</style>