<template>
  <div class="l-home">
    <intro></intro>
    <about></about>
    <develop></develop>
    <illustration></illustration>
    <graphic></graphic>
    <photograph></photograph>
  </div>
</template>

<script>
export default {
  components: {
    Intro: () => import("@/components/organisms/home/Intro.vue"),
    About: () => import("@/components/organisms/home/About.vue"),
    Develop: () => import("@/components/organisms/home/Development.vue"),
    Illustration: () => import("@/components/organisms/home/Illustration.vue"),
    Graphic: () => import("@/components/organisms/home/Graphic.vue"),
    Photograph: () => import("@/components/organisms/home/Photograph.vue")
  }
};
</script>
