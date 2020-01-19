<template>
  <div ref="mainThumb" class="l-main_thumb">
    <div class="p-main_logo">
      <img src="@/static/images/home/thumbnail.svg" alt="" />
      <img src="@/static/images/home/name.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.mainThumb.style.height = `${window.innerHeight}px`;
  }
};
</script>

<style lang="scss" scoped>
.l-main_thumb {
  position: relative;
  width: 100%;
  height: 100vh;
}

.p-main_logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 320px;

  img {
    display: block;
  }

  img:nth-of-type(1) {
    margin: 0 auto;
    margin-bottom: 32px;
    width: 240px;
  }
}
</style>
