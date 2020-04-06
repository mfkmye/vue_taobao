module.exports = {
    // baseUrl: './',
    publicPath: "./",
    chainWebpack: config => {
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: 50,
                name: 'img/[name].[hash:8].[ext]',
                esModule: false
            })
            .end()
    }
}
// {
//     test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
//     use: [
//         /* config.module.rule('images').use('url-loader') */
//         {
//             loader: 'C:\\Users\\Administrator\\Desktop\\求职\\vue_demo\\node_modules\\_url-loader@4.0.0@url-loader\\dist\\cjs.js',
//             options: {
//                 limit: 4096,
//                 fallback: {
//                     loader: 'C:\\Users\\Administrator\\Desktop\\求职\\vue_demo\\node_modules\\_file-loader@6.0.0@file-loader\\dist\\cjs.js',
//                     options: {
//                         name: 'img/[name].[hash:8].[ext]'
//                     }
//                 }
//             }
//         }
//     ]
// }