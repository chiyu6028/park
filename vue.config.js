const path = require('path')
const os = require('os')
const resolve = _path => {
  return path.resolve(__dirname, _path)
}

let getLocalIP = () => {
  let ifaces = os.networkInterfaces()
  let ip = null
  for (let dev in ifaces) {
    ifaces[dev].forEach((details) => {
      if (details.family.toUpperCase() === 'IPV4') {
        ip = details.address
      }
      if (details.family.toUpperCase() === 'IPV6') {
        ip = details.address
      }
    })
    break
  }
  if (ip === null) {
    ip = 'localhost'
  }
  return ip
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
    host: getLocalIP(), // 'localhost',
    port: 88, // 端口号
    https: false, // https:{type:Boolean}
    open: true,
    hot: true,
    // proxy: 'http://129.204.177.180:8082'
    proxy: 'http://cc9fpv.natappfree.cc'
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
