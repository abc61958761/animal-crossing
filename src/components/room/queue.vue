<template>
    <v-card class="d-flex flex-column rounded-lg"  style="overflow: hidden">
        <div class="card-title d-none d-sm-flex" >
            <slot name="title"></slot>
        </div>
        <div class="divider d-none d-sm-flex"></div>
        <v-list style="overflow: scroll">
            <v-list-item dense v-for="(item, index) of 10" :key="index">
                <v-list-item-content>
                    testte
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn text x-small color="red">
                        拒絕
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-card>
</template>
<style lang="scss" scoped>
.card-title {
    color: #109980;
    padding: 14px 16px;
}
.divider {
    border: 1px solid #109980;
}
</style>