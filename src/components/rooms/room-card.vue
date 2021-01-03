<template>
    <v-card>
        <v-card-title 
            class="headline 
            orange--text 
            text-h6"
        >
            {{room.name}}
        </v-card-title>
        <v-card-text class="text--character">
            <div>島主： carol</div>
            <div>開房時間：5/11 18:49:3</div>
            <div>活動類型：{{room.activityType}}</div>
            <div>活動種類：{{room.category}}</div>
            <div>目前排隊人數：3 / 10</div>
        </v-card-text>
        <v-card-actions>
            <v-row class="ma-0" align="center" justify="end">
                <v-btn color="orange" outlined class="mx-1" depressed>
                    更多資訊
                </v-btn>

                <v-btn @click="joinRoom" color="orange" class="mx-1 white--text" depressed>
                    加入排隊
                </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: ['room'],
    methods: {
        joinRoom() {
            const roomId = this.room.id;
            this.$router.push({ path: "room", query: { id: roomId } });
        }
    }
}
</script>