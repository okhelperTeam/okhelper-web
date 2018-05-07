/**
* Created by lulu on 2018/4/26.
*/


<template>
    <div>
      <div class="back-bar">
        <router-link to="/repertory" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
        </router-link>
        <div class="back-bar-name">
          采购历史
        </div>
        <div class="back-bar-cancelBtn">
          <router-link to="/product/productInfo" style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
            <i class="ion-ios-plus-empty"></i>
          </router-link>
          <div style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
            <i class="ion-ios-search"></i>
          </div>
        </div>
      </div>
      <div style="margin-top: 13%">
        <div class="ok-text-box1">
          <div class="ok-text-name" style="width: 100%">广州市蒂亚服饰有限公司</div><br>
          <div class="ok-text-name2" style="margin-left: -2px;margin-top: -15px;font-size: 13px">
            JH1889900&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: red">￥5000.00</span>
          </div>
          <div class="ok-text-name5" style="margin-top: -5%;font-size: 13px;margin-left: -42%">
            2018-04-26 17.17&nbsp;&nbsp;&nbsp;&nbsp;一号仓库
          </div>
        </div>
        <div class="manger-icon">
          <i class="ion-chevron-right"></i>
        </div>
        <br><br>
        <hr>
        <div class="ok-text-box1">
          <div class="ok-text-name" style="width: 100%">广州市蒂亚服饰有限公司</div><br>
          <div class="ok-text-name2" style="margin-left: -2px;margin-top: -15px;font-size: 13px">
            JH1889900&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: red">￥5000.00</span>
          </div>
          <div class="ok-text-name5" style="margin-top: -5%;font-size: 13px;margin-left: -42%">
            2018-04-26 17.17&nbsp;&nbsp;&nbsp;&nbsp;一号仓库
          </div>
        </div>
        <div class="manger-icon">
          <i class="ion-chevron-right"></i>
        </div>
        <br><br>
        <hr>
        <div class="ok-text-box1">
          <div class="ok-text-name" style="width: 100%">广州市蒂亚服饰有限公司</div><br>
          <div class="ok-text-name2" style="margin-left: -2px;margin-top: -15px;font-size: 13px">
            JH1889900&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: red">￥5000.00</span>
          </div>
          <div class="ok-text-name5" style="margin-top: -5%;font-size: 13px;margin-left: -42%">
            2018-04-26 17.17&nbsp;&nbsp;&nbsp;&nbsp;一号仓库
          </div>
        </div>
        <div class="manger-icon">
          <i class="ion-chevron-right"></i>
        </div>
        <br><br>
        <hr>
        <div class="ok-text-box1">
          <div class="ok-text-name" style="width: 100%">广州市蒂亚服饰有限公司</div><br>
          <div class="ok-text-name2" style="margin-left: -2px;margin-top: -15px;font-size: 13px">
            JH1889900&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: red">￥5000.00</span>
          </div>
          <div class="ok-text-name5" style="margin-top: -5%;font-size: 13px;margin-left: -42%">
            2018-04-26 17.17&nbsp;&nbsp;&nbsp;&nbsp;一号仓库
          </div>
        </div>
        <div class="manger-icon">
          <i class="ion-chevron-right"></i>
        </div>
        <br><br>
        <hr>
      </div>
    </div>
</template>

<script>
    export default {
        name: "purchaseHistory"
    }
</script>

<style scoped>
  .manger-icon{
    float: right;
    display: inline;
    font-size: 25px;
    color: #EAEAEA;
    margin-right: 10%;
    margin-top: -8%;
    font-family: 微软雅黑;
  }
</style>
