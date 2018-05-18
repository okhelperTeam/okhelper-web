/**
* Created by ztt on 2018/4/18.
*/
<template>
    <div id="" style="height: 100%;">
      <div  style="color:white;background: #C20C0C;font-size:16px;padding-top:12px;height: 56px;width: 100%;text-align: center;">
        <div style="display: block;font-size: 20px;">统计分析</div>
      </div>
      <div class="ok-border"></div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box" style="border-right:0.5px solid #F2F2F2;">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-pricetags"></i>
          </div>
          <router-link to="/statistics/client" class="ok-sellOrStore-content">
            <div>客户对账</div>
            <div class="ok-sellOrStore-subcontent">欠款对账</div>
          </router-link>
        </div>
      </div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-star"></i>
          </div>
          <router-link to="/statistics/supplier" class="ok-sellOrStore-content">
            <div>供应商对账</div>
            <div class="ok-sellOrStore-subcontent">对账</div>
          </router-link>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box" style="border-right:0.5px solid #F2F2F2;">
          <div class="ok-sellOrStore-icon">
            <i class="ion-reply"></i>
          </div>
          <div class="ok-sellOrStore-content">
            <div>经营概况</div>
            <div class="ok-sellOrStore-subcontent">每天18点自动推送</div>
          </div>
        </div>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="height: 70px;width: 100%;">
        <div style="width: 10%;height: 70px;margin-left: 20px;display: block;float: left;color: red;line-height: 70px;font-size: 25px;text-align: center;">
          <i class="ion-ios-paper"></i>
        </div>
        <div style="width: 80%;height: 70px;display: block;float: left;padding-top: 10px;">
          <div style="width: 100%" class="ok-sellOrStore-content">
            <div>销售报表</div>
            <div style="margin-top: 5px;">
              <div style="float: left;display: block" class="ok-sellOrStore-subcontent">本月销售&nbsp;&nbsp;&nbsp;<span style="color: red;">{{sellTotal.saleCount}}</span>&nbsp;&nbsp;&nbsp;笔</div>
              <div style="float: right;display: block;margin-left: 20px;" class="ok-sellOrStore-subcontent">销售金额&nbsp;&nbsp;&nbsp;<span style="color: red;">￥{{sellTotal.totalSales}}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box" style="border-right:0.5px solid #F2F2F2;">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-analytics"></i>
          </div>
          <div class="ok-sellOrStore-content">
            <div>采购报表</div>
            <div class="ok-sellOrStore-subcontent">进货统计</div>
          </div>
        </div>
      </div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box">
          <div class="ok-sellOrStore-icon">
            <i style="color: cornflowerblue;" class="ion-ios-analytics"></i>
          </div>
          <div class="ok-sellOrStore-content">
            <div>盘点报表</div>
            <div class="ok-sellOrStore-subcontent">盘点统计</div>
          </div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box" style="border-right:0.5px solid #F2F2F2;">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-analytics"></i>
          </div>
          <div class="ok-sellOrStore-content">
            <div>收款流水</div>
            <div class="ok-sellOrStore-subcontent">支付宝/微信等</div>
          </div>
        </div>
      </div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-analytics"></i>
          </div>
          <div class="ok-sellOrStore-content">
            <div>营收报表</div>
            <div class="ok-sellOrStore-subcontent">销售、欠款信息</div>
          </div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="height: 50px;width: 100%;">
        <div style="width: 10%;height: 50px;margin-left: 20px;display: block;float: left;color: red;line-height: 50px;font-size: 25px;text-align: center;">
          <i class="ion-ios-pulse-strong"></i>
        </div>
        <div style="width: 80%;height: 50px;display: block;float: left;padding-top: 13px;">
          <div style="width: 100%" class="ok-sellOrStore-content">
            <div>滞/热销商品</div>
            <router-link to="/statistics/hotSell" style="font-size: 12px;color:#888888;margin-top:-23px;float: right;margin-right: 10px;">商品销售排行&nbsp;&nbsp;></router-link>
          </div>
        </div>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <ok-footer></ok-footer>
    </div>
</template>

<script>
  const Footer = resolve => require(['@/components/footer/footer'], resolve);
  import {getSellTotal} from "@/service/getData.js"
    export default {
        mixins: [],     //混合
        components: {
          'ok-footer':Footer
        },//注册组件
        data() {         //数据
            return {
              sellTotal:{saleCount:0,totalSales:0}
            };
        },
        computed: {},  //计算属性
        created() {
          this.getSellTotal();
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          getSellTotal(){
            getSellTotal({
              range:'month'
            }).then(response=>{
              this.sellTotal=response.data;
            },error=>{});
          }
        },   //方法
        watch: {}      //监听
    }
</script>

<style scoped>

</style>
