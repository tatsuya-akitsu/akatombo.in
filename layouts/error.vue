<template>
  <section 
    id="error" 
    class="section error">
    <div class="wrapper">
      <h2 class="error-title">お探しのページは見つかりませんでした</h2>
      <img 
        src="/img/404.svg" 
        alt="" >
      <p>
        お探しのページは
      </p>
      <ul>
        <li>既に削除されている・公開期限が終わっている</li>
        <li>アクセスしたアドレスが異なっている</li>
      </ul>
      <p>などの理由で見つかりませんでした。<br >もう一度トップページよりやり直してください</p>
      <button 
        class="c-button c-button--primary" 
        @click="$router.push('/')">サービストップへ</button>
    </div>
  </section>
</template>

<script>
export default {
  name: '404',
  head: () => {
    return {
      title: '404'
    }
  },
  created() {
    this.$store.commit('routing', '404')
  },
  mounted() {
    const section = document.getElementById('error')
    const wh = window.innerHeight
    section.style.height = `${wh}px`
  }
}
</script>

<style lang="scss" scoped>
.error-title {
  font-family: $font-init;
  font-size: 1.8rem;
  color: $color-black;
  text-align: center;
  letter-spacing: 0.15rem;
  line-height: 1;

  @include mobile-window {
    font-size: 1.6rem;
  }
}

.wrapper {
  text-align: center;
}

img {
  display: block;
  margin: 0 auto;
  margin-top: 5rem;
  width: 54rem;

  @include mobile-window {
    width: 25rem;
  }
}

p {
  padding: 2rem 0 0;
  font-family: $font-init;
  font-size: 1.4rem;
  color: $color-black;
  text-align: center;
  letter-spacing: 0.05rem;
  line-height: 1.8;
}

ul {
  list-style-type: none;
}

li {
  padding: 1rem 0 0;
  font-family: $font-init;
  font-size: 1.4rem;
  color: $color-black;
  letter-spacing: 0.05rem;
  text-align: center;
  line-height: 1;

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-top: -0.2rem;
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: $color-primary;
  }

  &:nth-of-type(1) {
    padding: 0;
  }
}

.c-button {
  margin-top: 5rem;
}
</style>
