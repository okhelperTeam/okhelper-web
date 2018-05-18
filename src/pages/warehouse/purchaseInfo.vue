/**
* Created by lulu on 2018/5/7.
*/


<template>
  <div id="">
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div class="back-bar-name">
        采购历史详情
      </div>
    </div>
    <div style="margin-top: 56px">
      <div class="ok-model-text-box">
        <div class="ok-text-first ok-text-box">
          <div class="ok-text-name">订单号：</div>
          <div class="ok-text-textBox" style="margin-top: 3%">
            <span>{{purchaseOrderInfo.orderNumber}} </span>
          </div>
        </div>
        <div class="ok-text-box">
          <div class="ok-text-name" style="width: 35%">供应商公司名：</div>
          <div class="ok-text-textBox" style="margin-top: 3%;width: 50%">
            <span>{{purchaseOrderInfo.supplier.name}}</span>
          </div>
        </div>
        <div class="ok-text-box">
          <div class="ok-text-name">入库员名称：</div>
          <div class="ok-text-textBox" style="margin-top: 3%">
            <span>{{purchaseOrderInfo.stockiner.name}}</span>
          </div>
        </div>
      </div>
      <!--<div class="ok-border"></div>-->
      <div>
        <div class="ok-text-box" style="height: 30px">
          <div class="ok-text-name">创建时间：</div>
          <div class="ok-text-textBox" style="margin-top: 3%">
            <span>{{purchaseOrderInfo.createTime}}</span>
          </div>
        </div>
        <div style="margin-top: -28px;float: left">
        <div v-if="storageDetailList.length>0||pageNum==0">
            <div v-for="item in storageDetailList" class="ok-text-box" style="float: left;height: 80px">
              <div class="ok-text-name" >商品名称：<span style="color: #C20C0C;" class="ok-product-details-name">{{item.product.name}}</span></div><br>
                <div class="ok-text-name2" style="margin-left: 1%;margin-top: -3%;width: 100%">
                  仓库名称：<span style="color: #C20C0C">{{item.warehouse.name}}</span>
                </div>
              <div class="ok-text-name2" style="margin-left: 1%;margin-top: -5%;width: 100%">
                商品数量：<span style="color: #C20C0C">{{item.storageCount}}</span>   <span style="margin-left: 3%">进货价：<span style="color: #C20C0C">{{item.storagePrice}}</span></span>
              </div>
              <div class="ok-text-name2" style="margin-left: 1%;margin-top: -5%;width: 100%">
                生产日期：<span style="color: #C20C0C">{{item.productDate}}</span>   <span style="margin-left: 3%">保质期：<span style="color: #C20C0C">{{item.shelfLife}}</span></span>
              </div>
            </div>
        </div>
        </div>
        <div class="ok-text-box" style="float: left;margin-top: 30px;">
          <div class="ok-text-name">总金额：</div>
          <div class="ok-text-textBox" style="margin-top: 3%">
            <span>{{purchaseOrderInfo.totalPrice}}</span>
          </div>
        </div>

        <div class="ok-text-box">
          <div class="ok-text-name">描述：</div>
          <div class="ok-text-textBox" style="margin-top: 3%">
            <span>{{purchaseOrderInfo.remarks}} </span>
          </div>
        </div>
        <!--<div class="ok-text-box">-->
        <!--<div class="ok-text-name">备注</div>-->
        <!--<div class="ok-text-textBox">-->
        <!--<input class="ok-text-text" type="text"/>-->
        <!--<hr>-->
        <!--</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Button} from 'vant';
  import {getPurchaseOrderInfo} from '@/service/getData';
  Vue.use(Button);
  export default {
    name: "purchaseInfo",
    data() {
      return {
        purchaseOrderInfo:{},
        storageDetailList:[],
      }
    },
    created() {
      this.orderNumber = this.$route.query.orderNumber;//获取上个页面传递的id,在下面获取数据的时候先提交id
      this.getPurchaseInfoByNumber();
    },
    methods: {
      getPurchaseInfoByNumber() {
        getPurchaseOrderInfo(
          this.orderNumber
        ).then(
          response => {
            //console.log(response.data);
            this.purchaseOrderInfo = response.data;
            for(var i=0;i<response.data.storageDetail.length;i++){
              this.storageDetailList.push(response.data.storageDetail[i]);
            }

          }, error => {
            console.log(error.msg);
          }
        );
      }
    }
  }
</script>

<style scoped>
  .ok-product-details-name{
    width:100%;display: block;float: left;font-size: 14px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;margin-top: -48px;margin-left: 75px;
  }
</style>
