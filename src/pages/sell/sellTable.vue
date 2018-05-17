/**
* Created by ztt on 2018/4/19.
*/
<template>
    <div id="">
      <div class="back-bar">
        <span @click="$router.back()" class="back-bar-backBtn">&lt;&nbsp;销售
        </span>
        <div class="back-bar-name">
          销售单
        </div>
      </div>
      <div style="width: 100%;height: 60px;margin-top: 56px;">
        <div style="width: 20%;height: 60px;color: #dd0a20;display: block;float: left;text-align: center;line-height: 60px;font-size: 16px;">客户*</div>
        <div style="width: 80%;height: 40px;display: block;float: left;">
          <input style="width: 80%;height: 40px;display: block;float: left;font-size: 12px;margin-top: 8px;padding-left: 15px;" type="text" v-model="parentData.customerName"/>
          <div  @click="changeCustomerShowStatus" style="background: #108ee9;height: 20px;padding-right: 10px;padding-left: 10px;color: white;width: auto;float: right;margin-top: 20px;margin-right: 15px;border-radius: 2px;line-height: 20px;">选择</div>
        </div>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div>
        <div v-if="Object.keys(choosedProductMap).length==0">
          <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">选择商品</div>
          <div class="ok-model-border"></div>
        </div>
        <div v-else>
          <div style="height: auto;margin-left: 15px;margin-right: 15px;">
            <div style="border-bottom: 1px dashed #F2F2F2">
              <div style="font-size: 14px;color: #108ee9;margin-left: 10px;height: 35px;line-height: 35px;">
                <div @click="editchoosedProductMap" style="width: 25%;">
                  <i style="font-size: 20px;" class="ion-ios-compose-outline"></i>&nbsp;<span>{{editText}}</span>
                </div>
              </div>
            </div>
            <div v-for="(item, key, index) in choosedProductMap">
              <sell-table-item
              :editText="editText"
              :parentData="item"
              @deleteProduct="deleteProduct"/>
              </div>
            </div>
        </div>
        <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888;font-size: 30px;color: cornflowerblue">
          <div style="width: 50%;height: 50px;display: block;float: left;text-align: center;">
            <ok-scan :P="P" @scanover="scanOver"/>
            <i class="ion-android-expand" @click="P.isOpen=true"></i>
          </div>
          <div  style="color: cornflowerblue;width: 50%;height: 50px;display: block;float: left;text-align: center;">
            <i @click="$router.push({path:'/product/SearchProduct'})" class="ion-android-add"></i>
          </div>
        </div>
      </div>

      <!-- <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">客户实付金额
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="number"/>
      </div> -->
      <!-- <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888;">订单总金额
        <input style="height: 50px;font-size: 16px;width: 40%;margin-right: 40px;float: right;text-align: right" placeholder="0.00" type="number" v-model="totalDiscountedMoney" disabled/>
      </div> -->
      <div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;font-size: 12px;">整单折扣(%)</div>
        <div style="height:43px;width:70%;display: block;float: left;">
          <input  @blur="minMaxWholeDiscount"style="height: 30px;font-size: 16px;width: 100%;padding-left: 30px"  placeholder="100" v-model="wholeDiscount" type="number"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 40px;line-height: 40px;font-size: 16px;color: #888888">
        <div style="width:28%;display: block;float: left;padding-left: 20px;font-size:12px;">整单折扣后金额</div>
        <div style="height:43px;width:37%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;color: orange;padding-left: 30px" disabled type="number" v-model="discountedMoney"/>
        </div>
        <div @click="minMaxNotSmallChange" style="height:20px;margin-top:10px;width:10%;display: block;float: left;font-size: 12px;background: orange;text-align: center;border-radius: 3px;color: white;line-height: 20px;">抹零</div>
        <div style="height:43px;width:20%;display: block;float: left;">
          <input @blur="minMaxNotSmallChange" style="height: 30px;font-size: 12px;width: 100%;padding-left: 10px;" placeholder="0.00" type="number" v-model="notSmallChange"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888;">总优惠金额
        <input style="height: 50px;font-size: 16px;width: 40%;margin-right: 40px;float: right;text-align: right" placeholder="0.00" type="number" v-model="totalDiscountedMoney" disabled/>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">本单客户积分
        <input disabled style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0" type="number" v-model="integral"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">备注
        <input style="height: 50px;font-size: 16px;width: 70%;margin-left: 20px;" type="text" v-model="remarks"/>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 40px;bottom: 0;position: fixed;border-top:1px solid #F2F2F2 ">
        <div style="margin-left:20px;font-size: 14px;height: 40px;line-height:40px;background: white;width: 60%;display: block;float: left;" v-model="choosedProductMap.length">合计：{{Object.keys(choosedProductMap).length}}件&nbsp;&nbsp;&nbsp;<span style="color: orange;">￥{{shouldPayMoney}}</span></div>
        <div @click="placeOrder" style="width: 30%;height: 40px;display: block;float: right;color:white;background: cadetblue;text-align:center;line-height:40px;font-size: 14px;">出售</div>
      </div>

      <ok-customer
        :parentData="parentData"
      ></ok-customer>
    </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
  import sellTableItem from '@/pages/sell/sellTableItem';
  import {getCustomerList,getProductById,placeOrder} from '@/service/getData.js'
  import Scan from '@/components/common/scan';
  import Vue from 'vue';
  import SearchCustomer from "../customer/searchCustomer";
  import { Toast } from 'vant';
    export default {
        mixins: [],     //混合
        components: {
          'ok-back':Back,
          sellTableItem,
          'ok-customer':SearchCustomer,
          'ok-scan':Scan
        },//注册组件
        data() {         //数据
            return {
              customerName:'',
              parentData:{customerShow:false,customerName:'',customerId:''},//选择客户组件数据
              editText:'编辑',
              choosedProductMap:{},
              totalMoney:0,//单个商品折扣后总金额
              originalTotalMoney:0,//商品原价总金额
              customerList:[],
              P:{isOpen:false},
              remarks:'',
              wholeDiscount:100,
              notSmallChange:''//抹零
            };
        },
        computed: {
          discountedMoney(){//整单折扣后金额
            return parseFloat(this.totalMoney*this.wholeDiscount/100).toFixed(2);
          },
          totalDiscountedMoney(){//总优惠金额
            return parseFloat(this.originalTotalMoney-this.shouldPayMoney).toFixed(2);
          },
          shouldPayMoney(){//应付金额--sumPrice
            return parseFloat(this.discountedMoney-this.notSmallChange).toFixed(2);
          },
          integral(){//积分
            return parseInt(this.shouldPayMoney);
          }
        },  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          editchoosedProductMap(){
            if(this.editText=='编辑'){
              this.editText='取消编辑';
            }else{
              this.editText='编辑';
            }
          },
          deleteProduct(productId){
            delete this.choosedProductMap[productId];
            //强制更新
            this.choosedProductMap=Object.assign({},this.choosedProductMap);
          },
          scanOver(code){
            this.$router.push({path:'/product/searchProduct',query:{barCode:code}});
          },
          changeCustomerShowStatus(){
            this.parentData.customerShow=!this.parentData.customerShow;
          },
          placeOrder(){
            if(Object.keys(this.choosedProductMap).length==0){
              Toast({
                type:'text',
                position: 'middle',
                message: "请先添加商品"
              });
              return;
            }
            Toast({
              type:"loading",
              duration: 0,       // 持续展示 toast
              forbidClick: true, // 禁用背景点击
              loadingType: 'spinner',
              mask: true,
              message: '下单中,请稍后'
            });

            var x=this.choosedProductMap;
            var productList=[];
            for(let key in this.choosedProductMap){
              productList.push({productId:x[key].id,saleCount:x[key].productCount,salePrice:(parseFloat(x[key].retailPrice * x[key].discounts/100).toFixed(2))});
            }
            placeOrder({customerId:this.parentData.customerId,sumPrice:this.shouldPayMoney,discountPrice:this.totalDiscountedMoney,remarks:"",placeOrderItemDtos:productList})
            .then(response=>{
                Toast.clear();
                this.$router.push({path:'/checkstand',query:{saleOrderId:response.data.id,sumPrice:response.data.sumPrice,orderNumber:response.data.orderNumber,customerName:this.parentData.customerName}})
            },error=>{
              Toast.clear();
              Toast({
                type:'text',
                position: 'middle',
                message: error==null?"系统异常":error.msg
              });
            })
          },
          minMaxWholeDiscount(){
            if(this.wholeDiscount>100){
                Toast({
                  position: 'middle',
                  message: '折扣率不能大于100'
                });
              this.wholeDiscount=100;
            }

            if(this.wholeDiscount<1){
              Toast({
                position: 'middle',
                message: '折扣率不能小于1'
              });
              this.wholeDiscount=1;
            }
          },
          minMaxNotSmallChange(){
            if(this.notSmallChange>this.discountedMoney){
                Toast({
                  position: 'middle',
                  message: '抹零金额不能大于整单折扣后金额'
                });
              this.notSmallChange=this.discountedMoney;
            }

            if(this.notSmallChange<0){
              Toast({
                position: 'middle',
                message: '折扣率不能小于0'
              });
              this.wholeDiscount=0;
            }
          },
        },   //方法
        watch: {
          choosedProductMap: {
              handler: function (val, oldVal) {
                var total=0;
                var originalTotal=0;
                let x=val
                for(let key in val){
                    total+=(x[key].retailPrice * x[key].discounts /100 * x[key].productCount);
                    originalTotal+=(x[key].retailPrice * x[key].productCount);
                  }
                this.originalTotalMoney=parseFloat(originalTotal).toFixed(2);
                this.totalMoney=parseFloat(total).toFixed(2);
              },
              deep: true
            },

        } ,     //监听
        beforeRouteEnter (to, from, next) { // 缓存组件是，此方法还有效
          next(vm => {
            // vm.updateProductId=vm.$route.query.id;
            if(vm.$route.query.productChoosedList!=null){
              for(var i=0 ;i<vm.$route.query.productChoosedList.length;i++){
                getProductById(vm.$route.query.productChoosedList[i]).then(
                  response=>{
                    if(!vm.choosedProductMap.hasOwnProperty(vm.$route.query.productChoosedList[i])){
                      let productItem=Object.assign(response.data,{'discounts':100},{'productCount':1});
                      vm.choosedProductMap[productItem.id]=productItem;
                      vm.choosedProductMap=Object.assign({},vm.choosedProductMap);
                    }else {
                      alert(1111111)
                    }
                  },error=>{
                    console.log(error.msg);
                  }
                );
              }
            }
          })
        }
    }
</script>

<style scoped>

</style>
