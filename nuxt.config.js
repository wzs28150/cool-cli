export default {
  css: ['~/assets/sass/cool.scss', 'element-ui/lib/theme-chalk/index.css'],
  loading: {
    color: '#409EFF'
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    ['/getbanner', {
      target: 'http://114.115.177.23:9000/mock/11/',
      pathRewrite: {
        '^/getbanner': 'index/getbanner'
      }
    }],
    ['/getabout', {
      target: 'http://114.115.177.23:9000/mock/11/',
      pathRewrite: {
        '^/getabout': 'index/getabout'
      }
    }],
    ['/login', {
      target: 'http://114.115.177.23:9000/mock/11/',
      pathRewrite: {
        '^/login': 'base/router'
      }
    }]
  ],
  plugins: [
    '@/plugins/element-ui'
  ]
}
