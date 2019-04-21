<template>
  <div class="other-works">
    <h3 class="c-ttl--h3">OTHER WORKS</h3>
    <div class="other-works__inner">
      <app-card
        v-for="(item, i) in data"
        :key="i"
        :worksitem="item"/>
    </div>
  </div>
</template>

<script>
import AppCard from '~/components/AppCard.vue'

export default {
  components: {
    AppCard
  },
  props: ['data']
}
</script>

<style lang="scss" scoped>
.other-works {
  margin: 15rem 0 0;
}

.other-works__inner {
  margin: 3rem 0 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
