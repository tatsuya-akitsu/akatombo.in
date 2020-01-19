<template>
  <nuxt-link :to="target" class="p-app_link_text">
    <span>{{ label }}</span>
    <img src="@/static/images/icon/icon_arrow.svg" alt="" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    target: { type: String, required: true },
    label: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
.p-app_link_text {
  display: inline-block;
  padding-bottom: 2px;
  font-size: 0;
  border-bottom: 3px solid $base-text-color;
}

span {
  display: inline-block;
  vertical-align: middle;
  padding-right: 32px;
  font-size: 16px;
  color: $base-text-color;
  font-weight: 500;
}

img {
  display: inline-block;
  vertical-align: middle;
}
</style>
