<template>
  <div>
    <section
      id="header"
      class="header">
      <div class="section-header__inner">
        <div class="logo">
          <div class="logo__dragonfly">
            <a
              href="https://codepen.io/tatsuya-akitsu/pen/eQdRgx"
              target="_blank">
              <span class="eye"/>
              <span class="eye"/>
              <span class="body"/>
              <span class="wing--1"/>
              <span class="wing--2"/>
              <span class="wing--3"/>
              <span class="wing--4"/>
              <span class="tail"/>
            </a>
          </div>
          <span class="line"/>
          <div class="logo__name">
            <div class="logo__name__inner">
              <div class="logo__name--left">
                <span class="box box--vertical" />
                <span class="box box--horizontal" />
              </div>
              <div class="logo__name--center">
                <p>a</p>
              </div>
              <div class="logo__name--right">
                <span class="box box--vertical" />
                <span class="box box--horizontal" />
              </div>
            </div>
          </div>
        </div>
        <div class="header__feature">
          <h2>DIRECTION + DESIGN + CODING</h2>
          <p>
            site design / graphic design / logo design / coding<br >
            HTML5 / CSS3 / jQuery / JavaScript / WordPress / <br >
            Domain / Server Setting / maintenance
          </p>
        </div>
      </div>
    </section>
    <section class="section about">
      <div class="wrapper">
        <h2 class="c-ttl--h2">ABOUT US</h2>
        <div class="inner">
          <div class="thumbnail">
            <figure><img
              src="/img/profile.jpg"
              alt="" ></figure>
          </div>
          <div class="body">
            <p class="name">Tatsuya Akitsu</p>
            <p class="birth">1993.08.01</p>
            <p class="summary">
              松山ケンイチの演技を某作品で見て、俳優を目指すため総合学園ヒューマンアカデミーへ進学。演技･ダンス･歌などを教わりながら、学外の舞台へ出演し経験値をためるも、演じることへの違和感と、モノづくりへの関心と興味が出てきたことをきっかけに学外への舞台出演を止め2年で専門学校を卒業。<br>
              その後、中学生時代からYahoo!Geocities、モバゲーなどで触れてきたWEBの世界へ興味を持ち、半年間職業訓練学校でHTML5、CSS3、jQuery、WordPress、Illustrator、Photoshopを学び、NAKED.incへWEB担当として入社。<br>
              HTML、CSS、jQuery、WordPressを活用し、自社企画のイベントLPやポータルサイトのデザイン制作~プログラム実装、サーバー管理･データ解析と一連の業務を担当。1ヶ月に4~5サイトの制作をおおよそ担当し、更に上へのキャリアパスを思い、転職。<br>
              都内WEB制作会社にてフロントエンドを担当。<br>
              WEBサイト制作から、WEBサービス開発、フロントエンド周りの技術やエンジニアのキャリアパスに興味あり。<br>
              業界、業種にこだわらず業務改善や業務の助けになるツールを作っていきたい、自分の関わった人たちは笑って仕事していられる環境を常に目指しています。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section works">
      <div class="wrapper">
        <h2 class="c-ttl--h2">WORKS</h2>
        <div class="inner">
          <app-card
            v-for="(work, i) in myData.default"
            :key="i"
            :worksitem="work" />
          <app-card
            v-for="(work, i) in myData.data"
            :key="i"
            :worksitem="work" />
        </div>
        <button
          class="c-button c-button--secondary"
          @click="$router.push('/web')">MORE WORKS</button>
      </div>
    </section>
  </div>
</template>

<script>
import AppCard from '~/components/AppCard.vue'
import { T as G } from '../store/global/types'
import { mapGetters } from 'vuex'

export default {
  name: 'Top',
  components: {
    AppCard
  },
  head() {
    return {
      title: 'Tatsuya Akitsu'
    }
  },
  computed: {
    ...mapGetters('global', {
      myData: 'getTopWorks'
    })
  },
  watch: {
    $route() {
      this.$store.dispatch(`global/${G.SET_ROUTES}`, 'top')
    }
  },
  mounted() {
    const header = document.getElementById('header')
    let wh = window.outerHeight
    header.style.height = `${wh / 1.5}px`

    const line = document.querySelector('.line')
    let logo = document.querySelector('.logo__dragonfly')
    line.style.height = `${logo.offsetHeight}px`
  },
  created() {
    this.$store.dispatch(`global/${G.SET_ROUTES}`, 'top')
    this.$store.dispatch(`global/${G.AJAX_GET_TOP_WEB_WORKS}`)
    const line = document.getElementsByClassName('line')
    setTimeout(() => {
      line[0].classList.add('is-constraction')
    }, 200)
  }
}
</script>

<style lang="scss" scoped>
section.header {
  position: relative;
}
.section-header__inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 980px;

  @include mobile-window {
    width: 90%;
    max-width: inherit;
  }
}

.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
  width: 37.5rem;
  max-width: 375px;

  @include mobile-window {
    width: 28rem;
    max-width: 280px;
  }

  .line {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0, -50%);
    width: 50%;
    height: 100%;
    background-color: $color-black;
    transition: $easeInOutQuart;
    z-index: 100;

    &.is-constraction {
      width: 0.5rem;
      transition: $easeInOutQuart;
    }
  }
}
.logo__dragonfly {
  display: inline-block;
  position: relative;
  text-align: center;
  margin-right: 3rem;
  width: 15rem;
  max-width: 15rem;

  @include mobile-window {
    margin-right: 1.5rem;
    width: 48%;
    max-width: inherit;
  }

  a {
    display: block;
    width: 100%;

    @include mobile-window {
      font-size: 0.6rem;
    }
  }

  .body {
    display: block;
    margin: 0 auto;
    width: 1.25rem;
    height: 2.7rem;
    border-radius: 53% 47% 48% 52% / 46% 47% 53% 54%;
    background-color: $color-black;

    @include mobile-window {
      width: 0.9rem;
      height: 2.3rem;
    }
  }

  .eye {
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: $color-primary;

    @include mobile-window {
      width: 0.5rem;
      height: 0.5rem;
    }
  }

  .wing--1 {
    position: absolute;
    top: 1.4rem;
    right: 0.7rem;
    width: 0;
    height: 0;
    border-top: solid 7px transparent;
    border-right: solid 62px #3e3e3e;
    border-bottom: solid 7px transparent;
    transform: rotate(-10deg);

    @include mobile-window {
      top: 1.2rem;
      right: 0.3rem;
      border-top: solid 4px transparent;
      border-right: solid 53px #3e3e3e;
      border-bottom: solid 4px transparent;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -0.7rem;
      right: -7rem;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      background-color: $color-black;

      @include mobile-window {
        top: -0.4rem;
        right: -5.6rem;
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }

  .wing--2 {
    position: absolute;
    top: 2.7rem;
    right: 0.7rem;
    width: 0;
    height: 0;
    border-top: solid 7px transparent;
    border-right: solid 62px #3e3e3e;
    border-bottom: solid 7px transparent;
    transform: rotate(10deg);

    @include mobile-window {
      top: 2.2rem;
      right: 0.3rem;
      border-top: solid 4px transparent;
      border-right: solid 53px #3e3e3e;
      border-bottom: solid 4px transparent;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -0.7rem;
      right: -7rem;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      background-color: $color-black;

      @include mobile-window {
        top: -0.4rem;
        right: -5.6rem;
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }

  .wing--3 {
    position: absolute;
    top: 1.4rem;
    left: 0.7rem;
    width: 0;
    height: 0;
    border-top: solid 7px transparent;
    border-left: solid 62px #3e3e3e;
    border-bottom: solid 7px transparent;
    transform: rotate(10deg);

    @include mobile-window {
      top: 1.2rem;
      left: 0.3rem;
      border-top: solid 4px transparent;
      border-left: solid 53px #3e3e3e;
      border-bottom: solid 4px transparent;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -0.7rem;
      left: -7rem;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      background-color: $color-black;

      @include mobile-window {
        top: -0.4rem;
        left: -5.6rem;
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }

  .wing--4 {
    position: absolute;
    top: 2.7rem;
    left: 0.7rem;
    width: 0;
    height: 0;
    border-top: solid 7px transparent;
    border-left: solid 62px #3e3e3e;
    border-bottom: solid 7px transparent;
    transform: rotate(-10deg);

    @include mobile-window {
      top: 2.2rem;
      left: 0.3rem;
      border-top: solid 4px transparent;
      border-left: solid 53px #3e3e3e;
      border-bottom: solid 4px transparent;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -0.7rem;
      left: -7rem;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      background-color: $color-black;

      @include mobile-window {
        top: -0.4rem;
        left: -5.6rem;
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }

  .tail {
    display: block;
    margin: 0 auto;
    margin-top: -1rem;
    width: 0.6rem;
    height: 4.8rem;
    background-color: $color-black;
    border-radius: 53% 47% 48% 52% / 46% 47% 53% 54%;

    @include mobile-window {
      width: 0.45rem;
      height: 4.3rem;
    }
  }
}

.logo__name {
  display: inline-block;
  text-align: center;
  margin-left: 3rem;
  width: 17rem;
  max-width: 17rem;

  @include mobile-window {
    margin-left: 1.5rem;
    width: 48%;
    max-width: inherit;
  }
}

.logo__name__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo__name--left {
  position: relative;
  width: 3.9rem;
  height: 7.5rem;

  @include mobile-window {
    height: 5.5rem;
  }

  .box {
    position: absolute;
    top: 0;
    left: 0;
    background-color: $color-black;
  }

  .box--vertical {
    width: 1.7rem;
    height: 100%;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;

    @include mobile-window {
      width: 1.2rem;
    }
  }

  .box--horizontal {
    width: 3.7rem;
    height: 1.7rem;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;

    @include mobile-window {
      width: 3rem;
      height: 1.2rem;
    }
  }
}

.logo__name--center {
  position: relative;
  width: 4.6rem;

  p {
    font-family: $asap;
    font-size: 7rem;
    font-weight: bold;
    color: $color-black;
    text-align: center;

    @include mobile-window {
      font-size: 4.5rem;
    }
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 1rem;
    right: 0;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: $color-white;
    border: 3px solid $color-black;

    @include mobile-window {
      top: 0.5rem;
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}

.logo__name--right {
  position: relative;
  width: 3.9rem;
  height: 7.5rem;

  @include mobile-window {
    height: 5.5rem;
  }

  .box {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: $color-black;
  }

  .box--vertical {
    width: 1.7rem;
    height: 100%;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;

    @include mobile-window {
      width: 1.2rem;
    }
  }

  .box--horizontal {
    width: 3.7rem;
    height: 1.7rem;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;

    @include mobile-window {
      width: 3rem;
      height: 1.2rem;
    }
  }
}

.header__feature {
  margin: 6rem 0 0;

  h2 {
    font-family: $asap;
    font-weight: 700;
    font-size: 2.2rem;
    color: $color-black;
    letter-spacing: 1.127rem;
    text-align: center;
    line-height: 1;

    @include mobile-window {
      font-size: 1.4rem;
      letter-spacing: 0.35rem;
    }
  }

  p {
    padding: 2rem 0 0;
    font-family: $asap;
    font-size: 1rem;
    font-weight: normal;
    color: #ccc;
    text-align: center;
    line-height: 2.4;
    letter-spacing: 0.296rem;

    @include mobile-window {
      font-size: 0.7rem;
      letter-spacing: 0.15rem;
    }
  }
}

section.about {
  background-color: $color-secondary;

  .c-ttl--h2 {
    color: $color-white;
  }

  .inner {
    display: flex;
    justify-content: space-between;

    @include mobile-window {
      display: block;
    }
  }
}

.thumbnail {
  position: relative;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  overflow: hidden;

  @include mobile-window {
    margin: 0 auto;
  }

  figure {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.body {
  margin: 0 0 0 2rem;
  width: calc(100% - 14rem);

  @include mobile-window {
    margin: 3rem 0 0;
    width: 100%;
  }

  .name {
    font-family: $asap;
    font-weight: normal;
    font-size: 1.8rem;
    letter-spacing: 0.25rem;
    color: $color-white;
    line-height: 1;

    @include mobile-window {
      font-size: 1.6rem;
    }
  }

  .birth {
    padding: 1rem 0 0;
    font-family: $asap;
    font-size: 1.2rem;
    line-height: 1;
    color: $color-white;

    @include mobile-window {
      font-size: 1rem;
    }
  }

  .summary {
    padding-top: 2rem;
    font-family: $font-init;
    font-size: 1.4rem;
    color: $color-white;
    letter-spacing: 0.03rem;
    line-height: 1.8;

    @include mobile-window {
      font-size: 1.2rem;
    }
  }
}

section.works {
  background-color: #f4f7f6;

  .wrapper {
    text-align: center;
  }

  .inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: left;
  }

  .c-button {
    margin-top: 3rem;
  }
}
</style>
