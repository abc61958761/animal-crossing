<template>
    <div id="app-layput" class="v-application--wrap overflow-hidden">
        <app-bar />
        <app-page/>
        <app-footer class="d-flex d-sm-none" />
    </div>
</template>
<script>
import AppBar from '@/layout/AppBar';
import AppPage from '@/layout/AppPage';
import AppFooter from '@/layout/AppFooter';

export default {
    components: {
        'app-bar': AppBar,
        'app-page': AppPage,
        'app-footer': AppFooter
    }
}
</script>
<style lang="scss">
#app-page {
    padding: 48px 0px 56px 0px !important;

    @media screen and (min-width: 600px) {
        padding: 48px 0px 0px 0px !important;
    }
}
</style>