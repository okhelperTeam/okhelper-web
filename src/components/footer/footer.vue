/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <!--<hr>-->
      <div class="bottom-bar">
        <div class="bottom-bar-model">
          <router-link to="/home" >
            <i class="bottom-bar-icon ion-ios-home-outline"></i>
            <span class="bottom-bar-icon-name">主页</span>
          </router-link>
        </div>
       <div class="bottom-bar-model">
          <router-link to="/repertory" >
            <i class="bottom-bar-icon ion-ios-box-outline"></i>
            <span class="bottom-bar-icon-name">库存</span>
          </router-link>
        </div>
        <div class="bottom-bar-model">
          <router-link to="/sell" >
            <i class="bottom-bar-icon ion-ios-calculator-outline"></i>
            <span class="bottom-bar-icon-name">销售</span>
          </router-link>
        </div>
        <div class="bottom-bar-model">
          <router-link to="/statistics" >
            <i class="bottom-bar-icon ion-ios-pie-outline"></i>
            <span class="bottom-bar-icon-name">统计</span>
          </router-link>
        </div>
        <div class="bottom-bar-model">
          <router-link to="/user/person" >
            <i class="bottom-bar-icon  ion-ios-person-outline"></i>
            <span class="bottom-bar-icon-name">个人</span>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        mixins: [],     //混合
        components: {},//注册组件
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
  /*
    按钮
    不可用颜色为#cccccc
    可用未选中颜色为#575757
    选中颜色为#dd0a20
    图标
    选中i class：
      主页：ion-ios-home;库存：ion-ios-box;
      销售：ion-ios-calculator;统计：ion-ios-pie;
      个人：ion-ios-person;
    未选中i class：
      主页：ion-ios-home-outline;库存：ion-ios-box-outline;
      销售：ion-ios-calculator-outline;统计：ion-ios-pie-outline;
      个人：ion-ios-person-outline;
  */
.bottom-bar{
  height: 56px;
  bottom: 0;
  position: fixed;
  background-color: rgba(0,0,0,0.85);
  width: 100%;
  z-index: 3;
}
  .bottom-bar-model{
    width: 20%;
    display: block;
    float: left;
    height: 56px;
    line-height: 20px;
    text-align: center;
    padding-top: 3px;
    color: rgba(255,255,255,0.9);
  }
  .bottom-bar-icon{
    display: block;
    font-size: 32px;
  }
  .bottom-bar-icon-name{
    font-size: 12px;
  }
</style>
