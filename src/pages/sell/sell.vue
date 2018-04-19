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
      <div class="ok-sellOrStore-model">
      <div class="ok-sellOrStore-box">
        <div class="ok-sellOrStore-icon">
          <i class="ion-ios-cart"></i>
        </div>
        <div class="ok-sellOrStore-content">
          <div>购物车</div>
          <div class="ok-sellOrStore-subcontent">客户看好物品</div>
        </div>
      </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="ok-sellOrStore-model">
        <div class="ok-sellOrStore-box" style="border-right:0.5px solid #F2F2F2;">
          <div class="ok-sellOrStore-icon">
            <i class="ion-ios-calendar-outline"></i>
          </div>
          <div class="ok-sellOrStore-content">
            <div>销售历史</div>
            <div class="ok-sellOrStore-subcontent">销售历史</div>
          </div>
        </div>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <ok-footer></ok-footer>
      <div style="display:none;background:#C20C0C;width: 100%;height: 662px;position: absolute;top: 0px; ">
        <div style="color: white;font-size: 18px;margin: 0 auto;width: 50%;text-align: center;margin-top: 20px;">收款二维码</div>
        <div style="height: 25px;width: 25px;line-height:25px;text-align:center;float:right;margin-top:-30px;margin-right:20px;color: white;font-size: 25px;">
          <i class="ion-ios-close-empty"></i>
        </div>
        <div style="width: 80%;margin: 0 auto;height: 320px;margin-top:70px;background: white;padding-top: 10px;">
          <div style="width: 80%;height: 300px;margin: 0 auto;">
            <div style="height: 70%;width: 100%;">
              <img width="100%" height="110%" src="@/assets/icon/alipay.jpg"/>
            </div>
            <div style="height: 30%;width: 100%;">
              <div style="display:block;float:left;width: 50%;font-size: 30px;color: #108ee9;text-align: center;padding-top: 10px;">
                <van-icon name="alipay" />
                <div style="font-size: 12px;color: #888888;">支付宝</div>
              </div>
              <div style="display:block;float:left;width: 50%;font-size: 30px;text-align: center;padding-top: 10px;color: #439057;">
                <van-icon name="wechat" />
                <div style="font-size: 12px;color: #888888;">微信</div>
              </div>
            </div>
          </div>
          <div style="margin-top:20px;font-size: 10px;color: white;">
            <i class="ion-ios-information-outline"></i>
            上图为您的收款二维码，客户用支付宝或微信扫描此二维码付款
            <a  style="color: yellow">点击【上传二维码】</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import { Icon } from 'vant';
  Vue.use(Icon);
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
