/**
* Created by lulu on 2018/5/12.
*/


<template>
  <div id="">
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div class="back-bar-name">
        新增供应商
      </div>
      <div class="back-bar-cancelBtn">
        <div @click="addNewSupplier" style="margin-left:8px;display:block;float:left;width: 50px;height: 25px;font-size: 18px;color: white;">
          保存
        </div>
      </div>
    </div>

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
    <div class="ok-model-border"></div>
    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">备注：</div>
      <div style="height:90px;border: 1px solid #2D84FF;width:90%;display: block;float: right;margin-right: 20px;">
        <textarea cols="41" rows="2" v-model="supplier.remarks"></textarea>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import {addSupplier} from '@/service/getData.js'
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
        supplier:{supplierName:'',supplierContacts:'',supplierPhone:'',supplierAddress:'',remarks:'',operator:''}
      };
    },
    computed: {
    },  //计算属性
    created() {
    },   //创建
    mounted() {
    },   //挂载
    methods: {
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
              type:'success',
              message: '添加成功',
              duration:1000
            });
            this.$router.push({path:'/user/supplier'});
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

