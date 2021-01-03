<template>
  <div id="loginPage">
    <div class="ready-font mb-6">準備開始吧！</div>
    <div class="mb-10">
      <v-text-field
        placeholder="你的角色（必填)"
        solo
        hideDetails
        class="mb-4"
        v-model="name"
      ></v-text-field>
      <v-text-field
        placeholder="你的島名（必填）"
        solo
        hideDetails
        v-model="island"
      ></v-text-field>
    </div>
    <v-btn height="56px" color="#A7A7A7" @click="submit" class="white--text">繼續</v-btn>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isDialog: false,
      name: null,
      island: null
    }
  },
  methods: {
    submit() {
      this.editUser();
      this.isDialog=false;
      this.$router.push({ path: "rooms" });
    },
    editUser() {
      this.$store.dispatch('verify', {
        name: this.name,
        island: this.island
      })
    }
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
