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
    // proxy: 'http://192.168.1.115:9999'
    // proxy: 'http://127.0.0.1:9999'
    // proxy: 'http://117.136.40.240:9999'
  },
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
