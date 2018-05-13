/**
* Created by lulu on 2018/5/13.
*/


<template>
  <div>
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div class="back-bar-name">
        交易记录
      </div>
    </div>
    <div style="margin-top: 13%" v-if="supplierOrderList.length>0||myData.pageNum==0">
      <van-list
        v-model="loading"
        :finished="finished"
        :offset=0
        @load="onLoad"
      >
        <div class="ok-text-box1" v-for="item in supplierOrderList">
            <div class="ok-text-name" style="width: 100%">订单号：{{item.orderNumber}}</div><br>
            <div class="ok-text-name2" style="width: 100%;margin-left: -2px;margin-top: -15px;font-size: 13px">
              供应商名：{{item.supplier.name}}&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: red">￥{{item.totalPrice}}</span>
            </div>
            <div class="ok-text-name5" style="width: 100%;font-size: 13px">
              创建时间：{{item.createTime}}&nbsp;&nbsp;&nbsp;&nbsp;仓库：{{item.stockiner.name}}
            </div>
        </div>
      </van-list>
    </div>
    <div v-if="myData.pageNum!=0&&supplierOrderList.length==0&&finished==true" style="color: #888888;text-align: center;padding: 20px;">
    此供应商没有采购记录
    </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import {getSupplierOrderHistory} from '@/service/getData';
    import {List,Field} from 'vant';
    Vue.use(List).use(Field);
    export default {
      name: "supplierOrder",
      data(){
        return{
          supplierOrderList: [],
          loading: false,
          finished: false,
          myData:{paging:true,pageNum:0,limit:6,},
        }
      },
      created() {
        this.id = this.$route.query.id;//获取上个页面传递的id,在下面获取数据的时候先提交id
        this.onLoad();
      },
      methods: {
        onLoad() {//上划加载采购订单信息
          this.myData.pageNum++;
          getSupplierOrderHistory(this.id,this.myData).then(
            response=>{
              // alert(1);
              //console.log(response.data.results);
              for(var i=0;i<response.data.results.length;i++){
                this.supplierOrderList.push(response.data.results[i]);
              }

              this.loading=false;
              if (response.data.lastPage) {
                this.finished = true;
              }
            },error=>{
              this.loading=false;
              this.finished = true;

              console.log(error.response.msg);
            }
          );
        }
      },
    }
</script>

<style scoped>

</style>
