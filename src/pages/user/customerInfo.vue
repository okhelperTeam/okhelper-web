/**
* Created by lulu on 2018/4/22.
*/


<template>
  <div id="">
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div class="back-bar-name">
        客户信息
      </div>
      <div class="back-bar-cancelBtn">
        <div @click="addNewCustomer" style="margin-left:8px;display:block;float:left;width: 50px;height: 25px;font-size: 18px;color: white;">
          保存
        </div>
      </div>
    </div>
    <div style="margin-top: 56px">
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
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="客户等级" type="text"v-model="customer.customerLevel"/>
        </div>
        <div style="width:100%;display: block;float: left;padding-left: 20px;font-size: 12px"><span style="color: #dd0a20">(客户等级从0至5的整数，默认为0)</span></div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">备注：</div>
        <div style="height:90px;border: 1px solid #2D84FF;width:90%;display: block;float: right;margin-right: 20px;">
          <textarea cols="41" rows="2" v-model="customer.remarks"></textarea>
        </div>
      </div>

      <div class="ok-model-border"></div>
      <router-link :to="{path: '/user/customerTradeHistory',query: {id:customer.id}}">
      <div class="ok-text-box">
        <div class="ok-text-name" style="width: 100%">交易历史</div>
        <div class="manger-icon">
          <i class="ion-chevron-right"></i>
        </div>
      </div>
      </router-link>
      <hr>
    </div>
    <div style="height: 110px;padding-top:30px;width: 96%;margin:16px auto;">
      <van-button type="danger" size="large" @click="deleteCustomerInfoById">删除客户</van-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Button,Toast} from 'vant';
  import {getCustomerInfo,addCustomer,deleteCustomerInfo} from '@/service/getData';
  Vue.use(Button);
    export default {
        name: "customerInfo",
    data() {
      return {
        customer:{customerName:'',customerStoreName:'',customerPhone:'',customerAddress:'',customerEmail:'',customerScore:'',customerLevel:'',remarks:'',operator:'',storeId:''}
      }
    },
    created() {
      this.id = this.$route.query.id;//获取上个页面传递的id,在下面获取数据的时候先提交id
      this.getCustomerInfoById();
    },
    methods:{
      getCustomerInfoById()
      {
        getCustomerInfo(
          this.id
        ).then(
          response => {
            //console.log(response.data);
            this.customer = response.data;
          }, error => {
            console.log(error.msg);
          }
        );
      },
      deleteCustomerInfoById() {
        deleteCustomerInfo(
          this.id
        ).then(
          response => {
            Toast({
              type:'success',
              message: '删除成功',
              duration:1000
            });
            this.$router.push({path:'/user/customer'});
          }, error => {
            Toast({
              position: 'bottom',
              message: '删除失败',
            });
            console.log(error.msg);
          }
        );
      },
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
              position: 'bottom',
              message: '已新增客户'
            });
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
    }
    }
</script>

<style scoped>
  .manger-icon{
    float: right;
    display: inline;
    font-size: 18px;
    color: black;
    margin-right: 10%;
    margin-top: -13%;
    font-family: 微软雅黑;
  }
</style>
