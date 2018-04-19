/**
* Created by 朱婷婷 on 2018/4/11.
*/
<template>
  <div>
    <ok-header></ok-header>
    <div class="home-welcome">
      <div class="home-welcome-word">
        <span>欢迎使用OK帮云仓储系统</span>
      </div>
    </div>
    <van-swipe :autoplay="3000">
      <van-swipe-item><img height="120px" width="100%" src="@/assets/icon/lunbo1.jpg"/></van-swipe-item>
      <van-swipe-item><img height="120px" width="100%" src="@/assets/icon/lunbo2.jpg"/></van-swipe-item>
      <van-swipe-item>优惠信息3</van-swipe-item>
      <van-swipe-item>优惠信息4</van-swipe-item>
    </van-swipe>
    <van-notice-bar
      text="号外号外！！！OK帮服务现在免费向大众开放了！！！快来注册吧！！！"
      left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
    />
    <div class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
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
      <router-link to="/home" class="home-fun-model-a">
        <i class="ion-ios-people home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">客户管理</span>
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
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
  import { Swipe, SwipeItem } from 'vant';
  import { NoticeBar } from 'vant';

  Vue.use(NoticeBar);

  Vue.use(Swipe).use(SwipeItem);
  const Header = resolve => require(['@/components/header/header'], resolve);
  const Footer = resolve => require(['@/components/footer/footer'], resolve);
  Vue.use(Icon);

  Vue.use(NavBar);

    export default {
      mixins: [],     //混合
      components: {
        'ok-header':Header,
        'ok-footer':Footer
      },//注册组件
      data() {         //数据
        return {};
      },
      computed: {},  //计算属性
      created() {
      },   //创建
      mounted() {
      },   //挂载
      methods: {},   //方法
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
    background: #d43c33;
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
    color: brown;
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
