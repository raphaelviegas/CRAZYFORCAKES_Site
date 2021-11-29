export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Crazy For Cakes',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bolos incríveis, lindos formatos, vários sabores. Chocolate com cobertura, Brigadeiro, Pistache e muito mais. Acesse e conheça toda a variedade Crazy For Cakes' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'og:locale', hid:'og:locale', content:'pt_BR'},
      { name: 'og:title', hid:'og:title', content:'Crazy For Cakes'},
      { name: 'og:type', hid:'og:type', content:'website'},
      { name: 'og:image', hid:'og:image', content:`${process.env.SITE_URL}/logo.jpg`},
      { name: 'og:description', hid:'og:description', content:'Bolos incríveis, lindos formatos, vários sabores. Chocolate com cobertura, Brigadeiro, Pistache e muito mais. Acesse e conheça toda a variedade Crazy For Cakes'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-lazy-load'
  ],
  publicRuntimeConfig: {
    wordpressURL: process.env.WORDPRESS_URL,
    siteURL: process.env.SITE_URL
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
