<template>
  <v-dialog v-model="isDialog" :fullscreen= $vuetify.breakpoint.xs class="text-center" width="50%" persistent>
    <v-card >
      <v-card-title class="justify-center primary--text">
        <h2 class="mx-auto">{{title}}</h2>
        <v-icon @click="$emit('click')" class="primary--text">mdi-close</v-icon>
      </v-card-title>
      <v-card-text class="mt-4">
        <div class="primary--text">
          <p class="ma-0">{{time}}</p>
          <h2>來自系統的回覆:</h2>
          <p class="character--text">首先誠摯的感謝指導教授孔子博士及孟子博士，兩位老師悉心的教導使我得以一窺教育行動研究領域的深奧，不時的討論並指點我正確的方向，使我在這些年中獲益匪淺。老師對學問的嚴謹更是我輩學習的典範。 本論文的完成另外亦得感謝玉里國小的阿蘭老師大力協助，及玉里 國中阿豪老師的支援、玉里高中阿芳老師在硬體及軟體上支援，以及7-11玉明門市店長和玉里夜市阿慧滷味對我研究上的指教評點。因為有你們的體諒及幫忙，使得本論文能夠更完整而嚴謹。 兩年裏的日子，實驗室裏共同的生活點滴，學術上的討論、言不及義的閒扯、讓人又愛又怕的宵夜、趕作業的革命情感、因為睡太晚而遮遮掩掩閃進實驗室........，感謝眾位學長姐、同學、學弟妹的共同砥礪(墮落?)，你/妳們的陪伴讓兩年的研究生活變得絢麗多彩。</p>
        </div>
        <div class="character--text">
          <h2 class="primary--text mb-4">您的回報</h2>
          <p class="ma-0">{{time}}</p>
          <p>
            首先誠摯的感謝指導教授孔子博士及孟子博士，兩位老師悉心的教導使我得以一窺教育行動研究領域的深奧，不時的討論並指點我正確的方向，使我在這些年中獲益匪淺。老師對學問的嚴謹更是我輩學習的典範。
          </p>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props:['title','time','isDialog']
}
</script>
<style lang="scss" scoped>

</style>