<template>
  <div class="p-app_icon">
    <router-link to="/">
      <img src="@/static/images/icon_logo.svg" alt="" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.p-app_icon {
  width: 37.5px;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  img {
    width: 100%;
  }
}
</style>
