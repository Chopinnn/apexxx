const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:8080,
    proxy:{
      '/servers':{
        target:'http://ms.r5reloaded.com',
        changeOrigin:true,
        // pathRewrite:{
        //   '^/api':''
        // }
      }
    }
  }
})
