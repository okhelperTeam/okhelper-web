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
      <div v-if="HotOrColdProductList.length>0">
        <div v-for="(item,index) in HotOrColdProductList">
          <ok-product
            :main-img="item.mainImg"
            :product-name="item.productName"
            :cate-name="item.productAttribute"
            :retail-price="item.retailPrice"
            :createTime="item.createTime"
            :Id="item.id"
            :index="index"
            :salesStock="item.salesStock"
            :salesVolume="item.salesVolume"
            @addProduct="addProduct"
          />
        </div>
      </div>
      <div v-if="HotOrColdProductList.length==0"  style="color: #888888;text-align: center;padding: 20px;">
        没有您要找的商品......
      </div>

    </div>
</template>

<script>
  import Vue from 'vue'
  import ProductModel from '@/components/common/productModel';
  import {getHotOrColdProductList} from '@/service/getData';
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
              myData:{isHot:true,range:'today'},
              HotOrColdProductList:[],
              productChoosedList:[]
            };
        },
        computed: {},  //计算属性
        created() {
          this.onLoad();
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          onLoad() {//上划加载商品
            getHotOrColdProductList(this.myData).then(
              response=>{
                for(var i=0;i<response.data.length;i++){
                  this.HotOrColdProductList.push(response.data[i]);
                }
                this.loading=false;
              },error=>{
                console.log(error.response.msg);
              }
            );
          },
          reLoad(){
            this.HotOrColdProductList=[];
            this.onLoad();
          },
          isHotP(n){
            this.isHot=false;this.isCold=false;
            switch (n){
              case 1:this.isHot=true;this.myData.isHot=true;this.reLoad();break;
              case 2:this.isCold=true;this.myData.isHot=false;this.reLoad();break;
              default:this.isHot=true;this.myData.isHot=true;this.reLoad();
            }
          },
          hotTime(n){
            this.isToday=false;this.isYesterday=false;this.isAWeek=false;this.isAMonth=false;
            switch (n){
              case 1:this.isToday=true;this.myData.range='today';this.reLoad();break;
              case 2:this.isYesterday=true;this.myData.range='threeDays';this.reLoad();break;
              case 3:this.isAWeek=true;this.myData.range='week';this.reLoad();break;
              case 4:this.isAMonth=true;this.myData.range='month';this.reLoad();break;
              default:this.isToday=true;this.myData.range='today';this.reLoad();
            }
          },
          addProduct(goodsId,isActive){
            console.log(goodsId);
            if(isActive){
              this.productChoosedList.push(goodsId);
            }else {
              this.productChoosedList.remove(goodsId);
            }
          },
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
