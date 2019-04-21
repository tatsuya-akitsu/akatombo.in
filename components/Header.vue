<template>
  <header
    class="header">
    <div class="header__inner">
      <a
        v-if="pageRoute !== 'top' || pageRoute !== 'login'"
        class="logo"
        @click="$router.push('/')">
        <img
          src="/img/logo--black.svg"
          alt="">
      </a>
      <template v-if="pageRoute !== 'login' || pageRoute !== 'dashboard'">
        <nav>
          <ul>
            <li
              class="megamenu_list"
              @click="show = !show"><a>PROJECT</a>
              <transition name="fade">
                <app-mega-menu v-if="show" />
              </transition>
            </li>
            <li><a @click="$router.push('/about')">ABOUT</a></li>
          </ul>
        </nav>
      </template>
      <template v-else-if="pageRoute === 'dashboard'">
        <nav>
          <ul>
            <li><a @click="dashboard">DASHBOARD</a></li>
            <li><a @click="logout">LOGOUT</a></li>
          </ul>
        </nav>
      </template>
    </div>
  </header>
</template>

<script>
import AppMegaMenu from '~/components/MegaMenu'
import { T as G } from '../store/global/types'
import { mapGetters } from 'vuex'

export default {
  components: { AppMegaMenu },
  data: () => {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters('global', {
      myUserInfo: 'getUserInfo',
      pageRoute: 'getPageRoute',
      isLoggedin: 'getUserLoggedin'
    })
  },
  methods: {
    logout() {
      this.$store.dispatch(`global/${G.USER_LOGOUT}`)
      this.$router.push('/')
    },
    dashboard() {
      this.$router.push(`/dashboard/${this.myUserInfo.uid}`)
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
  position: relative;
  margin: 0 auto;
  padding: 0 5rem;
  text-align: right;
  width: 100%;
  max-width: $max-width;

  @include mobile-window {
    padding: 0 1.5rem;
    max-width: 100%;
  }

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
