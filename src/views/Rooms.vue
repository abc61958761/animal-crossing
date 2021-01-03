<template>
  <div id="rooms">
    <v-row class="ma-0 mb-4" style="justify-content: space-around">
      <v-card class="mr-2" color="secondary">
        <v-card-text>公告</v-card-text>
      </v-card>
      <v-card class="ml-2" @click="isDialog = true" color="#7CACE3" dark>
        <v-card-text class="pa-1">
          <h2>開放島嶼</h2>
          <span>邀請其他人登島交流</span>
        </v-card-text>
      </v-card>
    </v-row>
    <v-text-field
      class="mb-2"
      placeholder="關鍵字搜尋"
      solo
      hideDetails
    ></v-text-field>
    <v-select
      class="mb-2"
      hide-details
      label="類型"
      solo
    ></v-select>
    <v-select class="mb-2" hide-details label="想做什麼？" solo ></v-select>
    <v-layout wrap>
      <v-flex  xs12 sm6 md6  v-for="(room, index) in rooms" :key="index"> 
        <room-card 
        :room="room"
        class="mb-2" 
        :class="{
          'mr-2': index%2 === 0 && !$vuetify.breakpoint.xs, 
          'ml-2': index%2 !== 0 && !$vuetify.breakpoint.xs
        }"></room-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import RoomCard from "@/components/rooms/room-card";

export default {
  components: {
    "room-card": RoomCard,
  },
  computed: {
    ...mapGetters({
        rooms: 'getRooms'
    })
  },   
  mounted() {},
};
</script>
<style lang="scss" scoped>
#rooms {
  // display: flex;
  overflow: scroll;
  height: 100%;
  .row > div {
    flex: 1;
    text-align: center;
    padding: 12px;
    align-items: center;
  }
}
::v-deep .v-label{
 color: #58bca9;
}
::v-deep .v-icon::before{
  color: #58bca9;
}
</style>
