<template>
  <div>
    <section 
      id="login" 
      class="section login">
      <div class="wrapper">
        <h2>Login</h2>
        <figure>
          <img 
            src="/img/logo--black.svg" 
            alt="">
        </figure>
        <p>クライアントワークを閲覧するためにはログインが必要です</p>
        <div class="login-form">
          <form 
            id="loginform" 
            name="loginform" 
            class="form" 
            method="post" 
            @submit.prevent="normalLogin">
            <div class="form-item">
              <label>メールアドレス</label>
              <div class="form-item__inner">
                <input
                  v-model="email"
                  name="email"
                  type="email"
                  placeholder="sample@sample.com"
                >
              </div>
            </div>
            <div class="form-item">
              <label>パスワード</label>
              <div class="form-item__inner">
                <input
                  v-model="password"
                  name="password"
                  type="password"
                  placeholder="passw0rd"
                >
              </div>
            </div>
            <button 
              type="submit" 
              class="c-button c-button--primary">Login</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase.js'

export default {
  name: 'Login',
  head() {
    return {
      title: 'ログイン'
    }
  },
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  created() {
    this.$store.commit('routing', 'client')
  },
  mounted() {
    const login = document.querySelector('.login')
    let wh = window.outerHeight
    const footer = document.getElementById('footer')
    login.style.height = `${wh - footer.clientHeight - 100}px`
  },
  methods: {
    normalLogin() {
      const mail = this.email
      const password = this.password
      firebase
        .auth()
        .signInWithEmailAndPassword(mail, password)
        .then(() => {
          localStorage.mail = mail
          localStorage.password = password
          this.$store.commit('loggined')
          this.$router.push(`/client/${firebase.auth().currentUser.uid}`)
          console.log(this.$store)
        })
        .catch(error => {
          this.errors.push('ログインに失敗しました')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
section.login {
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

  p {
    padding: 2rem 0 0;
    font-family: $font-init;
    font-size: 1.2rem;
    color: $color-black;
    text-align: center;
    letter-spacing: 0.08rem;
  }
}

.wrapper {
  max-width: 640px;
  min-width: 640px;
}

form {
  margin: 5rem 0 0;
  width: 100%;
  text-align: center;

  button {
    margin-top: 3rem;
  }
}

.form-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 0;
  width: 100%;

  label {
    font-family: $font-init;
    font-size: 1.4rem;
    color: $color-black;
    letter-spacing: 0.15rem;
    line-height: 1;
    text-align: left;
    width: 12rem;
  }

  .form-item__inner {
    margin-left: 2rem;
    width: calc(100% - 14rem);
  }
}

input[type='email'],
input[type='password'] {
  padding: 1.1rem 1rem;
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 1;
  color: $color-black;
  width: 100%;
  background-color: #f4f7f6;
  box-shadow: none;
  outline: none;
  border-radius: 0.3rem;
  transition: $easeInOutQuart;
  text-align: left;

  &::-webkit-input-placeholder {
    color: $color-secondary;
    font-size: 1.4rem;
    font-weight: lighter;

    @include mobile-window {
      font-size: 1.2rem;
    }
  }

  &:-moz-placeholder {
    color: $color-secondary;
    font-size: 1.4rem;
    font-weight: lighter;

    @include mobile-window {
      font-size: 1.2rem;
    }
  }

  &::-moz-placeholder {
    color: $color-secondary;
    font-size: 1.4rem;
    font-weight: lighter;

    @include mobile-window {
      font-size: 1.2rem;
    }
  }

  &:-ms-input-placeholder {
    color: $color-secondary;
    font-size: 1.4rem;
    font-weight: lighter;

    @include mobile-window {
      font-size: 1.2rem;
    }
  }

  &:focus {
    outline: none;
    border: 1px solid $color-primary;
    transition: $easeInOutQuart;
  }
}
</style>
