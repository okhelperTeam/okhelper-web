/**
* Created by ztt on 2018/4/25.
*/
<template>
    <div id="">
      <div class="header-bar">
        <div class="header-bar-icon">
          <i class="ion-qr-scanner"></i>
        </div>
        <div class="header-bar-search">
          <div class="header-bar-search2">
            <i class="header-bar-search-icon ion-android-search"></i>
            <input class="header-bar-search-text"  v-model="searchProductName" type="text" placeholder="查找商品"/>
          </div>
        </div>
        <span @click="$router.back()" class="header-bar-cancel-btn">取消</span>
      </div>
      <div class="ok-model-border"></div>
      <div style="margin-top:56px;"></div>
      <div v-if="productList.length>0">
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
              @addProduct="addProduct"
            />
          </div>
        </van-list>
        <div v-if="productList.length>0" style="height: 30px;width: 100%;"></div>
        <div style="position:fixed;bottom:0;height: 30px;width: 100%;border-top: 1px solid #F2F2F2">
          <div style="background:white;width: 70%;height: 30px;float: left;padding-left:20px;line-height: 30px;">合计种类：{{productChoosedList.length}}</div>
          <div @click="toSellTable" style="background: #C20C0C;color:white;width:30%;height: 30px;float: left;text-align: center;line-height: 30px;">选好了</div>
        </div>
      </div>
      <div v-if="pageNum!=0&&productList.length==0&&finished==true">
        <div  style="color: #888888;text-align: center;padding: 10px;margin-top: 30%;">
          没有找到相关商品
        </div>
        <div style="width: 100%;text-align: center;padding-bottom: 20px;">
          <div style="width:30%;border: 1px solid black;border-radius: 5px;height: 40px;padding-left:10px;padding-right:10px;line-height: 40px;text-align: center;margin: 0 auto;">
            去新增商品
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  const Header = resolve => require(['@/components/header/header'], resolve);
  const Footer = resolve => require(['@/components/footer/footer'], resolve);
  import Vue from 'vue'
  import { Search } from 'vant';
  import {getProductListByName} from '@/service/getData';
  import { List } from 'vant';
  import ProductModel from '@/components/common/productModel';
  import _ from 'lodash';
  Vue.use(List);

  Vue.use(Search);
    export default {
        mixins: [],     //混合
        components: {
          'ok-header':Header,
          'ok-footer':Footer,
          'ok-product':ProductModel
        },//注册组件
        data() {         //数据
            return {
              loading:false,
              finished:false,
              lastPage:'',
              searchProductName:'',
              pageNum:0,
              paging:true,
              limit:6,
              productList:[],
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
          toSellTable(){
            this.$router.push({path:'/sell/sellTable',query:{productChoosedList:this.productChoosedList}})
          },
          onLoad(){//上划加载商品
            this.pageNum++;
            getProductListByName({
              paging: this.paging,
              pageNum: this.pageNum,
              limit: this.limit,
              condition:this.searchProductName
            }).then(
              response => {
                for(var i=0;i<response.data.results.length;i++){
                  this.productList.push(response.data.results[i]);
                }
                this.loading=false;
                if (response.data.lastPage) {
                  this.finished = true;
                }
              },error=> {
                this.loading = false;
                this.finished = true;
                console.log(error.response.msg);
              }
            );
          },
          reLoad(){//重新加载商品
            this.pageNum=0;
            this.productList=[];
            this.finished=false;
            this.onLoad();
          },
          addProduct(productId){//选择商品
            this.productChoosedList.push(productId);
          },
          search:_.debounce(function(){
            this.reLoad()
          },500)
        },   //方法
        watch: {
          searchProductName:function (newValue,oldValue) {
              this.searchProductName=newValue;
              this.search();
          }
        }
    }
</script>

<style scoped>

  .header-bar{
    top: 0;
    position: fixed;
    width: 100%;
    z-index: 100;
    height: 56px;
    background: #C20C0C;
    text-align: center;
    line-height: 56px;
    padding: 10.5px;
  }
  .header-bar-icon{
    width: 15%;
    font-size: 30px;
    height: 35px;
    margin-top:-10px;
    display: block;
    float: left;
    color:white;
  }
  .header-bar-search{
    width: 70%;
    display: block;
    float: left;
    height: 35px;
    border-radius:5px;
    background: white;
    color:chocolate;
    margin: 0 auto;
    font-size: 16px;
  }
  input::-webkit-input-placeholder { /* WebKit browsers */
    color: chocolate;
  }

  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: chocolate;
  }

  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: chocolate;
  }

  input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: chocolate;
  }

  .header-bar-search2{
    width: 100%;
    line-height: 35px;
    height:35px;
    display: block;
    float: left;
  }
  .header-bar-search-icon{
    display: block;
    margin-left:5px;
    margin-right:5px;
    float: left;
    width: 8%;
  }
  .header-bar-search-text{
    font-size:14px;
    height: 30px;
    margin-top:2px;
    display: block;
    float: left;
    width: 80%;
  }
  .header-bar-cancel-btn{
    color: white;
    font-size: 18px;
    display: block;
    float: left;
    margin-left: 10px;
    margin-top: -12px;
  }
</style>
