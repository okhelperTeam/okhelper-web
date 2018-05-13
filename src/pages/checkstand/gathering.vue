/**
* Created by ztt on 2018/5/13.
*收款页
*/
<template>
    <div id="">
      <transition-group enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown" :duration="800">
        <div :key="1" v-show="parentData.gatheringShow" style="z-index:100;background:white;width: 100%;height:100%;position: fixed;top: 0;left:0 ">
          <div :key="2" style="color: white;height:56px;background:#C20C0C;font-size: 18px;margin: 0 auto;width: 100%;text-align: center;line-height: 56px;">
            <span>收款</span>
            <div style="color:white;float: left;font-size: 25px;width: 56px;height: 20px;"></div>
            <div :key="3" style="float: right;font-size: 25px;width: 56px;height: 20px;"  @click="parentData.gatheringShow=false" >
              <i :key="4" class="ion-ios-close-empty"></i>
            </div>
          </div>
          <div style="height: 160px;width: 100%;padding: 5px;">
            <div style="width: 100%;height: 100%;padding-top: 10px;padding-left: 15px;padding-right: 15px;border: 1px solid #F2F2F2;">
              <div style="width: 100%;height: 100%;">
                <div style="height: 60px;border-bottom:1px dashed #F2F2F2;">
                  <!--#F5FFFA-->
                  <div style="background: #F5FFFA;width: 44px;height: 44px;float: left;border-radius: 22px;text-align: center;padding-top: 10px;margin-left: 10px;">
                    <van-icon name="qr" style="font-size: 25px;color: #A4D3EE;" />
                  </div>
                  <div style="width: 60%;height: 50px;float: left;">
                    <div style="color: orange;padding-left:30px;font-size: 18px;">￥{{parentData.pay1Money}}</div>
                    <div style="color: black;text-align: center;font-size: 14px;">扫码收款(微信/支付宝)</div>
                  </div>
                  <div style="width: 22%;height: 50px;float: left;">
                    <div style="background: #108ee9;height: 30px;width: 100%;color: white;text-align:center;padding-top:5px;padding-bottom:5px;margin-top: 7px;">扫码</div>
                  </div>
                </div>
                <div style="height: 70px;color: #888888;font-size: 8px;padding-top: 5px;">
                  当客户出示微信/支付宝付款码后，点击【扫码】按钮打开摄像头，然后扫描客户的付款码进行收款。
                </div>
              </div>
            </div>
          </div>
          <div v-if="parentData.showCashResult" style="height: 80px;width: 100%;padding: 5px;">
            <div style="width: 100%;height: 100%;padding-top: 10px;padding-left: 15px;padding-right: 15px;border: 1px solid #F2F2F2;">
              <div style="width: 100%;height: 100%;">
                <div style="height: 60px;">
                  <div style="background: #F5FFFA;width: 44px;height: 44px;float: left;border-radius: 22px;text-align: center;padding-top: 10px;margin-left: 10px;">
                    <van-icon name="pending-payment" style="font-size: 25px;color: #A4D3EE;" />
                  </div>
                  <div style="width: 60%;height: 50px;float: left;">
                    <div style="color: orange;padding-left:30px;font-size: 18px;">￥{{parentData.pay1Money}}</div>
                    <div style="color: black;padding-left:30px;font-size: 14px;">现金</div>
                  </div>
                  <div style="width: 22%;height: 50px;float: left;">
                    <div style="height: 30px;width: 100%;color: #888888;text-align:center;padding-top:5px;padding-bottom:5px;margin-top: 7px;">线下收款</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
</template>

<script>
  import { Icon } from 'vant';
  import Vue from 'vue';
  Vue.use(Icon);
    export default {
        mixins: [],     //混合
        components: {},//注册组件
        data() {         //数据
            return {};
        },
        props:{
          parentData:{}
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
