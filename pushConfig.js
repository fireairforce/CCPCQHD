module.exports = {
  fjPublish: {
    qiniu: {
      ACCESS_KEY: 'hXqlX1gyAC9EhwXhmldXDbnN51fV7zDCkDBezSmc',
      SECRET_KEY: 'XQk_zdHSre92uJUl5eFqtfonBZZgzq0jnVX13rvS',
      bucket: 'zoomdong',
      path: 'wd/'
    },
    modules: [{
      name: '生产环境',
      env: 'prod',
      ssh: {
        host: '47.95.194.10',     // 服务器地址
        port: 22,                 // 端口
        username: 'root',         // 用户名
        password: 'Wd1344492820.'          // 密码
      },
      buildCommand: 'build',    // 构建命令  === npm run build:sit
      localPath: './dist',            // 构建后上传文件
      remotePath: './home/www/zoom/dong'       // 服务端路径
    }]
  }
}
