const pkg = require('./package');

export default {
  ssr: false,
  head: {
    title: 'Завод Металлоконструкций ЗМК',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  components: true,
  css: [
    '@assets/scss/_styles.scss'
  ],
  plugins: [
    '~/plugins/filters.js',
    { src: '~/plugins/ymapPlugin.js',  mode: 'client' }
  ]
}