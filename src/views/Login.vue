<template>
  <div id="loginPage">
    <div class="ready-font mb-6">準備開始吧！</div>
    <div class="mb-10">
      <v-text-field
        placeholder="你的角色（必填)"
        solo
        hideDetails
        class="mb-4"
      ></v-text-field>
      <v-text-field
        placeholder="你的島名（必填）"
        solo
        hideDetails
      ></v-text-field>
    </div>
    <v-btn height="56px" color="error" @click="submit">繼續</v-btn>
  </div>
</template>
<script>
export default {
  methods: {
    submit() {
      this.$router.push({ path: "rooms" });
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
#loginPage {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}
.ready-font {
  text-align: center;
  font-size: 36px;
  color: #109980;
  text-shadow: -2px 0 #ffffff, 0 2px #ffffff, 2px 0 #ffffff, 0 -2px #ffffff;
  font-weight: bold;
}
::placeholder {
  color: #58bca9 !important;
  opacity: 1; /* Firefox */
}
</style>
