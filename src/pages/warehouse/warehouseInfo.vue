/**
* Created by lulu on 2018/4/22.
*/


<template>
    <div id="">
      <div class="back-bar">
        <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
        <div class="back-bar-name">
          仓库信息详情
        </div>
      </div>
      <div style="margin-top: 56px">
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
          <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
            <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="启用" type="text"v-model="warehouse.deleteStatus"/>
            <span style="color: #dd0a20;font-size: 12px">（1为已启用，0为未启用）</span>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
          <div style="width:25%;display: block;float: left;padding-left: 20px;">备注：</div>
          <div style="height:130px;border: 1px solid #2D84FF;width:90%;display: block;float: right;margin-right: 20px;">
            <textarea cols="41" rows="3" v-model="warehouse.description"></textarea>
          </div>
        </div>
        <br>
        <div style="height: 110px;padding-top:30px;width: 96%;margin:200px auto;">
          <van-button type="danger" size="large" @click="deleteWarehouseInfoById">删除仓库</van-button>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import {Button} from 'vant';
  import {getWarehouseInfo,addWarehouse,deleteWarehouseInfo} from '@/service/getData';
  import { RadioGroup, Radio } from 'vant';
  import { Toast } from 'vant';
  Vue.use(RadioGroup);
  Vue.use(Radio);
  Vue.use(Button);
    export default {
        name: "warehouseInfo",
      data() {
        return {
          warehouse:{warehouseName:'',storeKeeper:'',deleteStatus:"",description:''},
          code:''
        }
      },
      created() {
        this.id = this.$route.query.id;//获取上个页面传递的id,在下面获取数据的时候先提交id
        this.getWarehouseInfoById();
        },
      methods: {

        getWarehouseInfoById() {
          getWarehouseInfo(
            this.id
          ).then(
            response => {
              //console.log(response.data);
              this.warehouse = response.data;
            }, error => {
              console.log(error.msg);
            }
          );
        },
        deleteWarehouseInfoById() {
          deleteWarehouseInfo(
            this.id

          ).then(
            response => {
              Toast({
                type:'success',
                message: '删除成功',
                duration:1000
              });
              this.$router.push({path:'/warehouse/warehouse'});
            }, error => {
              console.log(error.msg);
              Toast({
                position: 'bottom',
                message: '删除失败',
              });
            }
          );
        },
        addNewWarehouse(){
          if(this.checkIsNull()==true) {
            addWarehouse({
              warehouseName: this.warehouse.warehouseName,
              storeKeeper: this.warehouse.storeKeeper,
              deleteStatus: this.warehouse.deleteStatus,
              description: this.warehouse.description,
            }).then(response => {
              Toast({
                position: 'bottom',
                message: '已新增仓库'
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
          if(this.warehouseName == ''||this.storeKeeper==''||this.deleteStatus==''){
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

</style>
