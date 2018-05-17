/**
* Created by lulu on 2018/5/16.
*/


<template>
  <div>
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div  class="back-bar-name">
        出货管理
      </div>
    </div>
    <div v-if="notOutBoundList.length>0||pageNum==0">
      <van-list
        v-model="loading"
        :finished="finished"
        :offset=0
        @load="onLoad"
      >
        <div v-for="item in notOutBoundList" class="ok-text-box" style="float: left">
          <router-link :to="{path: '/warehouse/outboundInfo',query: {orderNumber:item.orderNumber}}">
            <div class="ok-text-name" style="width: 80%">订单号：{{item.orderNumber}}</div><br>
            <div class="ok-text-name2" style="margin-left: 1%;margin-top: -7%">
              下单时间：{{item.successTime}}
            </div>
            <div class="manger-icon">
              <i class="ion-chevron-right"></i>
            </div>
          </router-link>
          <div class="ok-model-border"></div>
        </div>
      </van-list>
    </div>
    <div v-else style="width: 100%;text-align: center;padding-bottom: 20px;margin-top: 86px">
        <div style="width:30%;border: 1px solid black;border-radius: 5px;height: 40px;padding-left:10px;padding-right:10px;line-height: 40px;text-align: center;margin: 0 auto;">
          没有未发货订单
        </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import {getNotOutboundList} from '@/service/getData';
  import {List} from 'vant';
  Vue.use(List);
    export default {
        name: "outbound",
      data(){
        return {
          notOutBoundList: [],
          loading: false,
          finished: false,
          paging: true,//开启分页
          pageNum: 0,//请求页码
          limit: 5,//每页多少条
        }
      },
      created(){
          this.onLoad();
      },
      methods: {
        onLoad() {//上划加载仓库信息
          this.pageNum++;
          getNotOutboundList({
            paging:this.paging,
            pageNum:this.pageNum,
            limit:this.limit,
          }).then(
            response=>{
              alert(1);
              for(var i=0;i<response.data.results.length;i++){
                this.notOutBoundList.push(response.data.results[i]);
              }
              this.loading=false;
              if (response.data.lastPage) {
                this.finished = true;
              }
            },error=>{
              this.loading=false;
              this.finished = true;
              console.log(error.msg);
            }
          );
        },
      },
    }
</script>

<style scoped>

</style>
