/**
* Created by lulu on 2018/4/22.
*/


<template>
  <div id="">
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div class="back-bar-name">
        店长信息
      </div>
      <div class="back-bar-cancelBtn">
        <div @click="updateStoreManagerByName" style="margin-left:8px;display:block;float:left;width: 50px;height: 25px;font-size: 18px;color: white;">
          保存
        </div>
      </div>
    </div>
    <div style="margin-top: 56px">
      <div style="margin-top:56px;width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">用户名<span style="color: #dd0a20">*</span></div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
          {{storeManager.userName}}
        </div>
      </div>
      <div class="ok-model-border"></div>

      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">店铺名<span style="color: #dd0a20">*</span></div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="店铺名" type="text"v-model="storeManager.storeName"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">联系方式<span style="color: #dd0a20">*</span></div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="店铺联系方式" type="text"v-model="storeManager.storePhone"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">店铺地址</div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="店铺地址" type="text"v-model="storeManager.storeAddress"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">用户邮箱</div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="用户邮箱" type="text"v-model="storeManager.userEmail"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">性别</div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="性别" type="text"v-model="storeManager.userSex"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">生日</div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="生日" type="text"v-model="storeManager.userBirthday"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">昵称</div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="昵称" type="text"v-model="storeManager.userNick"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <!--<div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">-->
        <!--<div style="width:25%;display: block;float: left;padding-left: 20px;">客户等级</div>-->
        <!--<div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">-->
          <!--<input style="height: 30px;font-size: 16px;width: 100%;" placeholder="客户等级" type="text"v-model="customer.customerLevel"/>-->
        <!--</div>-->
        <!--<div style="width:100%;display: block;float: left;padding-left: 20px;font-size: 12px"><span style="color: #dd0a20">(客户等级从0至5的整数，默认为0)</span></div>-->
      <!--</div>-->
      <!--<div class="ok-model-border"></div>-->
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:35%;display: block;float: left;padding-left: 20px;">店铺描述：</div>
        <div style="height:90px;border: 1px solid #2D84FF;width:90%;display: block;float: right;margin-right: 20px;">
          <textarea cols="41" rows="3" v-model="storeManager.description"></textarea>
        </div>
      </div>
      <div class="ok-model-border"></div>
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
        storeManager:{storePhoto:'',storeName:'',storePhone:'',storeAddress:'',userEmail:'',userNick:'',userAvatar:'',userSex:'',userBirthday:'',description:''}
      }
    },
    created() {
      this.name = this.$route.query.name;//获取上个页面传递的id,在下面获取数据的时候先提交id
      this.getStoreManagerInfoByName();
    },
    methods:{
      getStoreManagerInfoByName() {
        getStoreManagerInfo(
          this.name
        ).then(
          response => {
            //console.log(response.data);
            this.storeManager = response.data;
          }, error => {
            console.log(error.msg);
          }
        );
      },

      updateStoreManagerByName(){
        if(this.checkIsNull()==true) {
          updateStoreManager({
            storePhoto: this.storeManager.storePhoto,
            storeName: this.storeManager.storeName,
            storePhone: this.storeManager.storePhone,
            storeAddress: this.storeManager.storeAddress,
            userEmail: this.storeManager.userEmail,
            userNick: this.storeManager.userNick,
            userAvatar: this.storeManager.userAvatar,
            userBirthday: this.storeManager.userBirthday,
            description: this.storeManager.description,
            userSex: this.storeManager.userSex,
          }).then(response => {
            Toast({
              position: 'bottom',
              message: '已更新信息'
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
        if(this.storeManager.storeName == ''||this.storeManager.storePhone==''){
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
