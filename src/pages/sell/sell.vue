/**
* Created by ztt on 2018/4/17.
*/
<template>
    <div id="">
      <div  style="color:white;background: #d43c33;font-size:16px;padding-top:12px;height: 56px;width: 100%;text-align: center;">
        <div style="display: block;font-size: 20px;">销售</div>
        <div style="display: block;float: right;margin-right: 20px;margin-top: -25px;">收款码</div>
      </div>
      <div class="ok-border"></div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box" style="border-right:0.5px solid #F2F2F2;">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-pricetags"></i>
          </div>
          <div class="ok-sellOrStore-content">
            <div>销售单</div>
            <div class="ok-sellOrStore-subcontent">卖货、出库</div>
          </div>
        </div>
      </div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-star"></i>
          </div>
          <div class="ok-sellOrStore-content">
            <div>商品展示</div>
            <div class="ok-sellOrStore-subcontent">商品单价、照片</div>
          </div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box" style="border-right:0.5px solid #F2F2F2;">
          <div class="ok-sellOrStore-icon">
            <i class="ion-reply"></i>
          </div>
          <div class="ok-sellOrStore-content">
            <div>销售退货单</div>
            <div class="ok-sellOrStore-subcontent">退货、换货</div>
          </div>
        </div>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <ok-footer></ok-footer>
    </div>
</template>

<script>
  const Footer = resolve => require(['@/components/footer/footer'], resolve);
    export default {
        mixins: [],     //混合
        components: {
          'ok-footer':Footer
        },//注册组件
        data() {         //数据
            return {};
        },
        computed: {},  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {},   //方法
        watch: {}      //监听
    }
</script>

<style scoped>

</style>
