<template>
  <div id="app">
    <app-header v-if="!isLoading" />
    <transition name="fade">
      <nuxt v-if="!isLoading" />
    </transition>
    <app-footer v-if="!isLoading" />
  </div>
</template>

<script>
import AppHeader from '~/components/Header'
import AppFooter from '~/components/Footer'
import { mapGetters } from 'vuex'
import { T as G } from '../store/global/types'

export default {
  components: { AppHeader, AppFooter },
  computed: {
    ...mapGetters('global', {
      isLoading: 'getInitLoading'
    })
  },
  mounted() {
    this.$store.dispatch(`global/${G.CHANGE_LOADING}`, false)
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
