/**
 * Created by zc on 2017/3/18.
 * 真正的状态修改(只能是同步操作，异步操作请先到action分发)
 */
import * as type from './type'


export default {

  // 记录用户信息
  [type.RECORD_USERINFO](state, userInfo) {
    // if (state.userInfo && (state.userInfo.username !== userInfo.username)) {
    //   return;//用户名不符合返回
    // }
    if (userInfo) {
      // console.log("recordUserInfo");
      localStorage.setItem("is_login", true);
      localStorage.setItem("is_superuser", userInfo.is_superuser);
      state.is_login = true;
      state.userInfo = userInfo;
    } else {
      state.userInfo = null;
      state.is_login = false;
    }
  },
  // 用户信息消除
  [type.CANCEL_USER] (state)  {
    state.userInfo = null;
    state.is_login = false;
    localStorage.setItem("is_login", false);
    localStorage.setItem("is_superuser", false);
  },
  //记录购物车信息
  [type.RECORD_CART](state, cart){
    if (cart) {
      state.cart = cart;
    } else {
      state.cart = null;
    }
  },
  //消除购物车信息
  [type.CANCEL_CART](state){
    state.cart = null;
  }

}
