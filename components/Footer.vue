<template>
  <footer 
    v-if="$store.state.route === 'top' || $store.state.route === 'illustrator' || $store.state.route === 'Photoshop' || $store.state.route === 'lightroom' || $store.state.route === 'web' || $store.state.route === 'client' || $store.state.route === 'about'" 
    id="footer"
    class="footer">
    <div class="footer__global-nav">
      <div class="global-nav__inner">
        <div class="global-nav__box">
          <p class="title">CONTENTS</p>
          <ul>
            <li><a @click="$router.push('/about')">ABOUT<span>自己紹介</span></a></li>
            <li><a 
              href="https://note.mu/tombo_code" 
              target="_blank">note<span>ノート</span></a></li>
          </ul>
        </div>
        <div class="global-nav__box">
          <p class="title">WORKS</p>
          <ul>
            <li><a @click="$router.push('/web')">WEB WORKS<span>ウェブ制作</span></a></li>
            <li><a @click="$router.push('/illustrator')">ILLUSTRATION<span>イラスト制作</span></a></li>
            <li><a @click="$router.push('/photoshop')">GRAPHIC DESIGN<span>グラフィックデザイン</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__inner">
      <ul>
        <li><a href="https://www.facebook.com/akitsu.tatsuya"><img 
          src="/img/icons/facebook-logo.svg" 
          alt="" ></a></li>
        <li><a href="https://twitter.com/Rote_libelle"><img 
          src="/img/icons/twitter-logo-on-black-background.svg" 
          alt="" ></a></li>
        <li><a href="https://www.instagram.com/sho_at/"><img 
          src="/img/icons/instagram.svg" 
          alt="" ></a></li>
        <li><a href="https://github.com/tatsuya-akitsu"><img 
          src="/img/icons/github-sign.svg" 
          alt="" ></a></li>
      </ul>
      <figure class="footer__logo">
        <img 
          src="/img/logo.svg" 
          alt="" >
      </figure>
      <p class="copyright">&copy;2018 a° </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $color-secondary;
}

.footer__global-nav {
  padding: 5rem 0;
  background-color: $color-white;

  @include mobile-window {
    padding: 3rem 0;
  }
}

.global-nav__inner {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 3rem;
  max-width: 980px;
  width: 100%;

  @include mobile-window {
    display: block;
    padding: 0 1.5rem;
    max-width: 100%;
  }
}

.global-nav__box {
  margin: 0 4rem 0 0;
  flex: 1;

  @include mobile-window {
    margin: 0;
    flex: inherit;
    width: 100%;
  }

  &:nth-last-of-type(1) {
    margin: 0 0 0 4rem;

    @include mobile-window {
      margin: 3rem 0 0;
    }
  }

  .title {
    position: relative;
    font-family: $asap;
    font-size: 1.4rem;
    color: $color-black;
  }

  .title::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    width: calc(100% - 8rem);
    height: 1px;
    border-bottom: 1px dotted $color-black;
  }

  ul {
    margin: 2rem 0 0;
    width: 100%;
  }

  li {
    display: block;
    margin: 1.5rem 0 0;
    text-align: left;
  }
  li:nth-of-type(1) {
    margin: 0;
  }
  li > a {
    cursor: pointer;
    font-family: $asap;
    font-size: 1.2rem;
    color: $color-black;
    font-weight: normal;
    width: 100%;
  }

  span {
    display: inline-block;
    vertical-align: middle;
    padding: 0 0 0 3rem;
    font-family: $font-init;
    font-size: 1rem;
    color: $color-black;
  }
}

.footer__inner {
  margin: 0 auto;
  padding: 5rem 2rem;
  max-width: 780px;

  @include mobile-window {
    padding: 3rem 1.5rem;
    max-width: 100%;
  }
}

ul {
  list-style-type: none;
  text-align: center;

  li {
    display: inline-block;
    vertical-align: middle;
    margin-right: 3rem;
    font-size: 0;

    @include mobile-window {
      margin-right: 2rem;
    }
  }

  li:nth-last-of-type(1) {
    margin-right: 0;
  }

  a {
    display: block;
    width: 3rem;

    @include mobile-window {
      width: 2.4rem;
    }
  }

  img {
    display: block;
    width: 100%;
  }
}

.footer__logo {
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  width: 5rem;

  img {
    display: block;
    width: 100%;
  }
}

.copyright {
  font-family: $asap;
  font-size: 1rem;
  color: $color-white;
  text-align: center;
  line-height: 1;
}
</style>
