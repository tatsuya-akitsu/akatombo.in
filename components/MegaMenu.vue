<template>
  <div class="mega-menu">
    <div class="mega-menu__inner">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="mega-menu__media">
        <a @click="$router.push(item.href)">
          <div class="thumbnail">
            <img
              :src="item.img"
              alt="" >
          </div>
          <div class="body">
            <p class="title">{{ item.title }}</p>
            <p class="description">{{ item.val }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('global', {
      items: 'getNavItems'
    })
  }
}
</script>

<style lang="scss" scoped>
.mega-menu {
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 2.9rem 2rem;
  background-color: $color-white;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 980px;

  @include mobile-window {
    padding: 3rem 1rem;
  }
}

.mega-menu__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include mobile-window {
    display: block;
  }
}

.mega-menu__media {
  width: 31%;

  @include mobile-window {
    margin: 3rem 0 0;
    width: 100%;
  }

  &:nth-of-type(1) {
    @include mobile-window {
      margin: 0;
    }
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: $easeInOutQuart;
  }

  a:hover {
    transition: $easeInOutQuart;

    .title {
      transition: $easeInOutQuart;
      color: $color-primary;
      text-decoration: underline;
    }

    .description {
      transition: $easeInOutQuart;
      color: $color-black;
    }
  }
}

.thumbnail {
  position: relative;
  width: 14rem;
  height: auto;
  background-color: #f0f0f0;

  @include mobile-window {
    width: 10rem;
  }

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }
}

.body {
  padding-left: 1rem;
  text-align: left;

  @include mobile-window {
    width: calc(100% - 10rem);
  }

  .title {
    font-family: $asap;
    font-size: 1.6rem;
    font-weight: normal;
    color: $color-black;
    letter-spacing: 0.155rem;
    transition: $easeInOutQuart;

    @include mobile-window {
      font-size: 1.4rem;
    }
  }

  .description {
    padding-top: 1.3rem;
    font-family: $font-init;
    font-size: 1.2rem;
    font-weight: normal;
    color: #ccc;
    letter-spacing: 0.15rem;
    line-height: 1.8;
    transition: $easeInOutQuart;

    @include mobile-window {
      font-size: 1rem;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
