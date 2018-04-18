/*
 * 路由表
 * */

import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from "store/index";

Vue.use(VueRouter);//创建路由实例
const Home = resolve => require(['@/pages/home/home'], resolve);
const Login = resolve => require(['@/pages/user/login'], resolve);
const Register = resolve => require(['@/pages/user/register'], resolve);
const Person = resolve => require(['@/pages/user/person'], resolve);
const JoinShop = resolve => require(['@/pages/home/chooseShop'], resolve);
const Shop = resolve => require(['@/pages/shop/shop'], resolve);
const Employee = resolve => require(['@/pages/employee/employee'], resolve);
const EmployeeInfo = resolve => require(['@/pages/employee/employeeInfo'], resolve);
const Role = resolve => require(['@/pages/role/role'], resolve);
const RoleInfo = resolve => require(['@/pages/role/roleInfo'], resolve);
const Sell = resolve => require(['@/pages/sell/sell'], resolve);
const Repertory = resolve => require(['@/pages/repertory/repertory'], resolve);
const Statistics = resolve => require(['@/pages/statistics/statistics'], resolve);
const Header = resolve => require(['@/components/header/header'], resolve);
const Footer = resolve => require(['@/components/footer/footer'], resolve);
const BackBar = resolve => require(['@/components/common/backBar'], resolve);

const routes = [
  {
    path: '/', redirect: '/user/login', //自动转跳到home
  },{
    path: '/user/login',
    component: Login,
    meta: {title: "okhelper-login"}
  },{
    path: '/user/register',
    component: Register,
    meta: {title: "okhelper-register"}
  },{
    path: '/user/person',
    component: Person,
    meta: {title: "okhelper-person"}
  },{
    path:'/home',
    component:Home,
    meta:{title:"okhelper-Home"}
  },{
    path:'/home/joinShop',
    component:JoinShop,
    meta:{title:"okhelper-joinShop"}
  },{
    path:'/shop',
    component:Shop,
    meta:{title:"okhelper-Shop"}
  },{
    path:'/employee',
    component:Employee,
    meta:{title:"okhelper-Employee"}
  },{
    path:'/employee/employeeInfo',
    component:EmployeeInfo,
    meta:{title:"okhelper-EmployeeInfo"}
  },{
    path:'/role',
    component:Role,
    meta:{title:"okhelper-Role"}
  },{
    path:'/role/roleInfo',
    component:RoleInfo,
    meta:{title:"okhelper-RoleInfo"}
  },{
    path:'/sell',
    component:Sell,
    meta:{title:"okhelper-Sell"}
  },{
    path:'/repertory',
    component:Repertory,
    meta:{title:"okhelper-Repertory"}
  },{
    path:'/statistics',
    component:Statistics,
    meta:{title:"okhelper-Statistics"}
  },{
    path:'/header',
    component:Header,
    meta:{title:"okhelper-Header"}
  },{
    path:'/footer',
    component:Footer,
    meta:{title:"okhelper-footer"}
  },{
    path:'/back',
    component:BackBar,
    meta:{title:"okhelper-backBar"}
  }
];

//返回路由实例
const router = new VueRouter({
  routes
  ,
  mode: 'history', //html5 模式去除锚点
  saveScrollPosition: false, //记住页面的滚动位置 html5模式适用
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  },
  strict: process.env.NODE_ENV !== 'production'//严格模式，发布阶段关闭它避免性能损耗
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (localStorage.getItem("is_login") === "true") {  // 通过localStorage获取当前的is_login是否存在
      next();
    }
    else {
      next({
        path: '/user/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});
router.afterEach((to, from) => {
  document.title = to.meta.title;
})
router.onReady(() => {
  //console.log("first")//手输+第一次进入路由器的时候被调用
  // store.dispatch(ACTION_GET_USERINFO); //刷新进行权限认证,并重新获取用户信息
})
export default router;
