<template>
    <v-card class="d-sm-none mt-4 mb-2" style="height: 477px;">
        <v-tabs
            v-model="tab"
            grow
        >
            <v-tab
                v-for="(item, index) in tabItems"
                :key="index"
            >
                {{ item.text }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="d-flex flex-column tab-items-fill-height">
            <v-tab-item
                v-for="(item, index) in tabItems"
                :key="index"
            >
                <component class="d-flex flex-column" :is="item.component"></component>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>
<script>
import ChatRoom from '@/components/room/chat-room';
import Queue from '@/components/room/queue';

export default {
    data: () => {
        return {
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
<style lang="scss">
.tab-items-fill-height {
    height: 100%;
    > div {
        display: flex;
        flex-direction: column;
        height: 100%;
        > div {
            display: flex;
            flex-direction: column;
            height: 100%;
            > div {
                height: 100%;
            }
        } 
    }
    
}
</style>