<template>
    <div id="homePage">
        <v-btn color="secondary" class="mb-4" @click="login">GOOGLE 登入</v-btn>
        <v-btn click="login">FACEBOOK  登入</v-btn>
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