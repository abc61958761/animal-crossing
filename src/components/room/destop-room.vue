<template>
    <v-row class="d-none d-sm-flex" style="overflow: hidden">
        <v-col cols="4" class="d-flex flex-column" style="height: 100%;">
            <queue style="flex: 1" class="mb-4"></queue>
            <queue style="flex: 1"></queue>
        </v-col>
        <v-col cols="8" class="d-flex flex-column" style="height: 100%;">
            <chat-room style="flex: 1"></chat-room>
        </v-col>
    </v-row>
</template>
<script>
import ChatRoom from '@/components/room/chat-room';
import Queue from '@/components/room/queue';

export default {
    data: () => {
        return {
            
        }
    },
    components: {
        'chat-room': ChatRoom,
        'queue': Queue
    },
}
</script>