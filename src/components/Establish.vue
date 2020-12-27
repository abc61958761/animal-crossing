<template>
  <v-dialog v-model="isdialog" persistent  :fullscreen= $vuetify.breakpoint.xs width="960px">
    <v-card class="px-4">
      <h2 class="primary--text text-center font-weight-bold pt-4" :class="{'pt-8': $vuetify.breakpoint.xs}">建立房間</h2>
      <v-select
        dense
        hide-details
        placeholder="房間類型（必填）"
        outlined
      ></v-select>
      <v-text-field
        dense
        hide-details
        outlined
        placeholder="房間密碼（必填）"
      ></v-text-field>
      <v-text-field
        dense
        hide-details
        outlined
        placeholder="登島密碼（必填）"
      ></v-text-field>
      <v-select
        dense
        hide-details
        placeholder="密碼發送方式（必填）"
        outlined
      ></v-select>
      <v-text-field
        dense
        hide-details
        outlined
        placeholder="排隊人數（必填，上限50人）"
      ></v-text-field>
      <v-select
        dense
        hide-details
        placeholder="活動類型（必填）"
        outlined
      ></v-select>
      <v-select
        dense
        hide-details
        placeholder="想做什麼（必填）"
        outlined
      ></v-select>
      <v-textarea
        dense
        outlined
        hide-details
        placeholder="公告欄（選填）"
      ></v-textarea>
      <v-card-actions class="pa-0 justify-end" :class="{'justify-space-between': $vuetify.breakpoint.xs}" >
        <v-btn
          color="primary"
          text
          depressed
          height="56px"
          width="150"
          @click="$emit('cancel')"
          >取消</v-btn
        >
        <v-btn
          color="#A7A7A7"
          dark
          depressed
          height="56px"
          width="150"
          @click="$emit('build')"
          >建立</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["isdialog"],
};
</script>
<style lang="scss" scoped>
::v-deep .v-text-field--outlined fieldset {
  border-color: #58bca9;
}
@media screen and (max-width: 600px){
  .v-input {
    margin: 16px 0px;
  }
}
.v-input {
    margin: 12px 0px;
}
.v-dialog--fullscreen > .v-card {
  padding: 0px 16px !important;
}
</style>
