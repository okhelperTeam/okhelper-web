/**
 * Created by zc on 2017/3/18.
 * AJAX 同一管理
 */

import ajax from "@/utils/http.js";


//用户登录
var login = myData => ajax('post', '/api/user/login', myData);

//商品图片上传
var upLoadGoodsImgs = myData => ajax('post','/api/upload/img',myData);

//商品图片上传
var upLoadPayImgs = myData => ajax('post','/api/upload/img',myData);

//获取我的菜单列表
var getMenuCodeList=myData=>ajax('get','/api/permission/menu/me',myData);

//获取仓库列表
var getWarehouseList = myData=>ajax('get','/api/warehouse',myData);

//获取分类列表
var getCategoryList=(id)=>ajax('get','/api/categorys/'+id);

//获取商品列表(分类id)
var getProductList=myData=>ajax('get','/api/product/category',myData);


//查询所有供应商
var getSupplierList=myData=>ajax('get','/api/supplier',myData);

//查询所有客户
var getCustomerList=myData=>ajax('get','/api/customer',myData);

//查询所有采购订单
var getPurchaseOrderList=myData=>ajax('get','/api/storage',myData);

//获取商品列表(商品名)
var getProductListByName=myData=>ajax('get','/api/product/search',myData);

//生产商品条码
var generateBarCode=myData=>ajax('get','/api/until/bar_code',myData);


//获取我的信息,校验token
var getMyUserInfo=myData=>ajax('get','/api/user/me',myData);

//新增商品
var addProduct=myData=>ajax('post','/api/product',myData);


export {
  login,
  getMenuCodeList,
  upLoadGoodsImgs,
  getWarehouseList,
  upLoadPayImgs,
  getCategoryList,
  getProductList,
  getSupplierList,
  getCustomerList,
  getPurchaseOrderList,
  getProductListByName,
  generateBarCode,
  getMyUserInfo,
  addProduct
}
