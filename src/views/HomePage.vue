<template>
    <div id="homePage">
        <img src="@/assets/title.svg" />
        <hr class="my-6"/>
        <v-btn color="secondary" class="mb-4 text-h5" @click="login" height="64">GOOGLE 登入</v-btn>
        <v-btn click="login" height="64" color="accent" class="text-h5">FACEBOOK  登入</v-btn>
    </div>
</template>
<script>
export default {
    methods: {
        login() {
            this.$router.push({ path: "login" })
        }
    }
}
</script>
<style lang="scss">
#homePage {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>