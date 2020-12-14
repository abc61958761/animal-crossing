<template>
  <div id="rooms">
    <v-row class="ma-0 mb-4" style="justify-content: space-around">
      <v-card class="mr-2">
        <v-card-text>公告</v-card-text>
      </v-card>
      <v-card class="ml-2" @click="isdialog = true">
        <v-card-text>
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
      color="purple"
      label="類型"
      solo
    ></v-select>
    <v-select class="mb-2" hide-details label="想做什麼？" solo></v-select>
    <v-layout wrap>
      <v-flex  xs12 sm6 md6  v-for="(item, index) in 10" :key="index"> 
        <room-card class="mb-2" 
        :class="{
          'mr-2': index%2 === 0 && !$vuetify.breakpoint.xs, 
          'ml-2': index%2 !== 0 && !$vuetify.breakpoint.xs
        }"></room-card>
      </v-flex>
    </v-layout>
    <establish
      :isdialog="isDialog"
      @cancel="isDialog = false"
      @build="isDialog = false"
    ></establish>
    
  </div>
</template>
<script>
import Establish from "@/components/Establish";
import RoomCard from "@/components/rooms/room-card";

export default {
  data() {
    return {
      isDialog: false,
    };
  },
  components: {
    "room-card": RoomCard,
    "establish": Establish,
  },
  mounted() {},
};
</script>
<style lang="scss">
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
</style>
