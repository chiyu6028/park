const path = require('path')
const resolve = _path => {
  return path.resolve(__dirname, _path)
}

module.exports = {
  // publicPath: '/',
  publicPath: './', // pro
  outputDir: 'dist',
  pages: {
    index: {
      entry: 'src/index.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '管理系统',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/css/global/variable.scss";`
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 88, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    proxy: 'http://192.168.31.43:9999' // 配置跨域处理,只有一个代理

    // 配置多个代理
    // proxy: {
    //   "/api": {
    //     target: "<url>",
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   "/foo": {
    //     target: "<other_url>"
    //   }
    // }
  },
  // devServer: {
  //   proxy: 'http://192.168.31.43:9999'
  //   // proxy: 'http://127.0.0.1:9999'
  //   // proxy: 'http://117.136.40.240:9999'
  // },
  configureWebpack: config => {
    // config.module.rules.push({})
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      config.devtool = 'source-map'
    }
    // config.entry = './src/index.js'
    config.resolve.alias = {
      '@': resolve('src'),
      '@config': resolve('src/config'),
      '@components': resolve('src/components'),
      '@images': resolve('src/assets/images'),
      '@css': resolve('src/assets/css'),
      '@views': resolve('src/views'),
      '@utils': resolve('src/utils')
    }
  }
}
