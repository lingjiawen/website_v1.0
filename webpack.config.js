var webpack = require('webpack');//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错

//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {//注意这里是exports不是export
    entry: __dirname + "/app/main.js",//唯一入口文件，就像Java中的main方法
    output: {//输出目录
        path: __dirname + "/build",//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },

    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'//loader的名称（必须）
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'style-loader!css-loader'
            }, 
            {
                test: /\.less$/,
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'style-loader!css-loader!less-loader'
            },
            // { 
            //     test: /\.(png|jpg)$/, 
            //     exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
            //     loader: 'url-loader?limit=25000' 
            // },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'file-loader'
            }
            ]
    },

    plugins: [
        //压缩bundle.js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.HotModuleReplacementPlugin()//热模块替换插
    ],

    //webpack-dev-server配置
    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        // colors: true,//在cmd终端中输出彩色日志
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 10086,//设置默认监听端口，如果省略，默认为"8080"
        // process: true,//显示合并代码进度
    }
};