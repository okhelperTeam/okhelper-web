/**
 * Created by zc on 2017/3/18.
 * 全局状态,Mutation 功能名称的定义
 */

// 用户登录(action)
export const ACTION_USER_LOGIN = 'ACTION_USER_LOGIN';

// 用户登出(action)
export const ACTION_USER_LOGOUT = 'ACTION_USER_LOGOUT';

//获取用户信息(action)
export const ACTION_GET_USERINFO = 'ACTION_GET_USERINFO';

//记录登录信息
export const RECORD_USERINFO = 'RECORD_USERINFO';

//消除用户登录信息
export const CANCEL_USER = 'CANCEL_USER';




// 向购物车添加商品(action)
export const ADD_CART = 'ADD_CART';

// 更新购物车产品数量(action)
export const UPDATE_CART_PRODUCT_COUNT = 'UPDATE_CART_PRODUCT_COUNT';

// 删除购物车某一产品(action)
export const DELETE_CART_PRODUCT = 'DELETE_CART_PRODUCT';

// 删除购物车所有选中产品(action)
export const DELETE_CART_PRODUCT_ALL_CHECKED = 'DELETE_CART_PRODUCT_ALL_CHECKED';

// 获取购物车(action)
export const GET_CART = 'GET_CART';

// 全选或全反选(action)
export const CART_CHECK_ALL = 'CART_CHECK_ALL';

// 单选选或单反选(action)
export const CART_CHECK_SINGLE = 'CART_CHECK_SINGLE';

//记录购物车信息
export const RECORD_CART = 'RECORD_CART';

//消除购物车信息
export const CANCEL_CART = 'CANCEL_CART';
