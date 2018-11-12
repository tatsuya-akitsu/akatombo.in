<template>
  <div 
    class="mega-menu" 
    @mouseover="isOpenMegaMenu">
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
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          img: '/img/illustrator/logo__img__2016.svg',
          title: 'Illustration Design',
          val: 'Illustratorを使用し、\nポストカードやロゴ、DMなどを制作',
          href: '/illustrator'
        },
        {
          img: '/img/photoshop/graphic__img__01.jpg',
          title: 'Graphic Design',
          val: 'Photoshopを使用し、DMや\n合成画像を作成',
          href: '/photoshop'
        },
        {
          img: '/img/lightroom/photo__01.jpg',
          title: 'Photograph',
          val: '趣味で撮影した写真をLightroomで編集',
          href: '/lightroom'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mega-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.9rem 2rem;
  background-color: $color-white;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.05);

  @include mobile-window {
    display: block;
    padding: 3rem 1rem;
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
