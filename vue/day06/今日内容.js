webpack安装
    安装webpack全局工具
    npm i webpack  webpack-cli -g

    webpack基本使用
        通过webpack指令打包
            安装jquery
                npm install jquery
            将代码书写在main.js中
            在index,HTML直接引入src/main.js无法再浏览器中运行,
            浏览器不支持import语法

            在命令行输出 src/main.js -o dist/bundle.js

            直接打包可能会警告,内容是问需不需要压缩,默认会压缩合并,
            如果不需要可以选择
            src / main.js - o dist / bundle.js --p  压缩
             src / main.js - o dist / bundle.js--d  没有压缩