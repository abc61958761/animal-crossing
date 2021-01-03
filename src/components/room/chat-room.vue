<template>
    <v-card class="d-flex flex-column" style="overflow: hidden">
        <v-card-text class="d-flex flex-column" style="flex: 1; overflow: scroll;">
            <div v-for="(item, index) of messages" 
            :key="index" 
            class="d-flex"
            :class="{'flex-row-reverse' : item.user.id === 'user-001'}">
                <span v-if="item.user.id === 'user-001'">{{item.message}}</span>
                <span v-else>{{item.user.name}} : {{item.message}}</span>
            </div>
        </v-card-text>
        <v-card-actions>
            <v-textarea 
                filled 
                auto-grow 
                hide-details 
                solo 
                rows="1"
                dense
                background-color="rgba(255, 160, 66, 0.4)"
                class="pr-4 pl-2 rounded-xl"></v-textarea>
            <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data: () => {
        return {
            messages: [{
                message: "wertyuoiuytre",
                user: {
                    id: 'user-001',
                    name: '大象'
                }
            },{
                message: "wertyuoiuytre",
                user: {
                    id: 'user-002',
                    name: '老虎'
                }
            },{
                message: "wertyuoiuytre",
                user: {
                    id: 'user-002',
                    name: '老虎'
                }
            },{
                message: "wertyuoiuytre",
                user: {
                    id: 'user-001',
                    name: '大象'
                }
            }]
        }
    }
}
</script>

<style lang="scss">

textarea {
    max-height: 168px !important;
    overflow: scroll !important;
}
</style>