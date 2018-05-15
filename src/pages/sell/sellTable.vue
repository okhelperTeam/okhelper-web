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
          <router-link to="/product/SearchProduct" style="color: cornflowerblue;width: 50%;height: 50px;display: block;float: left;text-align: center;">
            <i class="ion-android-add"></i>
          </router-link>
        </div>
      </div>

      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">客户实付金额
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="number"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">优惠金额
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="number"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">客户欠款
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="number"/>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">本单客户积分
        <input disabled style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0" type="number" v-model="integral"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">备注
        <input style="height: 50px;font-size: 16px;width: 70%;margin-left: 20px;" type="text"/>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 40px;bottom: 0;position: fixed;border-top:1px solid #F2F2F2 ">
        <div style="margin-left:20px;font-size: 14px;height: 40px;line-height:40px;background: white;width: 60%;display: block;float: left;" v-model="choosedProductMap.length">合计：{{choosedProductMap.length}}件&nbsp;&nbsp;&nbsp;<span style="color: orange;">￥{{totalMoney}}</span></div>
        <div @click="$router.push({path:'/checkstand'})" style="width: 30%;height: 40px;display: block;float: right;color:white;background: cadetblue;text-align:center;line-height:40px;font-size: 14px;">出售</div>
      </div>


      <ok-customer
        :parentData="parentData"
      ></ok-customer>
    </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
  import sellTableItem from '@/pages/sell/sellTableItem';
  import {getCustomerList,getProductById} from '@/service/getData.js'
  import Scan from '@/components/common/scan';
  import Vue from 'vue';
  import SearchCustomer from "../customer/searchCustomer";
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
              totalMoney:0,
              customerList:[],
              P:{isOpen:false}
            };
        },
        computed: {
          integral(){
            return parseInt(this.totalMoney);
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
          }
        },   //方法
        watch: {
          choosedProductMap: {
              handler: function (val, oldVal) {
                var total=0;
                let x=val
                for(let key in val){
                    total+=(x[key].retailPrice * x[key].discounts /100 * x[key].productCount)
                  }
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
                      alert(1)
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
