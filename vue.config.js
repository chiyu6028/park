const path = require('path')
const resolve = _path => {
  return path.resolve(__dirname, _path)
}

module.exports = {
  // publicPath: '/',
  publicPath: './',
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
    open: true,
    proxy: 'http://129.204.177.180:8082'
  },
  configureWebpack: config => {
    // config.module.rules.push({})
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      // config.devtool = 'source-map'
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
