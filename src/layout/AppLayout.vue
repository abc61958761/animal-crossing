<template>
    <div id="app-layput" class="v-application--wrap overflow-hidden">
        <app-bar v-if="isAppBar"/>
        <app-page :class="{ appPagePadding: isAppBar }"/>
        <app-footer v-if="isAppFooter" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

import AppBar from '@/layout/AppBar';
import AppPage from '@/layout/AppPage';
import AppFooter from '@/layout/AppFooter';

export default {
    components: {
        'app-bar': AppBar,
        'app-page': AppPage,
        'app-footer': AppFooter
    },
    computed: {
        ...mapGetters({
            isAppBar: 'getAppBar',
            isAppFooter: 'getAppFooter',
        })
    }   
}
</script>
<style lang="scss">
.appPagePadding {
    padding: 48px 0px 56px 0px !important;

    @media screen and (min-width: 600px) {
        padding: 48px 0px 0px 0px !important;
    }
}
</style>