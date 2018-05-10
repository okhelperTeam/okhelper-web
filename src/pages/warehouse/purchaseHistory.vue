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
          <router-link to="/warehouse/purchaseOrder" style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
            <i class="ion-ios-plus-empty"></i>
          </router-link>
          <div style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
            <i class="ion-ios-search"></i>
          </div>
        </div>
      </div>
      <div style="margin-top: 13%" v-if="purchaseOrderList.length>0||pageNum==0">
        <van-list
          v-model="loading"
          :finished="finished"
          :offset=0
          @load="onLoad"
        >
        <div class="ok-text-box1" v-for="item in purchaseOrderList">
          <div class="ok-text-name" style="width: 100%">广州市蒂亚服饰有限公司{{item.supplier.name}}</div><br>
          <div class="ok-text-name2" style="margin-left: -2px;margin-top: -15px;font-size: 13px">
            JH1889900&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: red">￥5000.00</span>
          </div>
          <div class="ok-text-name5" style="margin-top: -5%;font-size: 13px;margin-left: -42%">
            2018-04-26 17.17&nbsp;&nbsp;&nbsp;&nbsp;一号仓库
          </div>
          <div class="manger-icon">
            <i class="ion-chevron-right"></i>
          </div>
        </div>
        </van-list>
        <!--<div class="ok-text-box1">-->
          <!--<div class="ok-text-name" style="width: 100%">广州市蒂亚服饰有限公司</div><br>-->
          <!--<div class="ok-text-name2" style="margin-left: -2px;margin-top: -15px;font-size: 13px">-->
            <!--JH1889900&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: red">￥5000.00</span>-->
          <!--</div>-->
          <!--<div class="ok-text-name5" style="margin-top: -5%;font-size: 13px;margin-left: -42%">-->
            <!--2018-04-26 17.17&nbsp;&nbsp;&nbsp;&nbsp;一号仓库-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="manger-icon">-->
          <!--<i class="ion-chevron-right"></i>-->
        <!--</div>-->
        <!--<br><br>-->
        <!--<hr>-->
        <!--<div class="ok-text-box1">-->
          <!--<div class="ok-text-name" style="width: 100%">广州市蒂亚服饰有限公司</div><br>-->
          <!--<div class="ok-text-name2" style="margin-left: -2px;margin-top: -15px;font-size: 13px">-->
            <!--JH1889900&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: red">￥5000.00</span>-->
          <!--</div>-->
          <!--<div class="ok-text-name5" style="margin-top: -5%;font-size: 13px;margin-left: -42%">-->
            <!--2018-04-26 17.17&nbsp;&nbsp;&nbsp;&nbsp;一号仓库-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="manger-icon">-->
          <!--<i class="ion-chevron-right"></i>-->
        <!--</div>-->
        <!--<br><br>-->
        <!--<hr>-->
        <!--<div class="ok-text-box1">-->
          <!--<div class="ok-text-name" style="width: 100%">广州市蒂亚服饰有限公司</div><br>-->
          <!--<div class="ok-text-name2" style="margin-left: -2px;margin-top: -15px;font-size: 13px">-->
            <!--JH1889900&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: red">￥5000.00</span>-->
          <!--</div>-->
          <!--<div class="ok-text-name5" style="margin-top: -5%;font-size: 13px;margin-left: -42%">-->
            <!--2018-04-26 17.17&nbsp;&nbsp;&nbsp;&nbsp;一号仓库-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="manger-icon">-->
          <!--<i class="ion-chevron-right"></i>-->
        <!--</div>-->
        <!--<br><br>-->
        <!--<hr>-->
      </div>
    </div>
</template>

<script>
    export default {
        name: "purchaseHistory",
        data(){
          return{
            purchaseOrderList: [],
            loading: false,
            finished: false,
            paging: true,//开启分页
            pageNum: 0,//请求页码
            limit: 5,//每页多少条
          }
        },
      methods: {
        onLoad() {//上划加载采购订单信息
          this.pageNum++;
          getPurchaseOrderList({
            paging:this.paging,
            pageNum:this.pageNum,
            limit:this.limit,
          }).then(
            response=>{

              // alert(1);
              //console.log(response.data.results);
              for(var i=0;i<response.data.results.length;i++){
                this.purchaseOrderList.push(response.data.results[i]);
              }

              this.loading=false;
              if (response.data.lastPage) {
                this.finished = true;
              }
            },error=>{
              this.loading=false;
              this.finished = true;

              console.log(error.response.msg);
            }
          );
        }
        },
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
