<template>
    <div>
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
            <v-tab-item>
                <room-card></room-card>
            </v-tab-item>
            <v-tab-item>
                <room-card></room-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
<script>
import RoomCard from '@/components/rooms/room-card';

export default {
    data: () => {
        return {
            tab: null,
            tabItems: [{
                text: "加入的房間"
            }, {
                text: "建立的房間"
            }]
        }
    },
    components: {
        'room-card': RoomCard
    }
}
</script>