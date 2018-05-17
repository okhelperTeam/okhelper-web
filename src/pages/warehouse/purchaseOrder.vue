/**
* Created by lulu on 2018/4/26.
*/

<template>
  <div id="">
    <div class="back-bar">
        <span @click="$router.back()" class="back-bar-backBtn">&lt;&nbsp;库存
        </span>
      <div class="back-bar-name">
        入库单
      </div>
    </div>
    <div style="width: 100%;height: 60px;margin-top: 56px;">
      <div style="width: 20%;height: 60px;color: #dd0a20;display: block;float: left;text-align: center;line-height: 60px;font-size: 16px;">供应商*</div>
      <div style="width: 80%;height: 40px;display: block;float: left;">
        <input style="width: 80%;height: 40px;display: block;float: left;font-size: 12px;margin-top: 8px;padding-left: 15px;" type="text" v-model="parentData.supplierName"/>
        <div  @click="changeSupplierShowStatus" style="background: #108ee9;height: 20px;padding-right: 10px;padding-left: 10px;color: white;width: auto;float: right;margin-top: 20px;margin-right: 15px;border-radius: 2px;line-height: 20px;">选择</div>
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
            <purchase-order-item
              :editText="editText"
              :parentData="item"
              @deleteProduct="deleteProduct"
              @choosewoarehouseOver="choosewoarehouseOver"
              />
          </div>
        </div>
      </div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888;font-size: 30px;color: cornflowerblue">
        <div style="width: 50%;height: 50px;display: block;float: left;text-align: center;">
          <ok-scan :P="P" @scanover="scanOver"/>
          <i class="ion-android-expand" @click="P.isOpen=true"></i>
        </div>
        <div  style="color: cornflowerblue;width: 50%;height: 50px;display: block;float: left;text-align: center;">
          <i @click="$router.push({path:'/warehouse/searchStockProduct'})" class="ion-android-add"></i>
        </div>
      </div>
    </div>
    <div class="ok-model-border"></div>
    <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">备注
      <input style="height: 50px;font-size: 16px;width: 70%;margin-left: 20px;" type="text" v-model="remarks"/>
    </div>
    <div style="clear: both" class="ok-border"></div>
    <div style="width: 100%;height: 40px;bottom: 0;position: fixed;border-top:1px solid #F2F2F2 ">
      <div style="margin-left:20px;font-size: 14px;height: 40px;line-height:40px;background: white;width: 60%;display: block;float: left;" v-model="choosedProductMap.length">合计：{{Object.keys(choosedProductMap).length}}件&nbsp;&nbsp;&nbsp;<span style="color: orange;">￥{{discountedMoney}}</span></div>
      <div @click="placeOrder" style="width: 30%;height: 40px;display: block;float: right;color:white;background: cadetblue;text-align:center;line-height:40px;font-size: 14px;">采购</div>
    </div>

    <ok-supplier
      :parentData="parentData"
    ></ok-supplier>
  </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
  import purchaseOrderItem from '@/pages/warehouse/purchaseOrderItem';
  import {getSupplierList,getProductById,placeStorage} from '@/service/getData.js'
  import Scan from '@/components/common/scan';
  import SearchSupplier from "../customer/searchSupplier";
  import { Toast } from 'vant';

  export default {
    mixins: [],     //混合
    components: {
      'ok-back':Back,
      purchaseOrderItem,
      'ok-supplier':SearchSupplier,
      'ok-scan':Scan
    },//注册组件
    data() {         //数据
      return {
        supplierName:'',
        parentData:{supplierShow:false,supplierName:'',supplierId:''},//选择客户组件数据
        editText:'编辑',
        choosedProductMap:{},
        totalMoney:0,//单个商品折扣后总金额
        originalTotalMoney:0,//商品原价总金额
        supplierList:[],
        P:{isOpen:false},
        remarks:'',
      };
    },
    computed: {
      discountedMoney(){//整单折扣后金额
        return parseFloat(this.totalMoney).toFixed(2);
      },
    }, //计算属性
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
      changeSupplierShowStatus(){
        this.parentData.supplierShow=!this.parentData.supplierShow;
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
        Toast.loading({
          duration: 0,       // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          loadingType: 'spinner',
          mask: true,
          message: '采购中,请稍后'
        });

        var x=this.choosedProductMap;
        var productList=[];
        for(let key in this.choosedProductMap){
          productList.push({warehouseId:x[key].warehouseId,productId:x[key].id,storageCount:x[key].productCount,storagePrice:(parseFloat(x[key].storagePrice).toFixed(2)),
            productDate:x[key].productDate,shelfLife:x[key].shelfLife,remarks:x[key].remarks});
        }
        placeStorage({supplierId:this.parentData.supplierId,remarks:"",storageDetail:productList})
          .then(response=>{
            Toast.clear();
            Toast({
              type:'text',
              position: 'middle',
              message: '采购成功'
            });
            this.$router.push({path:'/warehouse/purchaseHistory'});
          },error=>{
            Toast.clear();
            Toast({
              type:'text',
              position: 'middle',
              message: error==null?"系统异常!":error.msg
            });
          })
      },
      choosewoarehouseOver(){
        this.choosedProductMap=Object.assign({},this.choosedProductMap)
      }
    },   //方法
    watch: {
      choosedProductMap: {
        handler: function (val, oldVal) {
          var total=0;
          var originalTotal=0;
          let x=val
          for(let key in val){
            total+=(x[key].storagePrice  * x[key].productCount);
            originalTotal+=(x[key].storagePrice * x[key].productCount);
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
                  let productItem=Object.assign(response.data,{productCount:1},{warehouseId:''},{warehouseShow:false});
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
