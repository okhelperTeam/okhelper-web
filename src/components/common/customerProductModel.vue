/**
* Created by lulu on 2018/5/13.
*/


<template>
  <div id="">
    <div class="ok-product-box">
      <div class="ok-product-img-box">
        <img :src="mainImg | defaultImg" width="70px" height="70px"/>
      </div>
      <div class="ok-product-details-box">
        <div class="ok-product-details-name">{{productName}}</div>
        <div  class="ok-product-details-category-name">{{productTitle}}</div>
        <div class="ok-product-details-price" >￥{{salePrice | formateMoney}}</div>
        <div class="ok-product-details-addtime">购买数量：{{saleCount}}</div>
      </div>
    </div>
    <div class="ok-model-border"></div>
  </div>
</template>

<script>
  export default {
    mixins: [],     //混合
    components: {},//注册组件
    data() {         //数据
      return {
        isActive:false
      };
    },
    props: {
      mainImg: {},
      productName: {},
      salePrice: {},
      saleCount:{},
      productTitle:{},
      Id: {},
      index:{},
      salesStock:{}
    },
    computed: {},  //计算属性
    created() {
    },   //创建
    mounted() {
    },   //挂载
    methods: {
    },   //方法
    watch: {}      //监听
  }
</script>

<style scoped>
  .ok-product-box{
    height: 100px;width: auto;display: block;
  }
  .ok-product-img-box{
    display: block;float: left;width: 30%;text-align: center;height:100px;line-height: 100px;
  }
  .ok-product-details-box{
    display: block;float: left;width: 50%;height:80px;padding-top: 8px;
  }
  .ok-product-details-name{
    width:100%;display: block;float: left;font-size: 16px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;
  }
  .ok-product-details-category-name{
    float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background:#2D84FF;border-radius: 5px;margin-right: 5px;
  }
  .ok-product-details-discounts{
    float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;
  }
  .ok-product-details-price{
    clear: both;color: orange;
  }
  .ok-product-details-addtime{
    clear: both;color: #888888;
  }
  .ok-product-operation{
    font-size:30px;line-height:30px;padding-top:20px;height:80px;display: block;float: left;width: 20%;height:80px;text-align: center;
  }
  .cartActive{
    color: orange;
  }
</style>

