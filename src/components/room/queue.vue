<template>
    <v-card class="d-flex flex-column"  style="overflow: hidden">
        <v-list style="overflow: scroll">
            <v-list-item dense v-for="(item, index) of 10" :key="index">
                <v-list-item-content>
                    testte
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn text x-small>按鈕</v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-card>
</template>