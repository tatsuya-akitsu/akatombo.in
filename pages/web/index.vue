<template>
  <div>
    <section class="section works">
      <div class="wrapper">
        <h2 class="c-ttl--h2">WEB</h2>
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
import { mapGetters } from 'vuex'
import { T as G } from '../../store/global/types'

export default {
  name: 'Web',
  components: {
    AppCard
  },
  head() {
    return {
      title: 'WEB'
    }
  },
  computed: {
    ...mapGetters('global', {
      myWorks: 'getWorksData'
    })
  },
  created() {
    this.$store.dispatch(`global/${G.SET_ROUTES}`, 'web')
    this.$store.dispatch(`global/${G.AJAX_GET_WORKS_DATA}`, 'web')
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
