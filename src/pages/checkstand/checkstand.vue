/**
* Created by ztt on 2018/5/12.
*收银台
*/
<template>
    <div id="">
      <div style="color: white;height:56px;background:#C20C0C;font-size: 18px;margin: 0 auto;width: 100%;text-align: center;line-height: 56px;">
        <span>收银台</span>
        <span @click="$router.back()" style="float: left;font-size: 25px;width: 56px;height: 20px;color: white;margin-left: 10px;" >
          <i class="ion-ios-arrow-left"></i><span style="font-size: 16px;position:relative;top: -3px;">&nbsp;返回</span>
        </span>
        <div style="float: right;font-size: 25px;width: 56px;height: 20px;" >
          <i class="ion-ios-close-empty"></i>
        </div>
      </div>
      <div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">销售单号</div>
        <div style="height:43px;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 14px;width: 100%;padding-left: 30px" disabled placeholder="请输入订单号" type="text" v-model="orderNumber"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">客户名称</div>
        <div style="height:43px;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 14px;width: 100%;padding-left: 30px" disabled placeholder="零售客户" type="text" v-model="customerName"/>
        </div>
      </div>
      <!-- <div class="ok-model-border"></div>
      <div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">商品数量</div>
        <div style="height:43px;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;padding-left: 30px" disabled placeholder="0" type="number"/>
        </div>
      </div> -->
      <!-- <div class="ok-border"></div>
      <div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;font-size: 12px;">整单折扣(%)</div>
        <div style="height:43px;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;padding-left: 30px"  placeholder="100" v-model="discount" type="number"/>
        </div>
      </div> -->
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">应收金额</div>
        <div style="height:43px;width:40%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;color: orange;padding-left: 30px" disabled type="number" v-model="paymoney"/>
        </div>
        <!-- <div style="height:20px;margin-top:10px;width:10%;display: block;float: left;font-size: 12px;background: orange;text-align: center;border-radius: 3px;color: white;line-height: 20px;">抹零</div>
        <div style="height:43px;width:20%;display: block;float: left;">
          <input style="height: 30px;font-size: 12px;width: 100%;padding-left: 10px;" placeholder="0.00" type="number" v-model="notSmallChange"/>
        </div> -->
      </div>
      <div class="ok-border"></div>
      <div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">结算方式</div>
        <div style="height:43px;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 14px;width: 100%;padding-left: 30px;color: black;" disabled placeholder="现金" type="text" v-model="payType"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">
        <div style="width:33%;display: block;float: left;padding-left: 20px;">收款金额</div>
        <div style="height:37px;width:40%;display: block;float: left;border-bottom: 1px solid #2D84FF;">
          <input style="height: 30px;font-size: 14px;width: 100%;color: black;" placeholder="0.00" type="number" v-model="parentData.pay1Money" />
        </div>

        <div @click="computPay1Money" style="height:20px;margin-top:10px;width:10%;display: block;float: right;font-size: 12px;background: white;text-align: center;border-radius: 3px;color: #108ee9;line-height: 20px;border: 1px solid #108ee9;margin-right: 15px;">
          全款
        </div>
      </div>
      <div style="margin-top: 5px;" class="ok-model-border"></div>
      <div v-if="showUnit">
        <div class="ok-border"></div>
        <div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">
          <div style="width:25%;display: block;float: left;padding-left: 20px;">结算方式2</div>
          <div style="height:43px;width:70%;display: block;float: left;">
            <input style="height: 30px;font-size: 14px;width: 100%;padding-left: 30px;color: black;" disabled placeholder="支付宝" type="text" v-model="payType2"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">
          <div style="width:33%;display: block;float: left;padding-left: 20px;">收款金额</div>
          <div style="height:37px;width:40%;display: block;float: left;border-bottom: 1px solid #2D84FF;">
            <input style="height: 30px;font-size: 14px;width: 100%;color: black;" placeholder="0.00" type="number" v-model="parentData.pay2Money"/>
          </div>
          <div @click="computPay2Money" style="height:20px;margin-top:10px;width:10%;display: block;float: right;font-size: 12px;background: white;text-align: center;border-radius: 3px;color: #108ee9;line-height: 20px;border: 1px solid #108ee9;margin-right: 15px;">补款</div>
        </div>
        <div style="margin-top: 5px;" class="ok-model-border"></div>
        <div style="margin:10px;float:right;background: white;padding-left: 10px;padding-right: 10px;width: auto;height: 20px;line-height:20px;color: black;font-size: 10px;">收款合计：￥{{totalMoney | formateMoney}}</div>
      </div>
      <div style="clear: both;" class="ok-model-border"></div>
      <div @click="showUnitPay" :class="[showUnit?'showunit':'']" style="margin:10px;float:right;background: #108ee9;padding-left: 10px;padding-right: 10px;width: auto;height: 20px;line-height:20px;color: white;font-size: 10px;">{{showUnit?'取消组合':'组合收款'}}</div>
      <div style="clear: both;" class="ok-border"></div>
      <!--<div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">-->
        <!--<div style="width:25%;display: block;float: left;padding-left: 20px;">欠款</div>-->
        <!--<div style="height:43px;width:40%;display: block;float: right;border-bottom: 1px solid #2D84FF;margin-right: 15px;">-->
          <!--<input style="height: 30px;font-size: 14px;width: 100%;color: black;" type="number" v-model="debtMony"/>-->
        <!--</div>-->
      <!--</div>-->
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">备注</div>
        <div style="height:43px;width:70%;display: block;float: left;border-bottom: 1px solid #2D84FF;">
          <input style="height: 30px;font-size: 14px;width: 100%;color: black;" type="text" v-model="remark"/>
        </div>
      </div>
      <div style="margin-top: 15px;" class="ok-border"></div>
      <div @click="toGatheringPage" style="position: fixed;bottom: 0px;height: 40px;width: 100%;background: #C20C0C;color: white;text-align: center;line-height: 40px;">去结账</div>
      <ok-gathering
        :parentData="parentData"
      ></ok-gathering>
    </div>
</template>

<script>
  import Gathering from '@/pages/checkstand/gathering'
    export default {
        mixins: [],     //混合
        components: {
          'ok-gathering':Gathering
        },//注册组件
        data() {         //数据
            return {
              paymoney:0.00,//应付金额
              notSmallChange:0,
              payType:'现金',
              payType2:'支付宝',
              discount:100,
              remark:'',
              showUnit:false,
              debtMony:0.00,
              parentData:{gatheringShow:false,showCashResult:false,pay1Money:'',pay2Money:''},
              orderNumber:'',
              customerName:'',
              isCash:false
            };
        },
        computed: {
          totalMoney(){
            return parseFloat(this.parentData.pay1Money)+parseFloat(this.parentData.pay2Money);
          }
        },  //计算属性
        created() {
          this.initData();
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          initData(){
            this.orderNumber=this.$route.query.orderNumber;
            this.customerName=this.$route.query.customerName;
            this.paymoney=parseFloat(this.$route.query.sumPrice).toFixed(2);
          },
          toGatheringPage(){
            if(this.parentData.pay2Money!=0&&this.parentData.pay1Money!=0){
              this.parentData.gatheringShow=true;
              this.parentData.showCashResult=true;
            }else if(this.parentData.pay2Money==0&&this.parentData.pay1Money!=0){
              alert('支付成功');
            }else if(this.parentData.pay1Money==0){
              alert('尚有欠款，是否结算');
            }

          },
          computPay1Money(){
            this.parentData.pay1Money=this.paymoney-this.notSmallChange;
          },
          computPay2Money(){
            this.parentData.pay2Money=this.paymoney-this.notSmallChange-this.parentData.pay1Money;
          },
          showUnitPay(){
            this.parentData.pay2Money=0;
            this.showUnit=!this.showUnit;
          }
        },   //方法
        watch: {}      //监听
    }
</script>

<style scoped>
  .showunit{
    background: red!important;
  }
</style>
