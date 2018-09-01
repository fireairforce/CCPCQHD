const QiniuPlugin = require('qiniu-webpack-plugin')
const {qiniu} = require('./pushConfig')
 
module.exports = function (webpackConfig, env) {
  if (env !== 'production') {} else {
    webpackConfig.plugins.push(
      new QiniuPlugin({
        ACCESS_KEY: 'hXqlX1gyAC9EhwXhmldXDbnN51fV7zDCkDBezSmc',
        SECRET_KEY: 'XQk_zdHSre92uJUl5eFqtfonBZZgzq0jnVX13rvS',
        bucket: 'zoomdong',
        path: 'wd/'
      })
    )
  }
  return webpackConfig
}
