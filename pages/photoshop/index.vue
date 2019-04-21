<template>
  <div>
    <section class="section works">
      <div class="wrapper">
        <h2 class="c-ttl--h2">Graphic Design</h2>
        <div class="inner">
          <app-card
            v-for="(work, i) in myWorks"
            :key="i"
            :worksitem="work" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppCard from '~/components/AppCard.vue'
import { T as G } from '../../store/global/types'
import { mapGetters } from 'vuex'

export default {
  name: 'GraphicDesign',
  components: {
    AppCard
  },
  head() {
    return {
      title: 'Graphic Design'
    }
  },
  computed: {
    ...mapGetters('global', {
      myWorks: 'getWorksData'
    })
  },
  watch: {
    $route() {
      this.$store.dispatch(`global/${G.SET_ROUTES}`, 'Photoshop')
    }
  },
  created() {
    this.$store.dispatch(`global/${G.SET_ROUTES}`, 'Photoshop')
    this.$store.dispatch(`global/${G.AJAX_GET_WORKS_DATA}`, 'Photoshop')
  }
}
</script>

<style lang="scss" scoped>
section.works {
  background-color: #f4f7f6;

  .inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
