/**
* Created by lulu on 2018/4/22.
*/


<template>
  <div id="">
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div class="back-bar-name">
        供应商管理
      </div>
      <div class="back-bar-cancelBtn">
        <router-link to="/user/addSupplier" style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-plus-empty"></i>
        </router-link>
        <div style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-search"></i>
        </div>
      </div>
    </div>
    <div v-if="supplierList.length>0||pageNum==0" style="margin-top: 56px">
      <van-list
        v-model="loading"
        :finished="finished"
        :offset=0
        @load="onLoad"
      >
      <div class="ok-text-box1" v-for="item in supplierList" style="float: left;height: 70px">
        <div @click="pushSupplierId(item.id)">
        <div class="ok-text-name" style="width: 70%">公司名称：{{item.supplierName}}</div><br>
        <div class="ok-text-name2" >
          负责人： {{item.supplierContacts}}
        </div>
        <div class="ok-text-name5" >
          供应商地址： <span style="color: red">{{item.supplierAddress}}</span>
        </div>
        <div class="manger-icon">
          <i class="ion-chevron-right"></i>
        </div>
        </div>
        <div class="ok-model-border"></div>
      </div>
      </van-list>
    </div>
    <div v-else style="width: 100%;text-align: center;padding-bottom: 20px;margin-top: 25%">
      <router-link to="/warehouse/addWarehouse">
        <div style="width:30%;border: 1px solid black;border-radius: 5px;height: 40px;padding-left:10px;padding-right:10px;line-height: 40px;text-align: center;margin: 0 auto;">
          去新增供应商
        </div>
      </router-link>
    </div>
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
      pushSupplierId(id){
        this.$router.push({path: '/user/supplierInfo',query: {id:id,}});
      },
      onLoad() {//上划加载供应商信息
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

            console.log(error.msg);
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
    margin-top: -6%;
  }
</style>
