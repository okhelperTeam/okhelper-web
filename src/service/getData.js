/**
 * Created by zc on 2017/3/18.
 * AJAX 同一管理
 */

import ajax from "@/utils/http.js";


//用户登录
var login = myData => ajax('post', '/api/user/login', myData);

//获取我的菜单列表
var getMenuCodeList=myData=>ajax('get','/api/permission/menu/me',myData);

export {
  login,
  getMenuCodeList
}
