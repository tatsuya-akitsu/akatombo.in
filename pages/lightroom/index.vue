<template>
  <div>
    <section class="section works">
      <div class="wrapper">
        <h2 class="c-ttl--h2">Photograph</h2>
        <div class="inner">
          <app-image
            v-for="(work, i) in myWorks"
            :key="i"
            :worksitem="work" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppImage from '~/components/AppImage.vue'
import { mapGetters } from 'vuex'
import { T as G } from '../../store/global/types'

export default {
  name: 'Photograph',
  components: {
    AppImage
  },
  head() {
    return {
      title: 'Photograph'
    }
  },
  computed: {
    ...mapGetters('global', {
      myWorks: 'getWorksData'
    })
  },
  created() {
    this.$store.dispatch(`global/${G.SET_ROUTES}`, 'lightroom')
    this.$store.dispatch(`global/${G.AJAX_GET_WORKS_DATA}`, 'Lightroom')
  }
}
</script>

<style lang="scss" scoped>
section.works {
  background-color: #f4f7f6;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
