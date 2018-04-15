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
    <!--<div class="home-create-shop-box">-->
      <!--<div class="home-create-shop-model">-->
        <!--<router-link to="/shop">-->
          <!--<i class="home-create-shop-icon ion-ios-paw"></i>-->
          <!--<span class="home-create-shop-icon-name" style="">现在开店</span>-->
        <!--</router-link>-->
      <!--</div>-->
    <!--</div>-->
    <div style="background: purple;height: 130px;width: 33%">
      <div style="font-size: 24px;">
        <i></i>
      </div>
    </div>
    <ok-footer></ok-footer>
  </div>

</template>

<script>
  import Vue from 'vue';
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
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
    height: 46px;
    text-align: center;
    line-height: 46px;
  }
  .home-welcome-word{
    background: #dd0a20; color: white;text-align: center;font-size: 18px;
  }
  .home-create-shop-box{
    height: 300px;
    text-align: center;
    padding-top: 150px;
  }
  .home-create-shop-model{
    border:1px solid #dd0a20;
    color: #dd0a20;
    margin:0 auto;
    display: block;
    height: 150px;
    width: 150px;
    border-radius: 5px;
    font-size: 18px;
  }
  .home-create-shop-icon{
    display: block;
    font-size: 80px;
    color: #dd0a20;
  }
  .home-create-shop-icon-name{
    display: block;
    margin-top: -15px;
    color: #dd0a20;
  }
</style>
