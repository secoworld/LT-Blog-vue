module.exports = {
    devServer:{
        // 可以设置端口号
        port: 8083,
        // 配置地址
        proxy:{
            '/api':{
                target: 'http://localhost:8080/api',
                changeOrigin: true,
                pathRewrite:{
                    '^/api': ''
                }
            }
        }
    }
}