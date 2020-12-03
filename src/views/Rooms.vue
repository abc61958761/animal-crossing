<template>
    <div id="rooms">
        <!-- <v-row> -->
            <v-card>123</v-card>
            <v-card>123</v-card>
        <!-- </v-row>
        <v-row></v-row>
        <v-row></v-row> -->
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
#rooms {
    display: flex;
}
</style>