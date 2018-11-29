import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config就是发送请求之前可以进行配置的请求参数
  let token = localStorage.getItem('token');
  if (token) {
    // config.headers.Authorization = token;
    config.headers['Authorization'] = token;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });

// 管理api请求操作的文件
export const login = (username, password) => axios.post("/login", { username, password })

export const users = (pagenum, pagesize) => axios.get("/users", { params: { pagenum, pagesize } })
