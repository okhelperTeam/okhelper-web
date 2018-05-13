/**
* Created by lulu on 2018/4/22.
*/


<template>
  <div id="warehouse">
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div  class="back-bar-name">
        仓库管理
      </div>
      <div class="back-bar-cancelBtn">
        <router-link to="/warehouse/addWarehouse" style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-plus-empty"></i>
        </router-link>
        <div style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-search"></i>
        </div>
      </div>
    </div>
    <div class="ok-model-border"></div>
    <br><br>
    <div class="ok-model-border"></div>
    <br>
    <hr>

    <div v-if="warehouseList.length>0||pageNum==0">
      <van-list
        v-model="loading"
        :finished="finished"
        :offset=0
        @load="onLoad"
      >
      <div v-for="item in warehouseList" class="ok-text-box" style="float: left">
        <router-link :to="{path: '/warehouse/warehouseInfo',query: {id:item.id}}">
        <div class="ok-text-name" style="width: 80%">仓库名称：{{item.warehouseName}}</div><br>
        <div @click="getId(item.id)" class="ok-text-name2" style="margin-left: 1%;margin-top: -7%">
        仓库负责人：{{item.storeKeeper}}
        </div>
        <div class="manger-icon">
          <i class="ion-chevron-right"></i>
        </div>
        </router-link>
        <div class="ok-model-border"></div>
      </div>
      </van-list>
    </div>


  </div>
</template>

<script>
  import Vue from 'vue';
  import {getWarehouseList} from '@/service/getData';
  import {List} from 'vant';
  Vue.use(List);
    export default {
        name: "warehouse",
      data(){
        return {
          warehouseName: '',
          storeKeeper: '',
          warehouseList: [],
          loading: false,
          finished: false,
          paging: true,//开启分页
          pageNum: 0,//请求页码
          limit: 5,//每页多少条
        }
      },
        methods: {
          getId(id){

          },
          onLoad() {//上划加载仓库信息
            this.pageNum++;
            getWarehouseList({
              paging:this.paging,
              pageNum:this.pageNum,
              limit:this.limit,
            }).then(
              response=>{

                // alert(1);
                //console.log(response.data.results);
                for(var i=0;i<response.data.results.length;i++){
                  this.warehouseList.push(response.data.results[i]);
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
          },
      }
    };

</script>

<style scoped>
  .manger-icon{
    float: right;
    display: inline;
    font-size: 20px;
    color: black;
    margin-right: 10%;
    margin-top: -12%;
    font-family: 微软雅黑;
  }
</style>
