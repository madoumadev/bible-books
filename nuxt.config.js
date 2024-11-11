export default {
  target: 'static',
  head: {
    title: 'Les livres de la Bible',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['@/assets/css/tailwind.css'],
  components: true,
  modules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      name: 'Les livres de la Bible',
      short_name: 'LesLivresDeLaBible',
      lang: 'fr',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#4A90E2'
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'google-fonts-stylesheets'
          }
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'google-fonts-webfonts',
            cacheExpiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365
            }
          }
        }
      ]
    }
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
