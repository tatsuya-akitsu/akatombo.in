<template>
  <div class="l-resume">
    <intro></intro>
    <history></history>
    <things></things>
    <personal></personal>
  </div>
</template>

<script>
export default {
  components: {
    Intro: () => import("@/components/organisms/resume/Intro.vue"),
    History: () => import("@/components/organisms/resume/History.vue"),
    Things: () => import("@/components/organisms/resume/Things.vue"),
    Personal: () => import("@/components/organisms/resume/Personal.vue")
  }
};
</script>
