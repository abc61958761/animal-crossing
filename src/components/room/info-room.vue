<template>
    <v-card id="info-room">
        <v-card-actions>
            <span class="pl-2 info-room-title">房間資訊</span>
            <v-spacer></v-spacer>
            <!-- Mobile -->
            <v-btn icon @click="$emit('click')" class="d-sm-none">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>

            <!-- Destop -->
            <v-btn icon class="d-none d-sm-flex"><v-icon>mdi-star</v-icon></v-btn>
            <v-btn icon class="d-none d-sm-flex"><v-icon>mdi-star</v-icon></v-btn>
        </v-card-actions>
        <v-divider class="d-none d-sm-flex"></v-divider>
        <v-expand-transition>
            <div v-show="show">
                <v-card-text class="pt-0">
                    <v-layout wrap class="mb-3" >
                        <v-flex  xs12 sm4 md4>島主： carol</v-flex>
                        <v-flex  xs12 sm4 md4>開房時間：5/11 18:49:3</v-flex>
                        <v-flex  xs12 sm4 md4>活動類型：{{room.activityType}}</v-flex>
                        <v-flex  xs12 sm4 md4>活動種類：{{room.category}}</v-flex>
                        <v-flex  xs12 sm4 md4>目前排隊人數：3 / 10</v-flex>
                    </v-layout>
                    <div class="pa-6 rounded-lg" style="border: 1px solid rgba(51, 51, 51, 1)">{{room.remark}}</div>
                </v-card-text>
                <v-card-actions class="d-sm-none">
                    <v-row class="ma-0" align="center" justify="end">
                        <v-btn outlined color="#109980" class="mx-1" depressed>關閉房間</v-btn>
                        <v-btn color="#109980" class="mx-1 white--text" depressed>修改資訊</v-btn>
                    </v-row>
                </v-card-actions>
            </div>
        </v-expand-transition>
    </v-card>
</template>
<script>
export default {
  props:['show', 'room'],
  data: () => {
      return {
      }
  }
}
</script>
<style lang="scss" scoped>
#info-room {
    .info-room-title {
        color: #109980;
        font-size: 18px;
        font-weight: 500;
    }
}
</style>