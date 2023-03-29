const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  server: {
    host: 'localhost',
    port: 3000
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    titleTemplate: '%s - Elevation',
    title: 'Elevation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'application-name', content: 'Elevation Mine' },
      { name: 'theme-color', content: '#030406' },

      { name: 'msapplication-TileColor', content: '#030406' },
      {
        name: 'msapplication-square64x64logo',
        content: '/icons/logo64x64.png'
      },
      {
        name: 'msapplication-square70x70logo',
        content: '/icons/logo70x70.png'
      },
      {
        name: 'msapplication-TileImage',
        content: '/icons/logo144x144.png'
      },
      {
        name: 'msapplication-square150x150logo',
        content: '/icons/logo150x150.png'
      },
      {
        name: 'msapplication-square310x150logo',
        content: '/icons/logo310x150.png'
      },
      {
        name: 'msapplication-square310x310logo',
        content: '/icons/logo310x310.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/icons/logo16x16.ico',
        sizes: '16x16'
      },
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/icons/logo32x32.ico',
        sizes: '32x32'
      },
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/icons/logo48x48.ico',
        sizes: '48x48'
      },

      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/icons/logo24x24.png',
        sizes: '16x16'
      },
      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/icons/logo24x24.png',
        sizes: '24x24'
      },
      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/icons/logo32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/icons/logo48x48.png',
        sizes: '48x48'
      },
      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/icons/logo96x96.png',
        sizes: '96x96'
      },
      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/icons/logo128x128.png',
        sizes: '128x128'
      },
      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/icons/logo196x196.png',
        sizes: '196x196'
      },

      {
        rel: 'apple-touch-icon',
        href: '/icons/logo57x57.png',
        sizes: '57x57'
      },
      {
        rel: 'apple-touch-icon',
        href: '/icons/logo60x60.png',
        sizes: '60x60'
      },
      {
        rel: 'apple-touch-icon',
        href: '/icons/logo72x72.png',
        sizes: '72x72'
      },
      {
        rel: 'apple-touch-icon',
        href: '/icons/logo76x76.png',
        sizes: '76x76'
      },
      {
        rel: 'apple-touch-icon',
        href: '/icons/logo114x114.png',
        sizes: '114x114'
      },
      {
        rel: 'apple-touch-icon',
        href: '/icons/logo120x120.png',
        sizes: '120x120'
      },
      {
        rel: 'apple-touch-icon',
        href: '/icons/logo144x144.png',
        sizes: '144x144'
      },
      {
        rel: 'apple-touch-icon',
        href: '/icons/logo152x152.png',
        sizes: '152x152'
      }
    ]
    /* 
    {,

  
    */
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    browserBaseUrl: 'https://elevation-mine.ru/'
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: 'Elevation Mine',
      short_name: 'Elevation',
      description: 'Майнкрафт RP сервер'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
