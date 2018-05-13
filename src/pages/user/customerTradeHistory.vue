/**
* Created by lulu on 2018/5/12.
*/


<template>
  <div id="">
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div class="back-bar-name">
        交易记录
      </div>
    </div>
    <div class="ok-model-border"></div>
    <div class="ok-text-box1" style="margin-top: 56px;">
      <div class="ok-text-name" style="width: 100%">订单号：{{orderList.orderNumber}}</div><br>
      <div class="ok-text-name2" style="width: 100%;margin-left: -2px;margin-top: -15px;font-size: 13px">
        客户名：{{orderList.customerName}}&nbsp;&nbsp;&nbsp;总金额：<span style="color: red">￥{{orderList.sumPrice}}</span>
      </div>
      <div class="ok-text-name5" style="width: 100%;font-size: 13px">
        创建时间：{{orderList.createTime}}&nbsp;&nbsp;客户店名：{{orderList.customerStoreName}}
      </div>
    </div>
    <div v-if="saleOrderItemVosList.length>0||pageNum==0">
      <van-list
        v-model="loading"
        :finished="finished"
        :offset=0
        @load="onLoad"
      >
        <div v-for="(item) in saleOrderItemVosList">
          <ok-product
            :main-img="item.mainImg"
            :product-name="item.productName"
            :product-title="item.productTitle"
            :sale-price="item.salePrice"
            :sale-count="item.saleCount"
            :Id="item.id"
            :salesStock="item.salesStock"
          />
        </div>
      </van-list>
    </div>
    <div v-if="myData.pageNum!=0&&saleOrderItemVosList.length==0&&finished==true" style="color: #888888;text-align: center;padding: 20px;">
      此客户没有交易记录
    </div>
  </div>
</template>

<script>
  import {getCustomerTradeHistory} from '@/service/getData';
  import CustomerProductModel from '@/components/common/customerProductModel';
  import Vue from 'vue'
  import {List,Field} from 'vant';
  Vue.use(List).use(Field);
  export default {
    mixins: [],     //混合
    components: {
      'ok-product':CustomerProductModel
    },//注册组件
    data() {         //数据
      return {
        loading: false,
        finished: false,
        myData:{paging:true,pageNum:0,limit:6,},
        orderList:{},
        saleOrderItemVosList:[],
      };
    },
    computed: {},  //计算属性
    created() {
      this.id = this.$route.query.id;//获取上个页面传递的id,在下面获取数据的时候先提交id
      this.onLoad();
    },   //创建
    mounted() {
    },   //挂载
    methods: {
      onLoad() {//上划加载订单历史
        this.myData.pageNum++;
        getCustomerTradeHistory(this.id,this.myData).then(
          response => {
              this.orderList=response.data;
            for(var i=0;i<response.data.saleOrderItemVos.length;i++){
              this.saleOrderItemVosList.push(response.data.saleOrderItemVos[i]);
            }
            this.loading=false;
            if (response.data.lastPage) {
              this.finished = true;
            }
          }, error => {
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

</style>

