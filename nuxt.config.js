export default {
  mode: 'spa',
  head: {
    titleTemplate: '%s | a°',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:title', property: 'og:title', content: 'a°' },
      { hid: 'og:description', property: 'og:description', content: '' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'a°' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: '', property: 'og:url', content: '' },
      { hid: '', name: 'twitter:url', content: '' },
      { hid: '', property: 'og:image', content: '' },
      { hid: '', name: 'twitter:image:src', content: '' },
      { hid: '', name: 'author', content: '' },

      { hid: '', property: 'og:type', content: 'website' },
      { hid: '', property: 'og:locale', content: 'ja_JP' },
      { hid: '', property: 'fb:app_id', content: '' },
      { hid: '', name: 'twitter:card', content: 'summary_large_image' },
      { hid: '', name: 'twitter:site', content: '' },
      { hid: '', name: 'twitter:creator', content: '' },
      { hid: '', name: 'twitter:domain', content: '' },
      { hid: '', property: 'og:site_name', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['~/assets/sass/style.scss']
  },
  axios: {
    baseURL: ''
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
}
