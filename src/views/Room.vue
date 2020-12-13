<template>
    <div id="room" class="d-flex flex-column" :class="{'roomScroll': $vuetify.breakpoint.xs}">
        <v-card>
            <v-card-title>
                房間資訊
                 <v-spacer></v-spacer>
                 <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                 <v-btn icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    icon
                    @click="show = !show"
                >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-card-text >
                        <div>島主：Carol</div>
                        <div>開房時間：5/11 18:49:3</div>
                        <div>活動類型：免費活動</div>
                        <div>活動種類：大頭菜價 / 開放逛島</div>
                        <div>目前排隊人數：3 / 10</div>
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
        <mobile-room />
        <destop-room />
    </div>
</template>
<script>
import MobileRoom from '@/components/room/mobile-room';
import DestopRoom from '@/components/room/destop-room';

export default {
    data: () => {
        return {
            show: true
        }
    },
    components: {
        'mobile-room': MobileRoom,
        'destop-room': DestopRoom
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