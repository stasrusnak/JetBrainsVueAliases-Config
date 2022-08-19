const path = require('path');

module.exports = {
  //lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src") // change this to your folder path
      }
    }
  }
}

//Phpstorm fix
//node_modules/@vue/cli-service/webpack.config.js