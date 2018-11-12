<template>
  <header 
    class="header">
    <div 
      v-if="!$store.state.isLoggined && $store.state.route === 'top'" 
      class="header__inner">
      <nav>
        <ul>
          <li><a @click="show = !show">PROJECT</a></li>
          <li><a @click="$router.push('/about')">ABOUT</a></li>
        </ul>
      </nav>
      <transition name="fade">
        <app-mega-menu v-if="show" />
      </transition>
    </div>
    <div 
      v-else-if="$store.state.isLoggined" 
      class="header__inner header__inner--loggined">
      <a 
        class="logo" 
        @click="$router.push('/')">
        <img 
          src="/img/logo--black.svg" 
          alt="">
      </a>
      <nav>
        <ul>
          <li><a @click="dashboard">DASHBOARD</a></li>
          <li><a @click="logout">LOGOUT</a></li>
        </ul>
      </nav>
    </div>
    <div 
      v-else-if="$store.state.route === 'illustrator' || $store.state.route === 'Photoshop' || $store.state.route === 'lightroom' || $store.state.route === 'web' || $store.state.route === 'client' || $store.state.route === 'about'" 
      class="header__inner header__inner--loggined">
      <a 
        class="logo" 
        @click="$router.push('/')">
        <img 
          src="/img/logo--black.svg" 
          alt="">
      </a>
      <nav>
        <ul>
          <li><a @click="show = !show">PROJECT</a></li>
          <li><a href="#">ABOUT</a></li>
        </ul>
      </nav>
      <transition name="fade">
        <app-mega-menu v-if="show" />
      </transition>
    </div>
  </header>
</template>

<script>
import AppMegaMenu from '~/components/MegaMenu'
import firebase from '@/plugins/firebase.js'

export default {
  components: { AppMegaMenu },
  data: () => {
    return {
      show: false
    }
  },
  updated() {
    if (this.$store.state.isLoggined === true) {
      this.name = firebase.auth().currentUser.displayName
      this.photoUrl = firebase.auth().currentUser.photoURL
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit('logout')
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    dashboard() {
      this.$router.push(`/dashboard/${firebase.auth().currentUser.uid}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.header__inner {
  margin: 0 auto;
  padding: 0 5rem;
  text-align: right;
  width: 100%;
  max-width: $max-width;

  @include mobile-window {
    padding: 0 1.5rem;
    max-width: 100%;
  }
}

.header__inner--loggined {
  position: relative;

  .logo {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 1rem;
    left: 5rem;
    width: 5.4rem;

    @include mobile-window {
      left: 1.5rem;
      width: 4.5rem;
    }
  }

  img {
    display: block;
    width: 100%;
  }
}

nav {
  display: inline-block;
  padding: 1rem 0;
}

ul {
  list-style-type: none;
}

li {
  display: inline-block;
  vertical-align: middle;
  padding: 0 2rem;

  &:nth-of-type(1) {
    border-right: 1px solid #d8d8d8;
  }
}

li > a {
  cursor: pointer;
  display: block;
  padding: 0.5rem 0;
  font-family: $asap;
  font-size: 1.4rem;
  font-weight: normal;
  color: #ccc;
  transition: $easeInOutQuart;

  &:hover {
    color: $color-primary;
    transform: $easeInOutQuart;
  }
}
</style>
