/**
* Created by ztt on 2018/5/6.
*--供应商对账
*/
<template>
    <div id="">
      <div  style="color:white;background: #C20C0C;font-size:18px;padding-top:12px;height: 56px;width: 100%;text-align: center;">
        <div style="width: 20%;font-size:16px;display: block;float: left;height: 32px;line-height: 32px;">
          <router-link to="/statistics">&lt;&nbsp;返回</router-link>
        </div>

        <div style="width: 60%;display: block;float: left;height: 32px;line-height: 32px;">供应商对账</div>
        <div style="width: 20%;display: block;float: left;height: 32px;line-height: 32px;" >
          <!--<router-link to="/product/SearchProduct" style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">-->
            <!--<i class="ion-ios-search"></i>-->
          <!--</router-link>-->
        </div>
      </div>
      <div style="height: 40px;width: 100%;padding: 5px;">
        <div v-if="true" style="margin-left: 5px;margin-right: 5px;">
          <div style="width:100%;color: lightcoral;background: #F2F2F2;height: 100%;text-align: center;height: 30px;line-height: 30px;">
            <i class="ion-android-search"></i>
            <span>姓名/手机号</span>
          </div>
        </div>
        <div v-else>
          <div>
            <i class="ion-android-search"></i>
            <input class="header-bar-search-text"  v-model="searchProductName" type="text" placeholder="姓名/手机号"/>
          </div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div>
        <ul style="width: 100%;list-style:none;">
          <li class="ok-client-li" >
            <span>全部供应商:</span><span style="color: orangered;">&nbsp;&nbsp;&nbsp;&nbsp;{{supplierDebtList.length}}</span>
          </li>
          <!--<li class="ok-client-li" >-->
            <!--<span>欠款金额合计:</span><span style="color: orangered;">&nbsp;&nbsp;&nbsp;&nbsp;￥999.00</span>-->
          <!--</li>-->
        </ul>
      </div>
      <div class="ok-model-border"></div>
      <van-list
        v-model="loading"
        :finished="finished"
        :offset=10
        @load="onLoad"
      >
        <div v-for="(item,index) in supplierDebtList">
          <div style="width: 65%;display: block;float: left;height: 56px;padding-left: 15px;padding-top: 10px;">
            <span>{{item.supplierName}}</span><span style="background: orange;color: white;margin-left: 10px;padding: 3px;border-radius: 5px;height: 16px;line-height: 16px;font-size: 12px;">{{item.supplierContacts}}</span>
            <div style="font-size: 12px;color: #888888;">手机号：{{item.supplierPhone}}</div>
          </div>
          <div style="width: 35%;display: block;float: right;height: 56px;font-size: 12px;color: #888888;">
            <div style="margin-right:10px;float: right;line-height: 56px;"><i class="ion-chevron-right"></i></div>
            <div style="font-size:14px;margin-right:10px;float: right;height: 24px;border-radius:5px;color: orangered;margin-top: 16px;text-align: center;line-height: 24px;">0.00</div>
          </div>
          <div class="ok-model-border"></div>
        </div>
      </van-list>
      <div class="ok-model-border"></div>
    </div>
</template>

<script>
  import {getSupplierDebtList} from "@/service/getData.js"
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
              supplierDebtList:[],
              myData:{paging:true,pageNum:0,limit:10,orderBy:'create_time desc'},
            };
        },
        computed: {},  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          onLoad(){
            this.myData.pageNum++;
            getSupplierDebtList(this.myData).then(
              response=>{
                for(var i=0;i<response.data.results.length;i++){
                  this.supplierDebtList.push(response.data.results[i]);
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
        },   //方法
        watch: {}      //监听
    }
</script>

<style scoped>
  .ok-client-li{
    /*width: 50%;*/margin-left: 15px;
    height: 36px;display: block;float:left;background: white;text-align: center;line-height: 36px;
  }
</style>
