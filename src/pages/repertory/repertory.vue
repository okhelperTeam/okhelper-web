/**
* Created by ztt on 2018/4/18.
*/
<template>
    <div id="">
      <div  style="color:white;background: #d43c33;font-size:16px;padding-top:12px;height: 56px;width: 100%;text-align: center;">
        <div style="display: block;font-size: 20px;">库存</div>
      </div>
      <div class="ok-border"></div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box" style="border-right:0.5px solid #F2F2F2;">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-pricetags"></i>
          </div>
          <router-link to="/warehouse/stock">
          <div class="ok-sellOrStore-content">
            <div>库存查询</div>
            <div class="ok-sellOrStore-subcontent">负库存商品</div>
          </div>
          </router-link>
        </div>
      </div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-star"></i>
          </div>
          <router-link to="/warehouse/stockWarning">
          <div class="ok-sellOrStore-content">
            <div>过低预警</div>
            <div class="ok-sellOrStore-subcontent">存量过低商品<span style="color: red;">15</span></div>
          </div>
          </router-link>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box" style="border-right:0.5px solid #F2F2F2;">
          <div class="ok-sellOrStore-icon">
            <i class="ion-reply"></i>
          </div>
          <router-link to="/warehouse/earlyWarning">
          <div class="ok-sellOrStore-content">
            <div>临期预警</div>
            <div class="ok-sellOrStore-subcontent">临期商品<span style="color: red;">10</span></div>
          </div>
          </router-link>
        </div>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box" style="border-right:0.5px solid #F2F2F2;">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-cart"></i>
          </div>
          <router-link to="/warehouse/purchaseHistory">
          <div class="ok-sellOrStore-content">
            <div>采购进货</div>
            <div class="ok-sellOrStore-subcontent">进货、增加库存</div>
          </div>
          </router-link>
        </div>
      </div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box">
          <div class="ok-sellOrStore-icon">
            <i style="color: cornflowerblue;" class="ion-ios-cart"></i>
          </div>
          <div class="ok-sellOrStore-content">
            <div>采购退货</div>
            <div class="ok-sellOrStore-subcontent">向供应商退货</div>
          </div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box" style="border-right:0.5px solid #F2F2F2;">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-list"></i>
          </div>
          <div class="ok-sellOrStore-content">
            <div>库存盘点</div>
            <div class="ok-sellOrStore-subcontent">库存不准？盘点一下</div>
          </div>
        </div>
      </div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-infinite"></i>
          </div>
          <div class="ok-sellOrStore-content">
            <div>库存调拨</div>
            <div class="ok-sellOrStore-subcontent">仓库间调动</div>
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
