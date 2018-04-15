/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <div class="bottom-bar">
        <hr>
        <div class="bottom-bar-model">
          <a class="bottom-bar-content" style="color: #dd0a20">
            <i class="bottom-bar-icon ion-ios-home"></i>
            <span class="bottom-bar-icon-name">主页</span>
          </a>
        </div>
        <div class="bottom-bar-model">
          <a class="bottom-bar-content">
            <i class="bottom-bar-icon ion-ios-box-outline"></i>
            <span class="bottom-bar-icon-name">库存</span>
          </a>
        </div>
        <div class="bottom-bar-model">
          <a class="bottom-bar-content">
            <i class="bottom-bar-icon ion-ios-calculator-outline"></i>
            <span class="bottom-bar-icon-name">销售</span>
          </a>
        </div>
        <div class="bottom-bar-model">
          <a class="bottom-bar-content">
            <i class="bottom-bar-icon ion-ios-calendar-outline"></i>
            <span class="bottom-bar-icon-name">历史</span>
          </a>
        </div>
        <div class="bottom-bar-model">
          <a class="bottom-bar-content">
            <i class="bottom-bar-icon  ion-ios-person-outline"></i>
            <span class="bottom-bar-icon-name">个人</span>
          </a>
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
      销售：ion-ios-calculator;历史：ion-ios-calendar;
      个人：ion-ios-person;
    未选中i class：
      主页：ion-ios-home-outline;库存：ion-ios-box-outline;
      销售：ion-ios-calculator-outline;历史：ion-ios-calendar-outline;
      个人：ion-ios-person-outline;
  */
.bottom-bar{
  height: 56px;
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 100;
}
  .bottom-bar-model{
    width: 20%;
    display: block;
    float: left;
    height: 56px;
    line-height: 20px;
    text-align: center;
    padding-top: 3px;
    color: #575757;
    background: white;
  }
  .bottom-bar-icon{
    display: block;
    font-size: 32px;
  }
  .bottom-bar-icon-name{
    font-size: 12px;
  }
</style>
