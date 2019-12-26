# park

## files 
```
|---public  // 入口html和一些不必编译的静态资源
|---src     // 开发目录
    |---assets    // 静态资源
        |---css     // 全局样式
        |---images  // 全局图片
    |---components  // 全局组件
        |---block   // 块状组件
        |---chart   // 图表组件
        |---form    // 表单组件
        |---table   // 表格组件
    |---config    // 全局配置
        |---default.js        // 可配置菜单等list结构项目
        |---dictionaries.js   // 数据字典
        |---urlConfig.js      // 全局接口
    |---store   // vuex相关
    |---utils   // 非组件功能模块
    |---views   // 全局所有页面
        |---pages       // 全局页面
        |---router.js   // 全局页面路由
    |---index.js    // 入口js文件
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
