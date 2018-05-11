<template>
  <div>
      <div style="border-bottom: 1px dashed #F2F2F2;height: 26px;line-height: 26px;">
        <span style="font-weight: bolder;">{{productName}}<span style="color: #108ee9">({{productNumber}})</span></span>
        <i style="color: #108ee9;margin-left: 15px;" class="ion-edit"></i>
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
            <div>{{productColor}}</div>
          </li>
          <li style="display: block;float: left;width: 20%;text-align: center;">
            <div>{{productSize}}</div>
          </li>
          <li style="display: block;float: left;width: 20%;text-align: center;">
            <div>￥{{discountPrice}}</div>
          </li>
          <li style="display: block;float: left;width: 20%;text-align: center;">
            <div>{{productCount}}</div>
          </li>
          <li style="display: block;float: left;width: 10%;color: #575757;">
            <i @click="showNoteOrPrice(2)" :class="[isPriceOpen?'ion-chevron-up':'ion-chevron-down']"></i>
          </li>
        </ul>
        <div v-show="isPriceOpen&&editText=='编辑'">
          <ul style="list-style: none;background: #F2F2F2;width: 100%;height:50px;padding-top:5px;text-align: center;">
            <li class="sell-table-price-detail-open-li">
              <div>单价</div>
              <input class="sell-table-price-detail-open-li-input" type="number" v-model="retailPrice"/>
            </li>
            <li class="sell-table-price-detail-open-li">
              <div>折扣(%)</div>
              <input class="sell-table-price-detail-open-li-input" type="number" v-model="discounts"/>
            </li>
            <li class="sell-table-price-detail-open-li">
              <div>折后价</div>
              <input class="sell-table-price-detail-open-li-input" disabled type="number" v-model="discountPrice"/>
            </li>
            <li class="sell-table-price-detail-open-li">
              <div>数量</div>
              <input class="sell-table-price-detail-open-li-input" type="number" v-model="productCount"/>
            </li>
          </ul>
        </div>
        <div v-show="isNoteOpen&&editText=='编辑'" style="width: 100%;height: 40px;border-top: 1px #F2F2F2 dashed;line-height: 40px;font-size: 16px;margin-top: 5px;margin-bottom: 5px;">
          <div style="width:20%;height: 100%;float: left;text-align: center;color: #888888">备注</div>
          <input style="border-bottom:1px solid #108ee9;width: 70%;display: inline;height: 34px;margin-top:3px;float: left;" type="text" v-model="productNotes"/>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        mixins: [],     //混合
        props:{
          productId:{},
          productName:{},
          productNumber:{},
          productColor:{},
          productSize:{},
          editText:{},
          productCount:{},
          retailPrice:{},
          discounts:{},
          productNotes:{}
        },
        components: {
        },//注册组件
        data() {         //数据
            return {
              isNoteOpen:false,
              isPriceOpen:false
            };
        },
        computed: {
          discountPrice(){
            return this.retailPrice*this.discounts/100;
          }
        },  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          showNoteOrPrice(n){
            switch (n){
              case 1:this.isNoteOpen=!this.isNoteOpen;this.isPriceOpen=false;break;
              case 2:this.isNoteOpen=false;this.isPriceOpen=!this.isPriceOpen;break;
              default:this.isNoteOpen=!this.isNoteOpen;this.isPriceOpen=false;
            }
          },
          deleteProduct(){
            this.$emit('deleteProduct',this.productId);
          }
        },   //方法
        watch: {
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
