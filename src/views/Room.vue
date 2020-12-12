<template>
    <div id="room">
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
        <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
        >
            <v-tab
                v-for="(item, index) in tabItems"
                :key="index"
            >
                {{ item.text }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="(item, index) in tabItems"
                :key="index"
            >
                <component :is="item.component"></component>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
<script>
import ChatRoom from '@/components/room/chat-room';
import Queue from '@/components/room/queue';

export default {
    data: () => {
        return {
            show: true,
            tab: null,
            tabItems: [{
                text: '聊聊',
                component: 'chat-room'
            }, {
                text: '隊伍',
                component: 'queue'
            }, {
                text: '已邀請',
                component: 'queue'
            }]
        }
    },
    components: {
        'chat-room': ChatRoom,
        'queue': Queue
    },
}
</script>
<style lang="scss" scoped>
.card-text-margin {
    margin-top: -50px;
}
</style>