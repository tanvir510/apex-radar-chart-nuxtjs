export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS:
  css: [
    '@/assets/scss/global/app.scss',
  ],

  // Plugins to run before rendering page
  plugins: [
    { src: '~/plugins/vue-apexchart', ssr: false}
  ],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended): 
  buildModules: [
      // Style resource for sass
      '@nuxtjs/style-resources',
  ],
  // Using for sass styles
  styleResources: {
      scss: [
          'assets/scss/inclueds/_inclueds.scss',
      ]
  },

  // Modules:
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration
  axios: {},

  // Build Configuration
  build: {
  }
}
