<template>
    <v-card class="d-flex flex-column" style="overflow: hidden">
        <v-card-text style="flex: 1; overflow: scroll;">
            <div v-for="(item, index) of 30" :key="index">123</div>
        </v-card-text>
        <v-card-actions>
            <v-textarea height="36" hide-details no-resize solo class="pr-4 pl-2 rounded-pill"></v-textarea>
            <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
        </v-card-actions>
    </v-card>
</template>