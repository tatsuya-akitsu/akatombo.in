<template>
  <div>
    <section class="section works">
      <div class="wrapper">
        <h2 class="c-ttl--h2">Photograph</h2>
        <div class="inner">
          <app-image 
            v-for="(work, i) in data" 
            :key="i" 
            :worksitem="work" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppImage from '~/components/AppImage.vue'
import firebase from '@/plugins/firebase.js'

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
  data: () => {
    return {
      data: []
    }
  },
  created() {
    this.$store.commit('routing', 'lightroom')
    let work = []
    firebase
      .firestore()
      .collection('Lightroom')
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
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
