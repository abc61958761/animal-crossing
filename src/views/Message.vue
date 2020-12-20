<template>
    <div>
         <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
        >
            <v-tab
                v-for="(item, index) in tabItems"
                :key="index"
            >
                {{ item.text }}
            </v-tab>
        </v-tabs>
         <v-tabs-items v-model="tab">
            <v-tab-item>
                <message-info :entered="info" v-for="(info,index) in infoData" :key="index" :index="tab"></message-info>
            </v-tab-item>
            <v-tab-item>
               <message-info  :error="error" v-for="(error,index) in errorData" :key="index" :index="tab"></message-info>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
<script>
import MessageInfo from "@/components/Message/message-info"
export default {
    components:{
        MessageInfo
    },
    data(){
        return{
            tab:null,
            tabItems: [{
                text: "房間邀請"
            }, {
                text: "系統訊息"
            }],
            infoData:[false,true],
            errorData:[false,true]
        }
    }
    
}
</script>
