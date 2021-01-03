<template>
  <v-app id="app" :style="{'background-image': backageImage}">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    backageImage: `url(${require('@/assets/animal2.jpg')})`
  }),
};
</script>
<style lang="scss">
#app {
  height: 100vh;
  background-size: cover;
}
</style>
