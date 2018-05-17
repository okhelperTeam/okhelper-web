/**
* Created by lulu on 2018/5/16.
*/


<template>
  <div>
    <div style="border-bottom: 1px dashed #F2F2F2;height: 26px;line-height: 26px;">
      <span style="font-weight: bolder;">{{parentData.productName}}<span v-if="parentData.productNumber!=null&&parentData.productNumber!=''" style="color: #108ee9">({{parentData.productNumber}})</span></span>
      <!--<i style="color: #108ee9;margin-left: 15px;" class="ion-edit"></i>-->
    </div>
    <div style="border-bottom: 1px dashed #F2F2F2">
      <ul style="list-style: none;height: 36px;line-height: 36px;width: 100%;font-size: 12px;">
        <li style="display: block;float: left;width: 10%;">
          <div v-if="editText=='编辑'">
            <div @click="showNoteOrPrice(1)" style="height: 26px;width: 26px;border-radius: 13px;color:white;background: #F2F2F2;font-size:10px;text-align: center;margin-top: 5px;line-height: 24px;">备</div>
          </div>
          <div v-else>
            <div @click="deleteProduct" style="height: 26px;width: 26px;border-radius: 13px;color:white;background: red;font-size:10px;text-align: center;margin-top: 5px;line-height: 26px;">一</div>
          </div>
        </li>
        <li style="display: block;float: left;width: 20%;text-align: center;">
          <div><span v-if="productAttribute.productColor!=null&&productAttribute.productColor!=''">{{productAttribute.productColor}}</span><span v-else>颜色：无</span></div>
        </li>
        <li style="display: block;float: left;width: 20%;text-align: center;">
          <div><span v-if="productAttribute.productSize!=null&&productAttribute.productSize!=''">{{productAttribute.productSize}}</span><span v-else>尺寸：无</span></div>
        </li>
        <li style="display: block;float: left;width: 20%;text-align: center;">
          <div>￥{{discountPrice}}</div>
        </li>
        <li style="display: block;float: left;width: 20%;text-align: center;">
          <div>{{parentData.productCount}}</div>
        </li>
        <li style="display: block;float: left;width: 10%;color: #575757;">
          <i @click="showNoteOrPrice(2)" :class="[isPriceOpen?'ion-chevron-up':'ion-chevron-down']"></i>
        </li>
      </ul>
      <div v-show="isPriceOpen">
        <ul style="list-style: none;background: #F2F2F2;width: 100%;height:100px;padding-top:5px;text-align: center;">
          <li class="sell-table-price-detail-open-li">
            <div>采购价*</div>
            <input class="sell-table-price-detail-open-li-input" type="number" v-model="parentData.storagePrice"/>
          </li>
          <li class="sell-table-price-detail-open-li">
            <div>生产日期*</div>
            <input class="sell-table-price-detail-open-li-input" type="number" v-model="parentData.productDate"/>
          </li>
          <li class="sell-table-price-detail-open-li">
            <div>保质期*</div>
            <input class="sell-table-price-detail-open-li-input" type="number" v-model="parentData.shelfLife"/>
          </li>
          <li class="sell-table-price-detail-open-li">
            <div>数量*</div>
            <input @blur="minCount" class="sell-table-price-detail-open-li-input" type="number" v-model="parentData.productCount"/>
          </li>
          <li class="sell-table-price-detail-open-li" style="width: 100%">
            <div style="margin-top: 5px;">
              <span style="margin-left:10px;float: left">仓库*</span><input style="width: 50%;height: 20px;float: left;border-bottom: 1px solid #108ee9;margin-left: 15px;margin-top: -5px;" type="text" v-model="parentData.warehouseName"/>
              <div style="float: right;background: #108ee9;height: 20px;padding-right: 10px;padding-top:5px;margin-right:40px;padding-left: 10px;color: white;border-radius: 5px;line-height: 10px;"  @click="changeWarehouseShowStatus">选择</div>
              <div style="float: right;background: #C20C0C;width:20px;height: 20px;border-radius: 100%;line-height: 10px;margin-right: -80px;margin-top: -1px" @click="addCount"><i style="color: white;font-size: 20px" class="ion-ios-plus-empty"></i></div>
            </div>
          </li>
          <li class="sell-table-price-detail-open-li" style="width: 100%;margin-top: 5px;">
            <span style="margin-left:10px;float: left">备注：</span><input style="width: 80%;height: 20px;float: left;border-bottom: 1px solid #108ee9;margin-left: 8px;margin-top: -5px;" type="text" v-model="parentData.remarks"/>
          </li>
        </ul>
      </div>
      <div v-show="isNoteOpen&&editText=='编辑'" style="width: 100%;height: 40px;border-top: 1px #F2F2F2 dashed;line-height: 40px;font-size: 16px;margin-top: 5px;margin-bottom: 5px;">
        <div style="width:20%;height: 100%;float: left;text-align: center;color: #888888">备注</div>
        <input style="border-bottom:1px solid #108ee9;width: 70%;display: inline;height: 34px;margin-top:3px;float: left;" type="text" v-model="parentData.productNotes"/>
      </div>
    </div>
    <ok-warehouse
    :parentData="parentData",
    :warehouseShow="warehouseShow"
  ></ok-warehouse>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  import SearchWarehouse from "../customer/searchWarehouse";
  import {getWarehouseList} from '@/service/getData.js'
  export default {
    mixins: [],     //混合
    props:{
      warehouseName:'',
      warehouseList:[],
      parentData:{warehouseShow:false,warehouseName:'',warehouseId:''},
      editText:{},
      //count:1
    },
    components: {
      'ok-warehouse':SearchWarehouse,
    },//注册组件
    data() {         //数据
      return {
        isNoteOpen:false,
        isPriceOpen:false,
        warehouseShow:false
      };
    },
    computed: {
      discountPrice(){
        return parseFloat(this.parentData.storagePrice).toFixed(2);
      },
      productAttribute(){
        return 1;
        // return JSON.parse(this.parentData.productDetails);
      }
    },  //计算属性
    created() {
      // alert(1)
      // console.log(this.parentData);
      //alert(this.warehouseId)
     // alert(this.parentData.warehouseId)
    },   //创建
    mounted() {
    },   //挂载
    methods: {
      addCount(){
        this.count++;
      },
      showNoteOrPrice(n){
        switch (n){
          case 1:this.isNoteOpen=!this.isNoteOpen;this.isPriceOpen=false;break;
          case 2:this.isNoteOpen=false;this.isPriceOpen=!this.isPriceOpen;break;
          default:this.isNoteOpen=!this.isNoteOpen;this.isPriceOpen=false;
        }
      },
      deleteProduct(){
        this.$emit('deleteProduct',this.parentData.id);
      },
      minCount(){
        if(this.parentData.storageCount<=0){
          Toast({
            position: 'middle',
            message: '入库数量必须大于零'
          });
        }
      },
      changeWarehouseShowStatus(){
        this.warehouseShow!=this.warehouseShow
      },
    },   //方法
    watch: {
      // 'parentData.productCount':function(val,olVal){
      //
      // }
    }      //监听
  }
</script>

<style scoped>
  .sell-table-price-detail-open-li{
    display: block;float: left;width: 25%;padding-left: 10px;padding-right: 10px;
  }
  .sell-table-price-detail-open-li-input{
    height: 20px;width: 100%;margin-top: 2px;border-bottom: 1px solid #108ee9;
  }
</style>
