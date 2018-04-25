/**
* Created by 朱婷婷 on 2018/4/11.
*/
<template>
  <div>

    <div style="position:fixed;width: 100%;background: #C20C0C;height: 56px;">
      <div style="width: 17%;text-align: center;float: left;line-height: 56px;">
        <img width="30px" height="30px" src="@/assets/icon/ok-icon-white.png"/>
      </div>
      <div style="width: 66%;height: 56px;float: left;padding-top: 10.5px;">
    <router-link to="/product/searchProduct">
      <div style="color: chocolate;height: 35px;width: 100%;border-radius: 5px;background: white;text-align: center;line-height: 35px;font-size: 14px;">
        <i style="font-size: 16px;" class="header-bar-search-icon ion-android-search"></i>
        &nbsp;<span style="position: relative;top:-1px;">查找商品</span>
      </div>
    </router-link>
      </div>
      <div style="width: 17%;height: 56px;float: left;text-align: center;line-height: 56px;font-size: 30px;color: white;">
        <i class="ion-qr-scanner"></i>
      </div>

    </div>
    <div class="home-welcome">
      <div class="home-welcome-word">
        <span>欢迎使用OK帮云仓储系统</span>
      </div>
    </div>
    <van-swipe :autoplay="3000">
      <van-swipe-item><img height="120px" width="100%" src="@/assets/icon/lunbo1.jpg"/></van-swipe-item>
      <van-swipe-item><img height="120px" width="100%" src="@/assets/icon/lunbo2.jpg"/></van-swipe-item>
      <van-swipe-item>平台广告3</van-swipe-item>
      <van-swipe-item>平台广告4</van-swipe-item>
    </van-swipe>
    <van-notice-bar
      text="号外号外！！！OK帮服务现在免费向大众开放了！！！快来注册吧！！！"
      left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
    />
    <div v-if="" class="sales_order_add home-fun-model">
      <router-link to="/sell/sellTable" class="home-fun-model-a">
        <i class="ion-ios-pricetag home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">销售单</span>
      </router-link>
    </div>
    <div class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i class="ion-ios-cart home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">采购单</span>
      </router-link>
    </div>
    <div class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i class="ion-ios-box home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">库存管理</span>
      </router-link>
    </div>
    <div class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i class="ion-ios-pie home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">数据统计</span>
      </router-link>
    </div>
    <div class="home-fun-model">
      <router-link to="/employee" class="home-fun-model-a">
        <i class="ion-ios-people home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">员工管理</span>
      </router-link>
    </div>
    <div class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i class="ion-ios-help home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">快速入门</span>
      </router-link>
    </div>
    <div class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i style="font-size: 35px;display: block;"></i>
        <span class="home-fun-model-a-word">。。。</span>
      </router-link>
    </div>
    <ok-footer></ok-footer>
  </div>

</template>

<script>
  import Vue from 'vue';
  import {getMenuCodeList} from "../../service/getData";
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
  import { Swipe, SwipeItem } from 'vant';
  import { NoticeBar } from 'vant';

  Vue.use(NoticeBar);

  Vue.use(Swipe).use(SwipeItem);
  const Footer = resolve => require(['@/components/footer/footer'], resolve);
  Vue.use(Icon);

  Vue.use(NavBar);

    export default {
      mixins: [],     //混合
      components: {
        'ok-footer':Footer
      },//注册组件
      data() {         //数据
        return {
          goods,
          showMenuModel:[false,false,false,false]
        };
      },
      computed: {},  //计算属性
      created() {
        this.getMyMenuCodeList();
      },   //创建
      mounted() {
      },   //挂载
      methods: {
        getMyMenuCodeList(){
          getMenuCodeList().then(
            response=>{
              console.log(response.data);
            },error=>{
              console.log(error.response.msg)
            }
          );
        }
      },   //方法
      watch: {}      //监听
    }
</script>

<style scoped>

  .home-welcome{
    height: 56px;
    text-align: center;
    line-height: 56px;
  }
  .home-welcome-word{
    background: #C20C0C;
    color: white;
    text-align: center;
    font-size: 18px;
  }
  .home-fun-model{
    border-right:0.3px solid #cccccc;
    border-bottom:0.3px solid #cccccc;
    display:block;
    float:left;
    height: 130px;
    width: 33.3%;
    padding-top: 20px;
  }
  .home-fun-model-a{
    color: orangered;
    text-align: center;
  }
  .home-fun-model-a-icon{
    font-size: 35px;
    display: block;
  }
  .home-fun-model-a-word{
    font-size: 18px;
    display: block;
  }
</style>
