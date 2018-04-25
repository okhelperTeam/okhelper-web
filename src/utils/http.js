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
  let axiosRequestConfig = {
    method: method,
    url: "http://139.199.30.155"+url,
    data: data,
    withCredentials: true,
    // xsrfCookieName: "csrftoken",
    // xsrfHeaderName: "X-CSRFToken",
    transformRequest: [function (data) { //将json解析成字符串
      return qs.stringify(data)
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
  if (method == "GET") {
    axiosRequestConfig.params = data;
    axiosRequestConfig.data = "";
  }
  else {
    // axiosRequestConfig.data=Object.assign(axiosRequestConfig.data,{csrftoken:'I3sKNrTZJZA9DyWb3K4YnYlAhSaimsaT'});
  }

//创建自定义axios对象
  let ajax = axios.create();

// http request 拦截器
  ajax.interceptors.request.use(
    config => {
      // if (store.state.token) {
      // config.headers.Authorization = `token ${store.state.token}`;
      // }
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
          case 401:  // 401 清除session信息并跳转到登录页面
            console.log("session失效");
            if (store.state.userInfo != null) {
              //session 失效跳到登录页面
              router.replace({path: '/user/login', query: {redirect: router.currentRoute.fullPath}});
            }
            store.commit(type.CANCEL_USER);//消除userInfo
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
      reject(error);
    })
  });

}
