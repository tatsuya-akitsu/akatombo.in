<template>
  <div>
    <section
      id="complete"
      class="section complete">
      <div class="wrapper">
        <h2>Complete</h2>
        <figure>
          <img
            src="/img/logo--black.svg"
            alt="">
        </figure>
        <div class="inner">
          <p>投稿が完了しました</p>
          <button
            type="submit"
            class="c-button c-button--primary"
            @click="dashboard">POST</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { T as G } from '../../../store/global/types'

export default {
  name: 'Complete',
  head() {
    return {
      title: '投稿完了'
    }
  },
  computed: {
    ...mapGetters('global', {
      myUserInfo: 'getUserInfo'
    })
  },
  watch: {
    $route() {
      this.$store.dispatch(`global/${G.SET_ROUTES}`, 'dashboard')
    }
  },
  created() {
    this.$store.dispatch(`global/${G.SET_ROUTES}`, 'dashboard')
  },
  mounted() {
    const section = document.querySelector('.complete')
    let wh = window.outerHeight
    const footer = document.getElementById('footer')
    section.style.height = `${wh - footer.clientHeight - 100}px`
  },
  methods: {
    dashboard() {
      this.$router.push(`/dashboard/${this.myUserInfo.uid}`)
    }
  }
}
</script>

<style lang="scss" scoped>
section.complete {
  width: 100%;
  background-color: $color-white;

  h2 {
    padding-bottom: 3rem;
    font-family: $asap;
    font-size: 1.4rem;
    text-align: center;
    color: $color-primary;
    line-height: 1;
    letter-spacing: 0.15rem;
  }

  figure {
    margin: 0 auto;
    width: 10rem;
  }

  img {
    display: block;
    width: 100%;
  }

  .inner {
    text-align: center;
  }

  p {
    margin: 0 0 3rem;
    font-size: 1.4rem;
  }
}

.wrapper {
  max-width: 640px;
  min-width: 640px;
}
</style>
