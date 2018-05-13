/**
* Created by lulu on 2018/5/12.
*/


<template>
  <div id="">
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div class="back-bar-name">
        新增客户
      </div>
      <div class="back-bar-cancelBtn">
        <div @click="addNewCustomer" style="margin-left:8px;display:block;float:left;width: 50px;height: 25px;font-size: 18px;color: white;">
          保存
        </div>
      </div>
    </div>

    <div style="margin-top:56px;width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">客户名称<span style="color: #dd0a20">*</span></div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="客户名称" type="text" v-model="customer.customerName"/>
      </div>
    </div>
    <div class="ok-model-border"></div>

    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">客户店名<span style="color: #dd0a20">*</span></div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="客户店名" type="text"v-model="customer.customerStoreName"/>
      </div>
    </div>
    <div class="ok-model-border"></div>
    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">联系方式<span style="color: #dd0a20">*</span></div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="联系方式" type="text"v-model="customer.customerPhone"/>
      </div>
    </div>
    <div class="ok-model-border"></div>
    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">客户地址<span style="color: #dd0a20">*</span></div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="客户地址" type="text"v-model="customer.customerAddress"/>
      </div>
    </div>
    <div class="ok-model-border"></div>
    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">客户邮箱</div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="客户邮箱" type="text"v-model="customer.customerEmail"/>
      </div>
    </div>
    <div class="ok-model-border"></div>
    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">客户积分</div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="客户积分" type="text"v-model="customer.customerScore"/>
      </div>
    </div>
    <div class="ok-model-border"></div>
    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">客户等级</div>
      <van-radio-group v-model="customer.customerLevel">
        <div style="float:left;"><van-radio name="0"><span style="float:left;margin-left: -7%;margin-top: 6%">默认</span></van-radio></div>
        <div style="float:left;margin-left: 9%"><van-radio name="1">一</van-radio></div>
        <div style="float:left;margin-left: 9%"><van-radio name="2">二</van-radio></div>

        <div style="float:left;margin-left: 25%"><van-radio name="3">三</van-radio></div>
        <div style="float:left;margin-left: 13%"><van-radio name="4">四</van-radio></div>
        <div style="float:left;margin-left: 9%"><van-radio name="5">五</van-radio></div>
      </van-radio-group>
    </div>
    <div class="ok-model-border"></div>
    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">备注：</div>
      <div style="height:90px;border: 1px solid #2D84FF;width:90%;display: block;float: right;margin-right: 20px;">
        <textarea cols="41" rows="2" v-model="customer.remarks"></textarea>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import {addCustomer} from '@/service/getData.js'
  import { RadioGroup, Radio } from 'vant';
  import { Toast } from 'vant';
  Vue.use(RadioGroup);
  Vue.use(Radio);
  export default {
    mixins: [],     //混合
    components: {
    },//注册组件
    data() {         //数据
      return {
        customer:{customerName:'',customerStoreName:'',customerPhone:'',customerAddress:'',customerEmail:'',customerScore:'',customerLevel:'',remarks:'',operator:'',storeId:''}
      };
    },
    computed: {
    },  //计算属性
    created() {
    },   //创建
    mounted() {
    },   //挂载
    methods: {
      addNewCustomer(){
        if(this.checkIsNull()==true) {
          addCustomer({
            customerName: this.customer.customerName,
            customerStoreName: this.customer.customerStoreName,
            customerPhone: this.customer.customerPhone,
            customerAddress: this.customer.customerAddress,
            customerEmail: this.customer.customerEmail,
            customerScore: this.customer.customerScore,
            customerLevel: this.customer.customerLevel,
            remarks: this.customer.remarks,
            operator: this.customer.operator,
            storeId: this.customer.storeId,
          }).then(response => {
            Toast({
              type:'success',
              message: '添加成功',
              duration:1000
            });
            this.$router.push({path:'/user/customer'});
          }, error => {
            Toast({
              position: 'bottom',
              message: '请检查输入信息是否正确'
            });
          })
        }else{
          Toast({
            position: 'bottom',
            message: '带星号（*）项不能为空'
          });
        }
      },
      checkIsNull(){
        if(this.customer.customerName == ''||this.customer.customerStoreName==''||this.customer.customerPhone==''||this.customer.customerAddress==''){
          return false;
        }
        else {
          return true;
        }
      },

    },   //方法
    watch: {},      //监听
    beforeRouteEnter (to, from, next) { // 缓存组件是，此方法还有效
      next(vm => {
        // alert(from.fullPath);
      })
    }
  }
</script>

<style scoped>

</style>

