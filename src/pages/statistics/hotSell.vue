/**
* Created by ztt on 2018/5/3.
*/
<template>
    <div id="">
      <div  style="color:white;background: #C20C0C;font-size:18px;padding-top:12px;height: 56px;width: 100%;text-align: center;">
        <div style="width: 20%;font-size:16px;display: block;float: left;height: 32px;line-height: 32px;">
          <router-link to="/statistics">&lt;&nbsp;返回</router-link>
        </div>

        <div style="width: 60%;display: block;float: left;height: 32px;line-height: 32px;">热/滞销商品</div>
        <div style="width: 20%;display: block;float: left;height: 32px;line-height: 32px;"></div>
      </div>

      <div style="clear:both;width: 100%;height:46px;background: #F2F2F2;text-align: center;">
          <div style="display:block;float:left;height: 36px;line-height: 36px;width: 50%;">
            <div @click="isHotP(1)" :class="{hotActive:isHot}" style="background: black;color: white;text-align: center;">热销品</div>
          </div>
          <div style="display:block;float:left;height: 36px;line-height: 36px;width: 50%;">
            <div @click="isHotP(2)" :class="{hotActive:isCold}" style="background: black;color: white;text-align: center;">滞销品</div>
          </div>
      </div>
      <div>
        <ul style="width: 100%;list-style:none;">
          <li @click="hotTime(1)" :class="{timeActive:isToday}" class="ok-hotsell-time-li" >今日</li>
          <li @click="hotTime(2)" :class="{timeActive:isYesterday}" class="ok-hotsell-time-li" >昨日</li>
          <li @click="hotTime(3)" :class="{timeActive:isAWeek}" class="ok-hotsell-time-li" >近7日</li>
          <li @click="hotTime(4)" :class="{timeActive:isAMonth}" class="ok-hotsell-time-li" >本月</li>
        </ul>
      </div>
      <div class="ok-model-border"></div>
      <div v-if="productList.length>0||myData.pageNum==0">
        <van-list
          v-model="loading"
          :finished="finished"
          :offset=10
          @load="onLoad"
        >
          <div v-for="(item,index) in productList">
            <ok-product
              :main-img="item.mainImg"
              :product-name="item.productName"
              :cate-name="item.cateName"
              :discounts="item.youhui"
              :retail-price="item.retailPrice"
              :createTime="item.createTime"
              :Id="item.id"
              :index="index"
              :salesStock="item.salesStock"
              :salesVolume="item.salesVolume"
              @addProduct="addProduct"
            />
          </div>
        </van-list>
        <div v-if="finished&&myData.pageNum>1" style="color: #888888;text-align: center;padding: 20px;">
          到底了别滑了，真的没了.....
        </div>
      </div>
      <div v-if="myData.pageNum!=0&&productList.length==0&&finished==true"  style="color: #888888;text-align: center;padding: 20px;">
        没有您要找的商品......
      </div>

    </div>
</template>

<script>
  import Vue from 'vue'
  import ProductModel from '@/components/common/productModel';
  import {getProductList} from '@/service/getData';
  import { List } from 'vant';
  Vue.use(List);
    export default {
        mixins: [],     //混合
        components: {
          'ok-product':ProductModel
        },//注册组件
        data() {         //数据
            return {
              isHot:true,
              isCold:false,
              isToday:true,
              isYesterday:false,
              isAWeek:false,
              isAMonth:false,
              loading: false,
              finished: false,
              myData:{paging:true,pageNum:0,limit:6,orderBy:'create_time desc'},
              productList:[
                {goodsId:10000,goodsPhoto:'',goodsName:'菀草壹韩版春季宽松春秋蝙蝠袖风衣',cateName:'大衣',youhui:'热销',danjia:'599.00',shangjiashijian:'2018-4-20 2:20:10'},
                {goodsId:10001,goodsPhoto:'',goodsName:'菀草壹韩版春季宽松春秋蝙蝠袖风衣',cateName:'大衣',youhui:'热销',danjia:'499.00',shangjiashijian:'2018-4-20 2:20:10'},
                {goodsId:10002,goodsPhoto:'',goodsName:'菀草壹韩版春季宽松春秋蝙蝠袖风衣',cateName:'大衣',youhui:'热销',danjia:'699.00',shangjiashijian:'2018-4-20 2:20:10'}
              ]
            };
        },
        computed: {},  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          onLoad() {//上划加载商品
            this.myData.pageNum++;
            getProductList(this.myData).then(
              response=>{
                for(var i=0;i<response.data.results.length;i++){
                  this.productList.push(response.data.results[i]);
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
          },
          reLoad(){
            this.productList=[];
            this.myData.pageNum=0;
            this.finished=false;
            this.onLoad();
          },
          isHotP(n){
            switch (n){
              case 1:this.isHot=true;this.isCold=false;break;
              case 2:this.isHot=false;this.isCold=true;break;
              default:this.isHot=true;this.isCold=false;
            }
          },
          hotTime(n){
            switch (n){
              case 1:this.isToday=true;this.isYesterday=false;this.isAWeek=false;this.isAMonth=false;break;
              case 2:this.isToday=false;this.isYesterday=true;this.isAWeek=false;this.isAMonth=false;break;
              case 3:this.isToday=false;this.isYesterday=false;this.isAWeek=true;this.isAMonth=false;break;
              case 4:this.isToday=false;this.isYesterday=false;this.isAWeek=false;this.isAMonth=true;break;
              default:this.isToday=true;this.isYesterday=false;this.isAWeek=false;this.isAMonth=false;
            }
          }
        },   //方法
        watch: {}      //监听
    }
</script>

<style scoped>
  .hotActive{
    background: #C20C0C!important;
  }
  .timeActive{
    background: #C20C0C!important;
    color: white!important;
  }
  .ok-hotsell-time-li{
    width: 25%;
    height: 30px;display: block;float:left;background: white;text-align: center;line-height: 30px;
  }
</style>
