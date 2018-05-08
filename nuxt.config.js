export default {
  css: ['~/assets/main.css'],
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    ['/getbanner', { target: 'http://114.115.177.23:9000/mock/11/', pathRewrite: { '^/getbanner': 'index/getbanner' } }],
    ['/getabout', { target: 'http://114.115.177.23:9000/mock/11/', pathRewrite: { '^/getabout': 'index/getabout' } }],
    ['/login', { target: 'http://114.115.177.23:9000/mock/11/', pathRewrite: { '^/login': 'base/router' } }]
  ]
}
