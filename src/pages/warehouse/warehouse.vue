/**
* Created by lulu on 2018/4/22.
*/


<template>
  <div id="">
    <div class="back-bar">
      <router-link to="/user/person" style="color: white;" class="back-bar-backBtn">&lt;&nbsp;返回
      </router-link>
      <div  class="back-bar-name">
        仓库管理
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
    <div class="ok-model-border"></div>
    <!--<div style="margin-top:56px;width: 100%;height: 34px;background: #F2F2F2;padding-top: 3px;padding-right: 10px;padding-left: 10px;">-->
      <!--<div style="color:white;display:block;float:left;width: 50%;height: 28px;line-height:28px;text-align:center;border-radius:3px;background: brown;border-right: 1px solid #F2F2F2">已启用（4）</div>-->
      <!--<div style="display:block;float:left;width: 50%;height: 28px;line-height:28px;text-align:center;border-radius:3px;background: white;color:black;border-right: 1px solid #F2F2F2">已停用（0）</div>-->
    <!--</div>-->
    <br><br>
    <div class="ok-model-border"></div>
    <br>
    <hr>
    <div style="margin-top: 56px;height: 1px;width: 100%;"></div>
    <div v-for="item in list" class="ok-text-box">
      <div class="ok-text-name">{{item.storeName}}</div><br>
      <div class="ok-text-name2">
        仓库负责人：{{item.storeKeeper}}
      </div>
    </div>
    <br>
    <hr>
    <!--<div class="ok-text-box">-->
      <!--<div class="ok-text-name">二号仓库</div><br>-->
      <!--<div class="ok-text-name2">-->
        <!--仓库负责人：小刘-->
      <!--</div>-->
    <!--</div>-->
    <!--<br>-->
    <!--<hr>-->
    <!--<div class="ok-text-box">-->
      <!--<div class="ok-text-name">{{storeName}}</div><br>-->
      <!--<div class="ok-text-name2">-->
        <!--仓库负责人：{{storeKeeper}}-->
      <!--</div>-->
    <!--</div>-->
    <!--<br>-->
    <!--<hr>-->
    <!--<div class="ok-text-box">-->
      <!--<div class="ok-text-name">四号仓库</div><br>-->
      <!--<div class="ok-text-name2">-->
        <!--仓库负责人：小赵-->
      <!--</div>-->
    <!--</div>-->
    <!--<br>-->
    <!--<hr>-->
  </div>
</template>

<script>
    export default {
        name: "warehouse",
      data:{
        storeName:'',
        storeKeeper:'',
        list:[]
      },
        methods: {
          getWarehouse(){
            getWareHouseList(
              {

              }).then(
              response=>{
                this.list=response.data.results;
              },error=>{
                console.log(error.response.msg),
                  nameMsg=response.msg;
              }
            )
          }
      }
    };

</script>

<style scoped>

</style>
