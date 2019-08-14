const path = require('path');

module.exports = {
  mode:'development',

  //entry: './src/index.js',
  // 这里应用程序开始执行
  // webpack 开始打包
  //多入口
  entry:{
    index:'./src/index.js',
    about:'./src/about.js'
  },

  output: {
  	//如何输出结果的相关选项
    filename: '[name]-bundle.js',
    // 「入口分块(entry chunk)」的文件名模板（出口分块？
    path: path.resolve(__dirname, 'dist')
    //所有输出文件的目标路径
    //必须是绝对路径（使用 Node.js 的 path 模块）
  },
  module: {
    rules: [
    //处理css
    {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
    },
    //处理图片 
    {
    test: /\.(png|jpg|gif)$/i,
      use: [
          {
            loader: 'url-loader',
          }
      ]
    }      
    ]
  },
}
