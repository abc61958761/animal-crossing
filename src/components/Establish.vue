<template>
  <v-dialog v-model="isdialog" persistent fullscreen>
    <v-card>
      <h2>建立房間</h2>
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
      <v-card-actions>
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
.v-input {
  margin: 16px 0px;
}
.v-dialog--fullscreen > .v-card {
  padding: 0px 16px !important;
  h2 {
    color: #58bca9;
    font-weight: 500;
    text-align: center;
    padding-top: 90px;
  }
}
.v-card__actions {
  padding: 0px;
  justify-content: space-between;
}
</style>
