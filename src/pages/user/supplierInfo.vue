/**
* Created by lulu on 2018/4/22.
*/


<template>
  <div id="">
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div class="back-bar-name">
        供应商信息
      </div>
      <div class="back-bar-cancelBtn">
        <div @click="addNewSupplier" style="margin-left:8px;display:block;float:left;width: 50px;height: 25px;font-size: 18px;color: white;">
          保存
        </div>
      </div>
    </div>
    <div style="margin-top: 56px">
      <div style="margin-top:56px;width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">供应商名<span style="color: #dd0a20">*</span></div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="供应商名称" type="text" v-model="supplier.supplierName"/>
      </div>
    </div>
    <div class="ok-model-border"></div>

    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">联系人<span style="color: #dd0a20">*</span></div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="供应商联系人姓名" type="text"v-model="supplier.supplierContacts"/>
      </div>
    </div>
    <div class="ok-model-border"></div>
    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">联系方式<span style="color: #dd0a20">*</span></div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="联系方式" type="text"v-model="supplier.supplierPhone"/>
      </div>
    </div>
    <div class="ok-model-border"></div>
    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">地址<span style="color: #dd0a20">*</span></div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="供应商地址" type="text"v-model="supplier.supplierAddress"/>
      </div>
    </div>
    <div class="ok-model-border"></div>
      <router-link :to="{path: '/user/supplierOrder',query: {id:supplier.id}}">
      <div class="ok-text-box">
        <div class="ok-text-name" style="width: 100%">采购记录</div>
        <div class="manger-icon">
          <i class="ion-chevron-right"></i>
        </div>
      </div>
      </router-link>
      <div style="height: 110px;padding-top:30px;width: 96%;margin:20px auto;">
        <van-button type="danger" size="large" @click="deleteSupplierInfoById">删除供应商</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Button} from 'vant';
  import {getSupplierInfo,addSupplier,deleteSupplierInfo} from '@/service/getData';
  import { Toast } from 'vant';
  Vue.use(Button);
    export default {
        name: "supplierInfo",
      data() {
        return {
          supplier:{supplierName:'',supplierContacts:'',supplierPhone:'',supplierAddress:'',remarks:'',operator:''}
        }
      },
      created() {
        this.id = this.$route.query.id;//获取上个页面传递的id,在下面获取数据的时候先提交id
        this.getSupplierInfoById();
      },
      methods:{
        getSupplierInfoById()
        {
          getSupplierInfo(
            this.id
          ).then(
            response => {
              this.supplier = response.data;
              console.log(response.data);
            }, error => {
              console.log(error.response.msg);
            }
          );
        },
        deleteSupplierInfoById() {
          deleteSupplierInfo(
            this.id

          ).then(
            response => {
              Toast({
                type:'success',
                message: '删除成功',
                duration:1000
              });
              this.$router.push({path:'/user/supplier'});
            }, error => {
              console.log(error.msg);
              Toast({
                position: 'bottom',
                message: '删除失败',
              });
            }
          );
        },
        addNewSupplier(){
          if(this.checkIsNull()==true) {
            addSupplier({
              supplierName: this.supplier.supplierName,
              supplierContacts: this.supplier.supplierContacts,
              supplierPhone: this.supplier.supplierPhone,
              supplierAddress: this.supplier.supplierAddress,
              remarks: this.supplier.remarks,
              operator: this.supplier.operator,

            }).then(response => {
              Toast({
                position: 'bottom',
                message: '已新增供应商'
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
          if(this.supplier.supplierName == ''||this.supplier.supplierContacts==''||this.supplier.supplierPhone==''||this.supplier.supplierAddress==''){
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
    font-size: 25px;
    color: #EAEAEA;
    margin-right: 10%;
    margin-top: -13%;
    font-family: 微软雅黑;
  }
</style>
