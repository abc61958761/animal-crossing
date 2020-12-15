<template>
    <div id="room" class="d-flex flex-column" :class="{'roomScroll': $vuetify.breakpoint.xs}">
        <info-room :show="show" @click="show=!show"></info-room>
        <mobile-room />
        <destop-room />
    </div>
</template>
<script>
import MobileRoom from '@/components/room/mobile-room';
import DestopRoom from '@/components/room/destop-room';
import InfoRoom from'@/components/room/info-room'

export default {
    data: () => {
        return {
            show: true
        }
    },
    components: {
        'mobile-room': MobileRoom,
        'destop-room': DestopRoom,
        'info-room':InfoRoom
    },
}
</script>
<style lang="scss">
#room {
    height: 100%;
}
.card-text-margin {
    margin-top: -50px;
}
.roomScroll {
    overflow: scroll;
}
</style>