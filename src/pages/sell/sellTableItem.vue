<template>
  <div>
    <ul style="list-style: none;background: #F2F2F2;width: 100%;height:50px;padding-top:5px;text-align: center;">
      <li class="sell-table-price-detail-open-li">
        <div>单价</div>
        <input class="sell-table-price-detail-open-li-input" type="number" v-model="choosedItem.retailPrice"/>
      </li>
      <li class="sell-table-price-detail-open-li">
        <div>折扣(%)</div>
        <input class="sell-table-price-detail-open-li-input" type="number" v-model="choosedItem.discounts"/>
      </li>
      <li class="sell-table-price-detail-open-li">
        <div>折后价</div>
        <input class="sell-table-price-detail-open-li-input" disabled type="number" v-model="discountPrice"/>
      </li>
      <li class="sell-table-price-detail-open-li">
        <div>数量</div>
        <input class="sell-table-price-detail-open-li-input" type="number" v-model="choosedItem.productCount"/>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        mixins: [],     //混合
        props:{
          choosedItem:{}
        },
        components: {
        },//注册组件
        data() {         //数据
            return {
            };
        },
        computed: {
          discountPrice(){
            return this.choosedItem.retailPrice*this.choosedItem.discounts/100;
          }
        },  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {

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
