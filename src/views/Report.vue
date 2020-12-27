<template>
    <div  style="height:100%;" class="d-flex flex-column">
        <h2>回報與建議</h2>
        <div :class="$vuetify.breakpoint.xs? '':'d-flex align-center'">
          <v-radio-group v-model="radio" row>
            <v-radio label="Bug與錯誤" value="bug">Bug與錯誤</v-radio>
            <v-spacer></v-spacer>
            <v-radio label="建議與回報" value="suggest">建議與回報</v-radio>
          </v-radio-group>
          <v-select
            dense
            hide-details
            placeholder="錯誤類型"
            outlined
            :items="errorType"
          ></v-select>
        </div>
      <v-textarea
        dense
        outlined
        hide-details
        placeholder="錯誤狀況描述"
        class="mt-4"
      ></v-textarea>
    <div class="mt-4 d-flex" :class="$vuetify.breakpoint.xs ? 'justify-space-between': 'justify-end'">
      <v-btn height="56" text color="#109980" width="150" depressed>取消</v-btn>
      <v-btn height="56" color="#109980" class="white--text" width="150" depressed @click="$router.push('/message')">回報</v-btn>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            radio:null,
            errorType:["房間相關","邀請相關","聊天相關","其他"]
        }
    }
}
</script>
<style lang="scss" scoped>
::v-deep .v-input__control{
  flex-direction: row;
  height: 100%
}
</style>