/**
* Created by lulu on 2018/5/16.
*/

<template>
  <div id="">
    <transition-group enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown" :duration="800">
      <div :key="1" v-show="parentData.warehouseShow" style="z-index:100;background:white;width: 100%;height:100%;position: fixed;top: 0;left:0 ">
        <div :key="2" style="color: white;height:56px;background:#C20C0C;font-size: 18px;margin: 0 auto;width: 100%;text-align: center;line-height: 56px;">
          <span>供应商信息</span>
          <div style="color:white;float: left;font-size: 25px;width: 56px;height: 20px;">
            <div @click="$router.push('/warehouse/warehouseInfo')" :key="5" style="color: white" >
              <i :key="6" class="ion-ios-plus-empty"></i>
            </div>
          </div>
          <div :key="3" style="float: right;font-size: 25px;width: 56px;height: 20px;"  @click="parentData.warehouseShow=false" >
            <i :key="4" class="ion-ios-close-empty"></i>
          </div>
        </div>
        <div :key="14">
          <div :key="11" style="margin: 3px;background: #F2F2F2">
            <i :key="12" style="margin-left: 15px;margin-right: 5px;" class="ion-ios-search"></i>
            <input :key="13" style="height: 35px;background: #F2F2F2" type="text" placeholder="姓名/手机号"/>
          </div>
          <div :key="7" v-if="warehouseList.length>0||myData.pageNum==0">
            <van-list
              v-model="loading"
              :finished="finished"
              :offset=100
              @load="onLoad"
            >
              <div @click="choosedWarehouse(index,item.warehouseName,item.id)" v-for="(item,index) in warehouseList">
                <div style="width: 70%;height: 40px;padding-left: 15px;line-height: 40px;float: left">{{item.warehouseName}}</div>
                <i v-if="showChoosed[index]" style="float: right;font-size: 20px;margin-right: 15px;" class="ion-checkmark-round"></i>
                <div class="ok-model-border"></div>
              </div>
            </van-list>
            <div :key="8" v-if="finished&&myData.pageNum>1" style="color: #888888;text-align: center;padding: 20px;">
              到底了别滑了，真的没了.....
            </div>
          </div>
          <div :key="9" v-if="myData.pageNum!=0&&warehouseList.length==0&&finished==true"  style="color: #888888;text-align: center;padding: 20px;">
            没有您要找的供应商......
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
  import {getWarehouseList} from '@/service/getData.js';
  import { List } from 'vant';
  import Vue from 'vue'
  Vue.use(List);
  export default {
    mixins: [],     //混合
    components: {},//注册组件
    data() {         //数据
      return {
        loading: false,
        finished: false,
        warehouseList:[],
        showChoosed:[],
        myData:{paging:true,pageNum:0,limit:25},
      };
    },
    props:{
      parentData:{}
    },
    computed: {},  //计算属性
    created() {
    },   //创建
    mounted() {
    },   //挂载
    methods: {
      choosedWarehouse(index,warehouseName,warehouseId){
        for(var i=0;i<this.warehouseList.length;i++){
          this.showChoosed[i]=false;
        }
        this.showChoosed[index]=true;
        Vue.set(this.showChoosed,index,this.showChoosed[index]);
        this.parentData.warehouseName=warehouseName;
        this.parentData.warehouseId=warehouseId;
        this.parentData.warehouseShow=false;
      },
      onLoad() {//上划加载
        this.myData.pageNum++;
        getWarehouseList(this.myData).then(
          response=>{
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
      reLoad(){
        this.warehouseList=[];
        this.myData.pageNum=0;
        this.finished=false;
        this.onLoad();
      }
    },   //方法
    watch: {
      // 'parentData.customerShow':function (newValue,oldValue) {
      //   if(newValue){
      //     this.onLoad();
      //   }
      // }
    }      //监听
  }
</script>

<style scoped>

</style>
