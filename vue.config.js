const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  base: '/donutshop/',
  publicPath: process.env.NODE_ENV === "production" ? "/donutshop/" : "/",
  transpileDependencies: true
})
