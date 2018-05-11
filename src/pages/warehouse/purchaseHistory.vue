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
          <div class="ok-text-name" style="width: 100%">公司名称：{{item.supplier.name}}</div><br>
          <div class="ok-text-name2" style="width: 100%;margin-left: -2px;margin-top: -15px;font-size: 13px">
            单号：{{item.orderNumber}}&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: red">￥{{item.totalPrice}}</span>
          </div>
          <div class="ok-text-name5" style="width: 100%;font-size: 13px">
            创建时间：{{item.createTime}}&nbsp;&nbsp;&nbsp;&nbsp;仓库：{{item.stockiner.name}}
          </div>
          <div class="manger-icon">
            <i class="ion-chevron-right"></i>
          </div>
        </div>
        </van-list>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import {getPurchaseOrderList} from '@/service/getData';
  import {List,Field} from 'vant';
  Vue.use(List).use(Field);
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
      created(){
          this.onLoad();
      }
    }
</script>

<style scoped>
  .manger-icon{
    float: right;
    display: inline;
    font-size: 18px;
    color: black;
    margin-right: 10%;
    margin-top: -8%;
    font-family: 微软雅黑;
  }
</style>
