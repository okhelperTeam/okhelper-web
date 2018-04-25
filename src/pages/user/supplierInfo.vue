/**
* Created by lulu on 2018/4/22.
*/


<template>
  <div id="">
    <div class="back-bar">
      <router-link to="/user/person" style="color: white;" class="back-bar-backBtn">&lt;&nbsp;返回
      </router-link>
      <div class="back-bar-name">
        供应商信息
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
    <div style="margin-top: 20%">
      <div class="ok-model-text-box" style="margin-top: -3%">
        <div class="ok-text-first ok-text-box">
          <div class="ok-text-name" style="width: 100%">店铺名称* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #333333">爱家</span></div>
        </div>
        <div class="ok-text-box">
          <div class="ok-text-name" style="width: 100%">店铺地址*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #333333">山东省青岛市</span></div>
        </div>
      </div>
      <div class="ok-border"></div>
      <div class="ok-model-text-box" style="margin-top: -14%">
        <div class="ok-text-first ok-text-box">
          <div class="ok-text-name" style="width: 100%">负责人名称* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #333333">爱家</span></div>
        </div>
        <div class="ok-text-box">
          <div class="ok-text-name" style="width: 100%">联系方式*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #333333">13456789909</span></div>
        </div>
      </div>
      <div class="ok-border"></div>
      <div class="ok-text-box">
        <div class="ok-text-name" style="width: 100%">采购记录</div>
        <div class="manger-icon">
          <i class="ion-chevron-right"></i>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Button} from 'vant';
  Vue.use(Button);
    export default {
        name: "supplierInfo"
    }
</script>

<style scoped>
  .manger-icon{
    float: right;
    display: inline;
    font-size: 25px;
    color: #EAEAEA;
    margin-right: 10%;
    margin-top: -13%;
    font-family: 微软雅黑;
  }
</style>
