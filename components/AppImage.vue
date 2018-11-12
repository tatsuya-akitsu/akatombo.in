<template>
  <div class="ordinal-card">
    <img 
      :src="worksitem.photo" 
      alt="" >
  </div>
</template>

<script>
export default {
  props: {
    worksitem: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
.ordinal-card {
  width: 33.33%;

  @include mobile-window {
    width: 50%;
  }

  img {
    display: block;
    width: 100%;
  }
}
</style>
