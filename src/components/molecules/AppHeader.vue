<template>
  <header class="l-header">
    <app-icon></app-icon>
    <app-dragon-fly></app-dragon-fly>
  </header>
</template>

<script>
export default {
  components: {
    AppIcon: () => import("@/components/atoms/AppIcon.vue"),
    AppDragonFly: () => import("@/components/atoms/AppDragonFly.vue")
  }
};
</script>

<style lang="scss" scoped>
.l-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 12px 24px;
  width: 100%;
  z-index: 1000;
}
</style>
