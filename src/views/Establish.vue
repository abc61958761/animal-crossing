<template>
    <div>
        <h2 class="title">建立房間</h2>
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
      <div class="buttons">
          <v-btn color="primary" text depressed height="56px" width="150">取消</v-btn>
          <v-btn color="#A7A7A7" dark depressed height="56px" width="150">建立</v-btn>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
::v-deep .v-text-field--outlined  fieldset{
    border-color:#58BCA9;
}
.v-input{
    margin:16px 0px;
}
.title{
    color:#58BCA9;
    font-weight: 500;
    text-align: center;
    margin-top: 90px;
}
.buttons{
    display: flex;
    justify-content:space-around;
    margin:16px 0px;
}
</style>