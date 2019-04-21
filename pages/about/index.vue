<template>
  <div>
    <section
      id="about"
      class="section about">
      <div class="about__header">
        <div class="wrapper">
          <div class="thumbnail">
            <figure><img
              src="/img/profile.jpg"
              alt="" ></figure>
          </div>
          <div class="body">
            <p class="name"><span class="name__en">Tatsuya Akitsu</span><span class="job">Frontend Engineer</span></p>
            <div class="body__inner">
              <p class="birth">August 1, 1993 (age 25)</p>
              <p class="place"><img
                src="/img/icons/place.svg"
                alt="" >Kanagawa, Japan</p>
            </div>
            <p class="summary">
              都内のウェブ制作会社でフロントエンドエンジニアとして活動しています。<br>
              ディレクション、デザイン、コーディング、解析･運用とフロント制作の過程を一気通貫に担当しつつ、<br>
              これからエンジニアを目指す人をサポートできるエンジニアを目指し活動中
            </p>
          </div>
        </div>
      </div>
      <div class="about__body">
        <div class="wrapper">
          <div class="about__body--history">
            <h2>HISTROY</h2>
            <p class="text">
              <a
                href="https://ja.wikipedia.org/wiki/%E6%9D%BE%E5%B1%B1%E3%82%B1%E3%83%B3%E3%82%A4%E3%83%81"
                target="_blank">松山ケンイチ</a>の演技を某作品で見て、俳優を目指すため<a
                  href="https://ha.athuman.com/"
                  target="_blank">総合学園ヒューマンアカデミー</a>へ進学。演技･ダンス･歌などを教わりながら、学外の舞台へ出演し経験値をためるも、演じることへの違和感と、モノづくりへの関心と興味が出てきたことをきっかけに学外への舞台出演を止め2年で<a
                    href="https://ha.athuman.com/"
                    target="_blank">総合学園ヒューマンアカデミー</a>を卒業。<br>
              その後、中学生時代からYahoo!Geocities、モバゲーなどで触れてきたWEBの世界へ興味を持ち、半年間職業訓練学校でHTML5、CSS3、jQuery、WordPress、Illustrator、Photoshopを学び、<a
                href="https://naked.co.jp/"
                target="_blank">NAKED.inc</a>へWEB担当として入社。<br>
              HTML、CSS、jQuery、WordPressを活用し、自社企画のイベントLPやポータルサイトのデザイン制作~プログラム実装、サーバー管理･データ解析と一連の業務を担当。1ヶ月に4~5サイトの制作をおおよそ担当し、更に上へのキャリアパスを思い、転職。<br>
              都内WEB制作会社にてフロントエンドを担当。
            </p>
            <h2>I want to do it</h2>
            <p class="text">
              サイト制作、サービス開発における最新技術は常に吸収していけるようフットワーク軽い活動をしていきたい。<br>
              WEBサイト制作から、WEBサービス開発、フロントエンド周りの技術やエンジニアのキャリアパスに興味あり。<br>
              業界、業種にこだわらず業務改善や業務の助けになるツールを作っていきたい、自分の関わった人たちは笑って仕事していられる環境を常に目指しています。
            </p>
          </div>
          <aside class="about__body__aside">
            <h3>CONTACT & PERSONAL INFO</h3>
            <div class="about__body__aside__inner">
              <dl>
                <dt>Email</dt>
                <dd><a href="mailto:tatsuya.regulus0138@gmail.com">tatsuya.regulus0138@gmail.com</a></dd>
                <dt>Facebook</dt>
                <dd><a
                  href="https://www.facebook.com/akitsu.tatsuya"
                  target="_blank">facebook.com/akitsu.tatsuya</a></dd>
                <dt>twitter</dt>
                <dd><a
                  href="https://twitter.com/Rote_libelle"
                  target="_blank">twitter.com/Rote_libelle</a></dd>
                <dt>instagram</dt>
                <dd><a
                  href="https://www.instagram.com/sho_at/"
                  target="_blank">instagram.com/sho_at</a></dd>
                <dt>Github</dt>
                <dd><a
                  href="https://github.com/tatsuya-akitsu"
                  target="_blank">github.com/tatsuy-akitsu</a></dd>
                <dt>Wantedly</dt>
                <dd><a
                  href="https://www.wantedly.com/users/18000536"
                  target="_blank">wantedly.com</a></dd>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { T as G } from '../../store/global/types'

export default {
  name: 'About',
  head: () => {
    return {
      title: 'About us'
    }
  },
  watch: {
    $route() {
      this.$store.dispatch(`global/${G.SET_ROUTES}`, 'about')
    }
  },
  created() {
    this.$store.dispatch(`global/${G.SET_ROUTES}`, 'about')
  }
}
</script>

<style lang="scss" scoped>
section.about {
  padding: 0;
}

.about__header {
  padding: 5rem 0;
  background-color: $color-secondary;

  @include mobile-window {
    padding: 10rem 0 5rem;
  }
}
.about__header > .wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @include mobile-window {
    display: block;
  }
}

.about__header {
  .thumbnail {
    position: relative;
    width: 15rem;
    height: auto;
    border-radius: 50%;
    overflow: hidden;

    @include mobile-window {
      margin: 0 auto;
      width: 10rem;
    }

    &::before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }
  .thumbnail > figure {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  figure > img {
    width: 100%;
    max-width: 100%;
  }

  .body {
    margin: 0 0 0 3rem;

    @include mobile-window {
      margin: 3rem 0 0;
      widows: 100%;
    }
  }
  .name {
    font-size: 0;
  }
  .name > .name__en {
    display: inline-block;
    vertical-align: bottom;
    font-family: $asap;
    font-size: 2.4rem;
    color: $color-white;
    letter-spacing: 0.25rem;
    line-height: 1;

    @include mobile-window {
      font-size: 2rem;
    }
  }
  .name > .job {
    display: inline-block;
    vertical-align: bottom;
    margin: 0 0 0 3rem;
    font-family: $asap;
    font-size: 1.6rem;
    color: $color-white;
    letter-spacing: 0.05rem;
    line-height: 1;

    @include mobile-window {
      margin: 0 0 0 1.5rem;
      font-size: 1.4rem;
    }
  }

  .body__inner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 2rem 0 0;

    @include mobile-window {
      display: block;
    }
  }
  .birth {
    font-family: $asap;
    font-size: 1.6rem;
    color: $color-white;
    letter-spacing: 0.08rem;
    line-height: 1;

    @include mobile-window {
      font-size: 1.4rem;
    }
  }
  .place {
    margin: 0 0 0 3rem;
    font-family: $asap;
    font-size: 1.6rem;
    color: $color-white;
    letter-spacing: 0.08rem;
    line-height: 1;

    @include mobile-window {
      margin: 1rem 0 0;
      font-size: 1.4rem;
    }
  }
  .place > img {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    width: 1.4rem;

    @include mobile-window {
      width: 1.2rem;
    }
  }

  .summary {
    margin: 3rem 0 0;
    font-family: $font-init;
    font-size: 1.4rem;
    color: $color-white;
    letter-spacing: 0.08rem;
    line-height: 1.8;

    @include mobile-window {
      font-size: 1.2rem;
    }
  }
}

.about__body {
  padding: 12rem 0;
  background-color: #f4f7f6;

  @include mobile-window {
    padding: 8rem 0;
  }
}
.about__body > .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.about__body--history {
  padding: 0 2rem;
  width: 75%;

  @include mobile-window {
    padding: 0;
    width: 100%;
  }

  h2 {
    padding: 5rem 0 0;
    font-family: $asap;
    font-size: 2.6rem;
    color: $color-primary;
    font-weight: bold;
    letter-spacing: 0.05rem;
    line-height: 1;

    @include mobile-window {
      padding: 3rem 0 0;
      font-size: 2.4rem;
    }

    &:nth-of-type(1) {
      padding: 0;
    }
  }

  .text {
    padding: 2rem 0 0;
    font-family: $font-init;
    font-size: 1.3rem;
    color: $color-black;
    letter-spacing: 0.05rem;
    line-height: 1.8;

    @include mobile-window {
      padding: 1rem 0 0;
      font-size: 1.1rem;
    }
  }

  .text > a {
    color: $color-primary;
    font-weight: normal;

    @include mobile-window {
      font-size: 1.1rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}
.about__body__aside {
  padding: 0 1rem;
  width: 25%;

  @include mobile-window {
    padding: 5rem 0 0;
    width: 100%;
  }

  h3 {
    font-family: $asap;
    font-size: 1.4rem;
    color: $color-black;
    letter-spacing: 0.15rem;
    line-height: 1;

    @include mobile-window {
      font-size: 1.6rem;
    }
  }
}
.about__body__aside__inner {
  margin: 5rem 0 0;

  @include mobile-window {
    margin: 3rem 0 0;
  }

  dt {
    margin: 3rem 0 0;
    font-family: $asap;
    font-size: 1.4rem;
    color: $color-black;
    letter-spacing: 0.05rem;
    line-height: 1;

    &:nth-of-type(1) {
      margin: 0;
    }
  }
  dt:nth-of-type(1) {
    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.5rem;
      width: 1.6rem;
      height: 1.6rem;
      background-image: url('/img/icons/email.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    }
  }
  dt:nth-of-type(2) {
    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.5rem;
      width: 1.6rem;
      height: 1.6rem;
      background-image: url('/img/icons/facebook-logo--cream.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    }
  }
  dt:nth-of-type(3) {
    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.5rem;
      width: 1.6rem;
      height: 1.6rem;
      background-image: url('/img/icons/twitter--cream.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    }
  }
  dt:nth-of-type(4) {
    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.5rem;
      width: 1.6rem;
      height: 1.6rem;
      background-image: url('/img/icons/instagram--cream.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    }
  }
  dt:nth-of-type(5) {
    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.5rem;
      width: 1.6rem;
      height: 1.6rem;
      background-image: url('/img/icons/github--cream.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    }
  }
  dt:nth-of-type(6) {
    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.5rem;
      width: 1.6rem;
      height: 1.6rem;
      background-image: url('/img/icons/user.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    }
  }

  dd {
    margin: 0.5rem 0 0;
    padding: 0 0 0 2.5rem;
  }
  dd > a {
    display: block;
    font-family: $asap;
    font-size: 1.2rem;
    font-weight: 700;
    color: $color-primary;
    letter-spacing: 0.05rem;
    line-height: 1;
  }
}
</style>
