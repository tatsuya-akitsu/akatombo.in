<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import("@/components/molecules/AppHeader.vue"),
    AppFooter: () => import("@/components/molecules/AppFooter.vue")
  }
};
</script>

<style lang="scss">
@import "../node_modules/ress/ress.css";
@import "./assets/sass/style.scss";
</style>
