/**
* Created by lulu on 2018/5/12.
*/


<template>
  <div id="">
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div class="back-bar-name">
        新增仓库
      </div>
      <div class="back-bar-cancelBtn">
        <div @click="addNewWarehouse" style="margin-left:8px;display:block;float:left;width: 50px;height: 25px;font-size: 18px;color: white;">
          保存
        </div>
      </div>
    </div>

    <div style="margin-top:56px;width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">仓库名称<span style="color: #dd0a20">*</span></div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="仓库名称" type="text" v-model="warehouse.warehouseName"/>
      </div>
    </div>
    <div class="ok-model-border"></div>

    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">仓管员<span style="color: #dd0a20">*</span></div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="仓管员编号" type="text"v-model="warehouse.storeKeeper"/>
      </div>
    </div>
    <div class="ok-model-border"></div>
    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">启用<span style="color: #dd0a20">*</span></div>
        <van-radio-group v-model="warehouse.deleteStatus">
          <div style="float:left;"><van-radio name="1"><span style="float:left;margin-left: -7%;margin-top: 6%">是</span></van-radio></div>
          <div style="float:left;margin-left: 9%"><van-radio name="0">否</van-radio></div>.
        </van-radio-group>
    </div>
    <div class="ok-model-border"></div>
    <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">备注：</div>
      <div style="height:130px;border: 1px solid #2D84FF;width:90%;display: block;float: right;margin-right: 20px;">
        <textarea cols="41" rows="3" v-model="warehouse.description"></textarea>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import {addWarehouse} from '@/service/getData.js'
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
        warehouse:{warehouseName:'',storeKeeper:'',deleteStatus:'',description:''}
      };
    },
    computed: {
    },  //计算属性
    created() {
    },   //创建
    mounted() {
    },   //挂载
    methods: {
      addNewWarehouse(){
        if(this.checkIsNull()==true) {
          addWarehouse({
            warehouseName: this.warehouse.warehouseName,
            storeKeeper: this.warehouse.storeKeeper,
            deleteStatus: this.warehouse.deleteStatus,
            description: this.warehouse.description,
          }).then(response => {
            Toast({
              type:'success',
              message: '添加成功',
              duration:1000
            });
            this.$router.push({path:'/warehouse/warehouse'});
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
        if(this.warehouse.warehouseName == ''||this.warehouse.storeKeeper==''||this.warehouse.deleteStatus==''){
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

