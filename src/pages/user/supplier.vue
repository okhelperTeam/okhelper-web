/**
* Created by lulu on 2018/4/22.
*/


<template>
  <div id="">
    <div class="back-bar">
      <router-link to="/user/person" style="color: white;" class="back-bar-backBtn">&lt;&nbsp;返回
      </router-link>
      <div class="back-bar-name">
        供应商管理
      </div>
      <div class="back-bar-cancelBtn">
        <div style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-plus-empty"></i>
        </div>
        <div style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-search"></i>
        </div>
      </div>
    </div>
    <hr>
    <div style="margin-top: 13%">
      <div class="ok-text-box1">
        <div class="ok-text-name">家居</div><br>
        <div class="ok-text-name2">
          负责人： 李丽
        </div>
        <div class="ok-text-name5">
          欠供应商款： <span style="color: red">￥139.86</span>
        </div>
      </div>
      <div class="manger-icon">
        <i class="ion-chevron-right"></i>
      </div>
      <br><br>
      <hr>
      <div class="ok-text-box1">
        <div class="ok-text-name">孙磊</div><br>
        <div class="ok-text-name2">
          负责人： 孙磊
        </div>
        <div class="ok-text-name5">
          欠供应商款： <span style="color: red">￥0.00</span>
        </div>
      </div>
      <div class="manger-icon">
        <i class="ion-chevron-right"></i>
      </div>
      <br><br>
      <hr>
      <div class="ok-text-box1">
        <div class="ok-text-name">爱家</div><br>
        <div class="ok-text-name2">
          负责人： 无
        </div>
        <div class="ok-text-name5">
          欠供应商款： <span style="color: red">￥0.00</span>
        </div>
      </div>
      <div class="manger-icon">
        <i class="ion-chevron-right"></i>
      </div>
      <br><br>
      <hr>
      <div class="ok-text-box1">
        <div class="ok-text-name">塘厦</div><br>
        <div class="ok-text-name2">
          负责人： 刘明
        </div>
        <div class="ok-text-name5">
          欠供应商款： <span style="color: red">￥0.00</span>
        </div>
      </div>
      <div class="manger-icon">
        <i class="ion-chevron-right"></i>
      </div>
      <br><br>
      <hr>
    </div>
    <div class="ok-model-border"></div>
  </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
  export default {
    mixins: [],     //混合
    components: {
      'ok-back':Back
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
  .manger-icon{
    float: right;
    display: inline;
    font-size: 25px;
    color: #EAEAEA;
    margin-right: 10%;
    margin-top: -5%;
    font-family: 微软雅黑;
  }
</style>
