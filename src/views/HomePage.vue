<template>
    <div id="homePage">
        <v-btn color="secondary" class="mb-4">GOOGLE 登入</v-btn>
        <v-btn>FACEBOOK  登入</v-btn>
    </div>
</template>
<script>
export default {
    mounted() {
        if (this.$route.meta['isAppBar']) {
          this.$store.dispatch('setIsAppBar', true);
        } else {
            this.$store.dispatch('setIsAppBar', false);
        }
        if (this.$route.meta['isAppFooter']) {
          this.$store.dispatch('setIsAppFooter', true);
        } else {
            this.$store.dispatch('setIsAppFooter', false);
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