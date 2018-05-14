/**
* Created by lulu on 2018/4/22.
*/


<template>
  <div id="">
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div class="back-bar-name">
        客户管理
      </div>
      <div class="back-bar-cancelBtn">
        <router-link to="/user/addCustomer" style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-plus-empty"></i>
        </router-link>
        <div style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-search"></i>
        </div>
      </div>
    </div>
    <hr>
    <div style="margin-top: 56px;" >
      <div v-if="customerList.length==0"></div>
      <div class="ok-text-box1" v-for="item in customerList">
        <router-link :to="{path: '/user/customerInfo',query: {id:item.id}}">
        <div class="ok-text-name" style="width: 100%">客户名：{{item.customerName}}</div><br>
        <div class="ok-text-name2">
          客户分类： {{item.customerLevel}}<span style="margin-left: 3%">客户积分： {{item.customerScore}}</span>
        </div>
        <div class="ok-text-name3">
          客户地址： <span style="color: red">{{item.customerAddress}}</span>
        </div>
        <div class="manger-icon">
          <i class="ion-chevron-right"></i>
        </div>
        </router-link>
        <div class="ok-model-border"></div>
      </div>
    </div>
    <div class="ok-model-border"></div>
  </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
  import Vue from 'vue';
  import {getCustomerList} from '@/service/getData';
  import {List,Field} from 'vant';
  Vue.use(List).use(Field);
  export default {
    mixins: [],     //混合
    components: {
      'ok-back':Back
    },//注册组件
    data() {         //数据
      return {
        customerName:'',
        customerLevel:'',
        customerScore:'',
        customerAddress:'',
        customerList: [],
        loading: false,
        finished: false,
        paging: true,//开启分页
        pageNum: 0,//请求页码
        limit: 5,//每页多少条
      };
    },
    computed: {},  //计算属性
    created() {
      this.onLoad();
    },   //创建
    mounted() {
    },   //挂载
    methods: {
      onLoad() {//上划加载供应商信息
        this.pageNum++;
        getCustomerList({
          paging:this.paging,
          pageNum:this.pageNum,
          limit:this.limit,
        }).then(
          response=>{

            // alert(1);
            //console.log(response.data.results);
            for(var i=0;i<response.data.results.length;i++){
              this.customerList.push(response.data.results[i]);
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
    color: black;
    margin-right: 10%;
    margin-top: -14%;
    font-family: 微软雅黑;
  }
</style>
