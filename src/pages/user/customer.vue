/**
* Created by lulu on 2018/4/22.
*/


<template>
  <div id="">
    <div class="back-bar">
      <router-link to="/user/person" style="color: white;" class="back-bar-backBtn">&lt;&nbsp;返回
      </router-link>
      <div class="back-bar-name">
        客户管理
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
    <div style="margin-top: 13%;float: left" v-if="customerList.length>0||pageNum==0">
      <div class="ok-text-box1" v-for="item in customerList">
        <div class="ok-text-name">客户名：{{item.customerName}}</div><br>
        <div class="ok-text-name2">
          客户分类： 普通用户{{item.customerLevel}}
        </div>
        <div class="ok-text-name3">
          客户积分： 14500{{item.customerScore}}
        </div>
        <div class="ok-text-name4">
          客户地址： <span style="color: red">{{item.customerAddress}}</span>
        </div>
        <div class="manger-icon">
          <i class="ion-chevron-right"></i>
        </div>
      </div>

      <br><br>
      <hr>
      <!--<div class="ok-text-box1">-->
        <!--<div class="ok-text-name">罗亚东</div><br>-->
        <!--<div class="ok-text-name2">-->
          <!--客户分类： 重要用户-->
        <!--</div>-->
        <!--<div class="ok-text-name3">-->
          <!--客户积分： 768900-->
        <!--</div>-->
        <!--<div class="ok-text-name4">-->
          <!--客户欠款： <span style="color: red">￥77889900.86</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="manger-icon">-->
        <!--<i class="ion-chevron-right"></i>-->
      <!--</div>-->
      <!--<br><br>-->
      <!--<hr>-->
      <!--<div class="ok-text-box1">-->
        <!--<div class="ok-text-name">陈晨</div><br>-->
        <!--<div class="ok-text-name2">-->
          <!--客户分类： 重要用户-->
        <!--</div>-->
        <!--<div class="ok-text-name3">-->
          <!--客户积分： 450090-->
        <!--</div>-->
        <!--<div class="ok-text-name4">-->
          <!--客户欠款： <span style="color: red">￥0.0</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="manger-icon">-->
        <!--<i class="ion-chevron-right"></i>-->
      <!--</div>-->
      <!--<br><br>-->
      <!--<hr>-->
      <!--<div class="ok-text-box1">-->
        <!--<div class="ok-text-name">任云</div><br>-->
        <!--<div class="ok-text-name2">-->
          <!--客户分类： 普通用户-->
        <!--</div>-->
        <!--<div class="ok-text-name3">-->
          <!--客户积分： 4500-->
        <!--</div>-->
        <!--<div class="ok-text-name4">-->
          <!--客户欠款： <span style="color: red">￥9.86</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="manger-icon">-->
        <!--<i class="ion-chevron-right"></i>-->
      <!--</div>-->
      <!--<br><br>-->
      <!--<hr>-->
    </div>
    <div class="ok-model-border"></div>
  </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
  import Vue from 'vue';
  import {getCustomerList} from '@/service/getData';
  import {List} from 'vant';
  Vue.use(List);
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
            console.log(response.data.results);
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
    font-size: 25px;
    color: #EAEAEA;
    margin-right: 10%;
    margin-top: -5%;
    font-family: 微软雅黑;
  }
</style>
