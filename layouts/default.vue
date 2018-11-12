<template>
  <div id="app">
    <app-header v-if="$store.state.isLoading === false" />
    <transition name="fade">
      <nuxt v-if="$store.state.isLoading === false" />
    </transition>
    <app-footer v-if="$store.state.isLoading === false" />
  </div>
</template>

<script>
import AppHeader from '~/components/Header'
import AppFooter from '~/components/Footer'

export default {
  components: { AppHeader, AppFooter },
  beforeUpdate() {
    if (this.$store.state.isLoading === true) {
      setTimeout(() => {
        this.$store.commit('outLoading')
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
html {
  display: block;
  font-size: 62.5%;
}

body {
  background: $color-white;
  color: $color-black;
  font-family: $font-init;
  font-size: 1.6rem;
  height: 100%;
  line-height: 1;
  margin: 0 auto;
  overflow-scrolling: touch;
  padding: 0;
  width: 100%;

  @include mobile-window {
    overflow-x: hidden;
  }
}
</style>
