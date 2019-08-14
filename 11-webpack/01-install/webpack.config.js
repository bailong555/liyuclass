const path = require('path');

module.exports = {
  mode:'development',

  entry: './src/index.js',
  // 这里应用程序开始执行
  // webpack 开始打包

  output: {
  	//如何输出结果的相关选项
    filename: 'bundle.js',
    // 「入口分块(entry chunk)」的文件名模板（出口分块？
    
    path: path.resolve(__dirname, 'dist')
    //所有输出文件的目标路径
    //必须是绝对路径（使用 Node.js 的 path 模块）
  }
};