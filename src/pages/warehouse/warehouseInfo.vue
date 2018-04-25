/**
* Created by LENOVO on 2018/4/22.
*/


<template>
    <div id="">
      <div class="back-bar">
        <router-link to="/warehouse/warehouse" style="color: white;" class="back-bar-backBtn">&lt;&nbsp;返回
        </router-link>
        <div class="back-bar-name">
          仓库信息详情
        </div>
        <div class="back-bar-cancelBtn">
          <div style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
            <router-link to="" style="color: white;" class="back-bar-backBtn">&nbsp;保
            </router-link>
          </div>
          <div style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
            <router-link to="" style="color: white;" class="back-bar-backBtn">存
            </router-link>
          </div>
        </div>
      </div>
      <div style="margin-top: 20%">
        <div class="ok-model-text-box">
          <div class="ok-text-first ok-text-box">
            <div class="ok-text-name">名称*</div>
            <div class="ok-text-textBox">
              <input class="ok-text-text" style="" placeholder="2-20个字符" type="text"/>
              <hr>
            </div>
          </div>
          <div class="ok-text-box">
            <div class="ok-text-name">负责人*</div>
            <div class="ok-text-textBox">
              <input class="ok-text-text" placeholder="请输入负责人姓名" type="text"/>
              <hr>
            </div>
          </div>
        </div>
        <div class="ok-border"></div>
        <div class="ok-model-text-box">
          <div class="ok-text-box">
            <div class="ok-text-name" style="font-size: 14px">是否启用</div>
            <div class="ok-text-textBox">
              <div class="ok-sliding-block-box-active" style="border-radius:5px;margin-top:8px;float: right;height: 30px;width: 60px;background: brown;z-index: 1;">
                <div  class="ok-sliding-block-btn-active" style="border-radius:5px;margin-right:2px;box-shadow:1px 1px 3px #888888;float: right;height: 26px;width: 30px;margin-top: 2px;background: white;z-index: 100;"></div>
              </div>
            </div>
          </div>
          <div class="ok-text-box">
            <div class="ok-text-name">门店</div>
            <div class="ok-text-textBox">
              <input class="ok-text-text" placeholder="" type="text"/>
              <hr>
            </div>
          </div>
          <div class="ok-text-box">
            <div class="ok-text-name">排序</div>
            <div class="ok-text-textBox">
              <input class="ok-text-text" placeholder="" type="text"/>
              <hr>
            </div>
          </div>
          <div class="ok-text-box">
            <div class="ok-text-name">备注</div>
            <div class="ok-text-textBox">
              <input class="ok-text-text" type="text"/>
              <hr>
            </div>
          </div>
        </div>
        <br>
        <div style="height: 110px;padding-top:30px;width: 96%;margin:0 auto;">
          <van-button type="danger" size="large">删除仓库</van-button>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import {Button} from 'vant';
  Vue.use(Button);
    export default {
        name: "warehouseInfo"
    }
</script>

<style scoped>

</style>
