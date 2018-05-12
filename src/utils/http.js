/**
 * Created by zc on 2017/3/14.
 */

// import store from '@/store/index'
// import * as type from '@/store/type'


import router from "../router/index"
import axios from "axios"
let qs = require('qs');
export default(method = 'GET', url = '', data = {}) => {
  method = method.toUpperCase();
  const httpPrefix='http://139.199.30.155';

  let axiosRequestConfig = {
    method: method,
    url: httpPrefix+url,
    data: data,
    withCredentials: true,
    transformRequest: [function (data) { //将json解析成字符串
      if(data instanceof FormData){
        return data;
      }else {
        return qs.stringify(data);
      }
    }],
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'token':window.localStorage.getItem("token")
    },
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  };

//创建自定义axios对象
  let ajax = axios.create();

// http request 拦截器
  ajax.interceptors.request.use(
    config => {
      if (method == "GET") {
        config.params = data;
        config.data = "";
      }

      if(data instanceof FormData){
        config.headers['Content-Type']='multipart/form-data';
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    });

// http response 拦截器
  ajax.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            console.log("参数错误");
            break;
          case 401:  // 401 跳转到登录页面
            console.log("token失效/登陆失败");
            router.replace({path: '/user/login', query: {redirect: router.currentRoute.fullPath}});
            break;
          case 403:
            console.log("无权访问");
            break;
          case 500:  // 500 处理
            router.replace("/500");
            break;
        }
      } else {
        console.error("error message:" + error.message);
      }
      return Promise.reject(error);
    });


  return new Promise(function (resolve, reject) {
    ajax.request(axiosRequestConfig).then(response => {
      resolve(response.data);
    }, error => {
      reject(error.response.data);
    })
  });

}
