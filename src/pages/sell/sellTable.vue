/**
* Created by ztt on 2018/4/19.
*/
<template>
    <div id="">
      <div class="back-bar">
        <router-link to="/sell" class="back-bar-backBtn">&lt;&nbsp;销售
        </router-link>
        <div class="back-bar-name">
          销售单
        </div>
      </div>
      <div style="width: 100%;height: 60px;margin-top: 56px;">
        <div style="width: 20%;height: 60px;color: #dd0a20;display: block;float: left;text-align: center;line-height: 60px;font-size: 16px;">客户*</div>
        <div style="width: 80%;height: 40px;display: block;float: left;">
          <select  style="width: 70%;height: 60px;text-align: center;font-size: 12px;">
            <option v-for="item in customerList" v-model="item.customerName">{{item.customerName}}</option>
          </select>
          <hr>
        </div>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div>
        <div v-if="choosedProductList.length==0">
          <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">选择商品</div>
          <div class="ok-model-border"></div>
        </div>
        <div v-if="choosedProductList.length>0">
          <div style="height: auto;margin-left: 15px;margin-right: 15px;">
            <div style="border-bottom: 1px dashed #F2F2F2">
              <div style="font-size: 14px;color: #108ee9;margin-left: 10px;height: 35px;line-height: 35px;">
                <div @click="editChoosedProductList" style="width: 25%;">
                  <i style="font-size: 20px;" class="ion-ios-compose-outline"></i>&nbsp;<span>{{editText}}</span>
                </div>
              </div>
            </div>
            <div v-for="(item) in choosedProductList">
              <sell-table-item
                :productId="item.productId"
                :productName="item.productName"
                :productNumber="item.productNumber"
                :productColor="item.productColor"
                :productSize="item.productSize"
                :editText="editText"
                :productCount="item.productCount"
                :retailPrice="item.retailPrice"
                :discounts="item.discounts"
                :productNotes="item.productNotes"
                @deleteProduct="deleteProduct"
              />
              </div>
            </div>
        </div>
        <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888;font-size: 30px;color: cornflowerblue">
          <div style="width: 50%;height: 50px;display: block;float: left;text-align: center;">
            <i class="ion-android-expand"></i>
          </div>
          <router-link to="/product/SearchProduct" style="color: cornflowerblue;width: 50%;height: 50px;display: block;float: left;text-align: center;">
            <i class="ion-android-add"></i>
          </router-link>
        </div>
      </div>

      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">客户实付金额
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="text"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">优惠金额
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="text"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">客户欠款
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="text"/>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">本单客户积分
        <input disabled style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0" type="text" v-model="integral"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">备注
        <input style="height: 50px;font-size: 16px;width: 70%;margin-left: 20px;" type="text"/>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 40px;bottom: 0;position: fixed;border-top:1px solid #F2F2F2 ">
        <div style="margin-left:20px;font-size: 14px;height: 40px;line-height:40px;background: white;width: 60%;display: block;float: left;" v-model="choosedProductList.length">合计：{{choosedProductList.length}}件&nbsp;&nbsp;&nbsp;<span style="color: orange;">￥{{totalMoney}}</span></div>
        <div style="width: 30%;height: 40px;display: block;float: right;color:white;background: cadetblue;text-align:center;line-height:40px;font-size: 14px;">出售</div>
      </div>
    </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
  import sellTableItem from '@/pages/sell/sellTableItem';
  import {getCustomerList} from '@/service/getData.js'
    export default {
        mixins: [],     //混合
        components: {
          'ok-back':Back,
          sellTableItem
        },//注册组件
        data() {         //数据
            return {
              choosedId:this.$route.params.productChoosedList,
              editText:'编辑',
              choosedProductList:[
                {productId:'1',productName:'商品1',productNumber:'001',productColor:'蓝色',productSize:'均码',retailPrice:100,discounts:100,productCount:15,productNotes:'',productNotes:''},
                {productId:'2',productName:'商品1',productNumber:'001',productColor:'蓝色',productSize:'均码',retailPrice:200,discounts:50,productCount:15,productNotes:'',productNotes:''},
              ],
              totalMoney:10000.56,
              customerList:[]
            };
        },
        computed: {
          integral(){
            return parseInt(this.totalMoney);
          }
        },  //计算属性
        created() {
          this.getMyCustomerList();
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          getMyCustomerList(){
            getCustomerList({
              paging:false
            }).then(response=>{
              this.customerList=response.data.results;
            },error=>{

            });
          },
          editChoosedProductList(){
            if(this.editText=='编辑'){
              this.editText='取消编辑';
            }else{
              this.editText='编辑';
            }
          },
          deleteProduct(productId){
            this.choosedProductList.remove(productId);
          }
        },   //方法
        watch: {

        }      //监听
    }
</script>

<style scoped>

</style>
