<template>
  <v-app id="app">
    <v-img src="./assets/background.png">
      <router-view />
    </v-img>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
// button {
//   border-radius: 10px!important;
// }
</style>
