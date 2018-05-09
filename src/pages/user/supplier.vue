/**
* Created by lulu on 2018/4/22.
*/


<template>
  <div id="">
    <div class="back-bar">
      <router-link to="/user/person" style="color: white;" class="back-bar-backBtn">&lt;&nbsp;返回
      </router-link>
      <div class="back-bar-name">
        供应商管理
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
    <hr>
    <div v-if="supplierList.length>0||pageNum==0" style="margin-top: 13%">
      <van-list
        v-model="loading"
        :finished="finished"
        :offset=0
        @load="onLoad"
      >
      <div class="ok-text-box1" v-for="item in supplierList" style="float: left;height: 70px">
        <div class="ok-text-name" style="width: 70%">公司名称：{{item.supplierName}}</div><br>
        <div class="ok-text-name2">
          负责人： {{item.supplierContacts}}
        </div>
        <div class="ok-text-name5">
          供应商地址： <span style="color: red">{{item.supplierAddress}}</span>
        </div>
        <div class="manger-icon">
          <i class="ion-chevron-right"></i>
        </div>
      </div>
      </van-list>
    </div>
    <div class="ok-model-border"></div>
  </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
  import Vue from 'vue';
  import {getSupplierList} from '@/service/getData';
  import {List} from 'vant';
  Vue.use(List);
  export default {
    mixins: [],     //混合
    components: {
      'ok-back':Back
    },//注册组件
    data() {         //数据
      return {
        supplierName:'',
        supplierContacts:'',
        supplierAddress:'',
        supplierList: [],
        loading: false,
        finished: false,
        paging: true,//开启分页
        pageNum: 0,//请求页码
        limit: 5,//每页多少条
      };
    },
    computed: {},  //计算属性
    created() {
    },   //创建
    mounted() {
    },   //挂载
    methods: {
      onLoad() {//上划加载仓库信息
        this.pageNum++;
        getSupplierList({
          paging:this.paging,
          pageNum:this.pageNum,
          limit:this.limit,
        }).then(
          response=>{

            // alert(1);
            //console.log(response.data.results);
            for(var i=0;i<response.data.results.length;i++){
              this.supplierList.push(response.data.results[i]);
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
    },   //方法
    watch: {}      //监听
  }
</script>

<style scoped>
  .manger-icon{
    float: right;
    display: inline;
    font-size: 20px;
    color: #000000;
    margin-right: 10%;
    font-family: 微软雅黑;
  }
</style>
