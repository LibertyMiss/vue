# login-intercept-demo

> login-intercept

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Element-UI的使用

## axios的基本使用

- Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

- Features

    从浏览器中创建 XMLHttpRequests
    从 node.js 创建 http 请求
    支持 Promise API
    拦截请求和响应
    转换请求数据和响应数据
    取消请求
    自动转换 JSON 数据
    客户端支持防御 XSRF

- vue-resource 也是基于promise的HTTP库, 但是vue-resource推出时只考虑到了浏览器中的http请求, 所以只能运行在浏览器端进行HTTP请求的操作, 因为内部只封装了XMLHttpRequests对象
- 
## axios的拦截器

### 完成现代化token的验证方式实现登录功能

## 全局导航守卫的使用