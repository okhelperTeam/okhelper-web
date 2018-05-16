/**
* Created by ztt on 2018/4/14.
*/
<template>
  <div id="">
    <div class="back-bar">
      <router-link to="/home" style="color: white;" class="back-bar-backBtn">&lt;&nbsp;返回
      </router-link>
      <div class="back-bar-name">
        员工管理
      </div>
      <div class="back-bar-cancelBtn">
        <div @click="$router.push({path:'/employee/employeeInfo'})" style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-plus-empty"></i>
        </div>
        <div style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-search"></i>
        </div>
      </div>
    </div>
    <div class="ok-model-border"></div>
    <div style="margin-top:56px;width: 100%;height: 34px;background: #F2F2F2;">
      <div @click="choosedStartOrStop(1)" :class="{isActive:isStart}" style="display:block;float:left;width: 50%;height: 28px;line-height:28px;text-align:center;background: white;color:black;border-right: 1px solid #F2F2F2">已启用（{{isStartCount}}）</div>
      <div @click="choosedStartOrStop(2)" :class="{isActive:isStop}" style="display:block;float:left;width: 50%;height: 28px;line-height:28px;text-align:center;background: white;color:black;border-right: 1px solid #F2F2F2">已停用（{{isStopCount}}）</div>
    </div>
    <div class="ok-model-border"></div>
    <div v-if="employeeList.length>0||myData.pageNum==0||loading==true">
      <van-list
        v-model="loading"
        :finished="finished"
        :offset=100
        @load="onLoad"
      >
        <div v-for="(item,index) in employeeList">
          <div class="employee-info-box" style="height: 80px;width: auto;display: block;">
            <div style="display: block;float: left;width: 30%;text-align: center;height:80px;line-height: 80px;">
              <img :src="item.userAvatar | defaultImg" width="70px" height="70px"/>
            </div>
            <div style="display: block;float: left;width: 50%;height:80px;padding-top:20px;">
              <div>
                <div style="display: block;float: left;font-size: 16px;">{{item.userName}}</div>
                <div style="display: block;float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;margin-left: 10px;">{{item.userNike}}</div>
                <div style="display: block;float: left;margin-left: 10px;margin-top: 2px;">
                  <i v-if="item.userSex=='男'" style="color: #108ee9;" class="ion-male"></i>
                  <i v-if="item.userSex=='女'" style="color: hotpink;" class="ion-female"></i>
                </div>
              </div>
              <div style="clear: both;">手机号：{{item.userPhone==''||item.userPhone==null?'暂无':item.userPhone}}</div>
            </div>
            <div style="font-size:18px;line-height:80px;height:80px;display: block;float: left;width: 20%;height:80px;text-align: center;">
              <i class="ion-ios-arrow-right"></i>
            </div>
          </div>
          <div class="ok-model-border"></div>
        </div>
      </van-list>
      <div v-if="finished&&myData.pageNum>1" style="color: #888888;text-align: center;padding: 20px;">
        到底了别滑了，真的没了.....
      </div>
    </div>
    <div v-if="myData.pageNum!=0&&employeeList.length==0&&finished==true"  style="color: #888888;text-align: center;padding: 20px;">
      没有您要找的员工......
    </div>
  </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
  import Vue from 'vue';
  import {getEmployeeList} from '@/service/getData';
  import { List } from 'vant';
  Vue.use(List);
  export default {
    mixins: [],     //混合
    components: {
      'ok-back':Back
    },//注册组件
    data() {         //数据
      return {
        loading: false,
        finished: false,
        isStart:true,
        isStop:false,
        isStartCount:0,
        isStopCount:0,
        employeeList:[],
        myData:{paging:true,pageNum:0,limit:8,deleteStatus:1,orderBy:'create_time desc'},
      };
    },
    computed: {},  //计算属性
    created() {
    },   //创建
    mounted() {
    },   //挂载
    methods: {
      getStopEmployeeCount(){
        //请求启用员工人数
        alert(this.myData.deleteStatus);
        getEmployeeList(this.myData).then(
          response=>{
            this.isStartCount=response.data.total;
          },error=>{
            console.log(error.response.msg);
          }
        );
      },
      getStartEmployeeCount(){
        //请求停用员工人数
        this.myData.deleteStatus=0;
        alert(this.myData.deleteStatus);
        getEmployeeList(this.myData).then(
          response=>{
            this.isStopCount=response.data.total;
          },error=>{
            console.log(error.response.msg);
          }
        );
      },
      choosedStartOrStop(n){//切换停用启用条件
        this.isStart=false;
        this.isStop=false;
        switch (n){
          case 1:this.isStart=true;this.myData.deleteStatus=1;this.reLoad();break;
          case 2:this.isStop=true;this.myData.deleteStatus=0;this.reLoad();break;
          default:this.isStart=true;this.myData.deleteStatus=1;this.reLoad();
        }
      },
      onLoad() {//上划加载员工
        this.myData.pageNum++;
        if(this.myData.pageNum==1){
          //请求启用员工人数
          getEmployeeList(Object.assign(this.myData,{pageNum:1,deleteStatus:1})).then(
            response=>{
              this.isStartCount=response.data.total;
              if(this.isStart){
                for(var i=0;i<response.data.results.length;i++){
                  this.employeeList.push(response.data.results[i]);
                }
                this.loading=false;
                if (response.data.lastPage) {
                  this.finished = true;
                }
              }
            },error=>{
              this.loading=false;
              this.finished = true;
              console.log(error.msg);
            }
          );
          //请求停用员工人数
          setTimeout(()=>{
            getEmployeeList(Object.assign(this.myData,{pageNum:1,deleteStatus:0})).then(
              response=>{
                this.isStopCount=response.data.total;
                if(this.isStop){
                  for(var i=0;i<response.data.results.length;i++){
                    this.employeeList.push(response.data.results[i]);
                  }
                  this.loading=false;
                  if (response.data.lastPage) {
                    this.finished = true;
                  }
                }
              },error=>{
                this.loading=false;
                this.finished = true;
                console.log(error.msg);
              }
            );
          },200)
        }else {
          getEmployeeList(this.myData).then(
            response=>{
              for(var i=0;i<response.data.results.length;i++){
                this.employeeList.push(response.data.results[i]);
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
      reLoad(){
        this.employeeList=[];
        this.myData.pageNum=0;
        this.finished=false;
        this.onLoad();
      },
    },   //方法
    watch: {}      //监听
  }
</script>

<style scoped>
  .isActive{
    color: white!important;
    background: #C20C0C!important;
  }
</style>
