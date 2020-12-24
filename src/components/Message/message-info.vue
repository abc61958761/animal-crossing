<template>
    <div>
        <v-list-item two-line v-if="index==0">
        <v-list-item-content>
            <v-list-item-title>來自Carol的邀請</v-list-item-title>
            <v-list-item-subtitle>2020.12.20.20:08</v-list-item-subtitle>
        </v-list-item-content>
        <v-btn  depressed  dark :color="entered? '#6BA5FB' :'#109980'" :text="entered">{{entered?"重新排隊":"進入房間"}}</v-btn>
        </v-list-item>
        <v-list-item two-line v-if="index==1">
        <v-list-item-content>
            <v-list-item-title>{{title}}</v-list-item-title>
            <v-list-item-subtitle>2020.12.20.20:08</v-list-item-subtitle>
        </v-list-item-content>
            <v-btn  depressed  dark color='#6BA5FB' text @click="$emit('click',title,'2020.12.20.20:08')">查看訊息</v-btn>
        </v-list-item>
    </div>
</template>
<script>
export default {
 props:["entered","error" ,"index"]   ,
 computed:{ 
     title(){
         if(this.error){
            return "Bug與錯誤 回報"
         }
         return "回饋與建議 回報"
     }
 }
}
</script>
<style lang="scss" scoped>


</style>