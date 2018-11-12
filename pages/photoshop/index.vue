<template>
  <div>
    <section class="section works">
      <div class="wrapper">
        <h2 class="c-ttl--h2">Graphic Design</h2>
        <div class="inner">
          <app-card 
            v-for="(work, i) in data" 
            :key="i" 
            :worksitem="work" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppCard from '~/components/AppCard.vue'
import firebase from '@/plugins/firebase.js'

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
  data: () => {
    return {
      data: []
    }
  },
  created() {
    this.$store.commit('routing', 'Photoshop')
    let work = []
    firebase
      .firestore()
      .collection('Photoshop')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          work.push(Object.assign({ key: doc.id }, doc.data()))
          this.data = work
        })
      })
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
