/**
* Created by lulu on 2018/4/26.
*/


<!--<template>-->
  <!--<div id="">-->
    <!--<div class="back-bar">-->
      <!--<router-link to="/repertory" style="color: white" class="back-bar-backBtn">&lt;&nbsp;库存-->
      <!--</router-link>-->
      <!--<div class="back-bar-name">-->
        <!--临期预警-->
      <!--</div>-->
      <!--<div class="back-bar-cancelBtn">-->
        <!--<div style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">-->
          <!--<i class="ion-ios-search"></i>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div style="margin-top:56px;height: 37px;width: 100%;">-->
      <!--<div style="width: 25%;height: 37px;display: block;float: left" @click="arrowsShow(0)">-->
        <!--<div style="width: 80%;margin: 0 auto;height: 37px;line-height: 37px;text-align: center;">-->
          <!--<i v-show="arrows_show[0]" class="ion-arrow-down-c"></i>-->
          <!--<span>临期时间</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div style="width: 25%;height: 37px;display: block;float: left" @click="arrowsShow(1)">-->
        <!--<div style="width: 80%;margin: 0 auto;height: 37px;line-height: 37px;text-align: center;">-->
          <!--<i v-show="arrows_show[1]" class="ion-arrow-down-c"></i>-->
          <!--<span>名称</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div style="width: 25%;height: 37px;display: block;float: left" @click="arrowsShow(2)">-->
        <!--<div style="width: 80%;margin: 0 auto;height: 37px;line-height: 37px;text-align: center;">-->
          <!--<i v-show="arrows_show[2]" class="ion-arrow-down-c"></i>-->
          <!--<span>货号</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div style="width: 25%;height: 37px;display: block;float: left" @click="arrowsShow(3)">-->
        <!--<div style="width: 80%;margin: 0 auto;height: 37px;line-height: 37px;text-align: center;">-->
          <!--<i v-show="arrows_show[3]" class="ion-arrow-down-c"></i>-->
          <!--<span>库存量</span>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="ok-model-border"></div>-->
    <!--<div class="employee-info-box" style="height: 100px;width: auto;display: block;">-->
      <!--<div style="display: block;float: left;width: 30%;text-align: center;height:100px;line-height: 100px;">-->
        <!--<img src="@/assets/icon/food.png" width="80px" height="80px"/>-->
      <!--</div>-->
      <!--<div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">-->
        <!--<div style="width:100%;display: block;float: left;font-size: 16px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">菀草壹麦片</div>-->
        <!--<div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background:#2D84FF;border-radius: 5px;margin-right: 5px;">货号：802</div>-->
        <!--<div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;">一号仓库</div>-->
        <!--<div style="clear: both;color: orange;">当前库存量：10件</div>-->
        <!--<div  style="clear: both;color: #888888;">到期时间：10天</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="ok-model-border"></div>-->

    <!--<div class="employee-info-box" style="height: 100px;width: auto;display: block;">-->
      <!--<div style="display: block;float: left;width: 30%;text-align: center;height:100px;line-height: 100px;">-->
        <!--<img src="@/assets/icon/food.png" width="80px" height="80px"/>-->
      <!--</div>-->
      <!--<div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">-->
        <!--<div style="width:100%;display: block;float: left;font-size: 16px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">菀草壹麦片</div>-->
        <!--<div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background:#2D84FF;border-radius: 5px;margin-right: 5px;">货号：B0986</div>-->
        <!--<div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;">二号仓库</div>-->
        <!--<div style="clear: both;color: orange;">当前库存量：10件</div>-->
        <!--<div  style="clear: both;color: #888888;">到期时间：15天</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="ok-model-border"></div>-->

    <!--<div class="employee-info-box" style="height: 100px;width: auto;display: block;">-->
      <!--<div style="display: block;float: left;width: 30%;text-align: center;height:100px;line-height: 100px;">-->
        <!--<img src="@/assets/icon/food.png" width="80px" height="80px"/>-->
      <!--</div>-->
      <!--<div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">-->
        <!--<div style="width:100%;display: block;float: left;font-size: 16px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">菀草壹麦片</div>-->
        <!--<div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background:#2D84FF;border-radius: 5px;margin-right: 5px;">货号：1328</div>-->
        <!--<div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;">三号仓库</div>-->
        <!--<div style="clear: both;color: orange;">当前库存量：10件</div>-->
        <!--<div  style="clear: both;color: #888888;">到期时间：5天</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="ok-model-border"></div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--mixins: [],     //混合-->
    <!--components: {},//注册组件-->
    <!--data() {         //数据-->
      <!--return {-->
        <!--arrows_show:[true,false,false,false]-->
      <!--};-->
    <!--},-->
    <!--computed: {},  //计算属性-->
    <!--created() {-->
    <!--},   //创建-->
    <!--mounted() {-->
    <!--},   //挂载-->
    <!--methods: {-->
      <!--arrowsShow:function (n) {-->
        <!--alert(n);-->
        <!--this.arrows_show[0]=false;-->
        <!--this.arrows_show[1]=false;-->
        <!--this.arrows_show[2]=false;-->
        <!--this.arrows_show[3]=false;-->
        <!--this.arrows_show[n]=true;-->
        <!--alert(n);-->
      <!--}-->
    <!--},   //方法-->
    <!--watch: {}      //监听-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->



/**
* Created by lulu on 2018/5/11.
*/


<template>
  <div id="">
    <div class="back-bar">
      <router-link to="/repertory" style="color: white;" class="back-bar-backBtn">&lt;&nbsp;库存
      </router-link>
      <div class="back-bar-name">
        临期商品
      </div>
      <div class="back-bar-cancelBtn">
        <router-link to="/product/productInfo" style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-plus-empty"></i>
        </router-link>
        <router-link to="/product/SearchProduct" style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-search"></i>
        </router-link>
      </div>
    </div>
    <div style="margin-top:56px;height: 37px;width: 100%;">
      <div style="width: 25%;height: 37px;display: block;float: left" @click="arrowsShow(0)">
        <div style="width: 80%;margin: 0 auto;height: 37px;line-height: 37px;text-align: center;">
          <i v-if="arrows_show[0]" class="ion-arrow-down-c"></i>
          <span>默认</span>
        </div>
      </div>
      <div style="width: 25%;height: 37px;display: block;float: left" @click="arrowsShow(1)">
        <div style="width: 80%;margin: 0 auto;height: 37px;line-height: 37px;text-align: center;">
          <i v-if="arrows_show[1]" class="ion-arrow-down-c"></i>
          <span>价格</span>
        </div>
      </div>
      <div style="width: 25%;height: 37px;display: block;float: left" @click="arrowsShow(2)">
        <div style="width: 80%;margin: 0 auto;height: 37px;line-height: 37px;text-align: center;">
          <i v-if="arrows_show[2]" class="ion-arrow-down-c"></i>
          <span>销量</span>
        </div>
      </div>
      <div style="width: 25%;height: 37px;display: block;float: left" @click="arrowsShow(3)">
        <div style="width: 80%;margin: 0 auto;height: 37px;line-height: 37px;text-align: center;">
          <i v-if="arrows_show[3]" class="ion-arrow-down-c"></i>
          <span>库存</span>
        </div>
      </div>
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
            :warehouse-name="item.warehouse.name"
            :product-date="item.productDate"
            :Id="item.id"
            :index="index"
            :shelfLife="item.shelfLife"
            @addProduct="addProduct"
          />
        </div>
      </van-list>
      <div v-if="finished&&myData.pageNum>1" style="color: #888888;text-align: center;padding: 20px;">
        到底了别滑了，真的没了.....
      </div>
    </div>
    <div v-else  style="color: #888888;text-align: center;padding: 20px;">
      没有您要找的商品......
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Collapse, CollapseItem } from 'vant';
  import EarlyProductModel from '@/components/common/earlyProductModel';
  import Category from "../category/category";
  import {getearlyWarningList} from '@/service/getData';
  import { List } from 'vant';
  Vue.use(List);
  Vue.use(Collapse).use(CollapseItem);
  export default {
    mixins: [],     //混合
    components: {
      'ok-category':Category,
      'ok-product':EarlyProductModel
    },//注册组件
    data() {         //数据
      return {
        loading: false,
        finished: false,
        myData:{paging:true,pageNum:0,limit:6,categoryId:0,orderBy:'create_time desc'},
        totalCount:0,
        arrows_show:[true,false,false,false],
        productList:[],
        days:15,
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
        getearlyWarningList(this.myData,this.days).then(
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
      // getChoosedCategoryId(categoryItem){//获取从子组件来的分类id
      //   this.parentData.choosedCategoryName=categoryItem.categoryName;
      //   this.myData.categoryId=categoryItem.id;
      //   this.myData.orderBy='create_time desc';
      //   this.reLoad();
      // },
      arrowsShow(n) {
        for(var i=0;i<this.arrows_show.length;i++){
          this.arrows_show[i]=false;
        }
        switch (n){
          case 0:
            this.arrows_show[0]=true;
            Vue.set(this.arrows_show,0,this.arrows_show[0]);
            this.myData.orderBy='create_time desc';
            this.reLoad();
            break;
          case 1:
            this.arrows_show[1]=true;
            Vue.set(this.arrows_show,1,this.arrows_show[1]);
            this.myData.orderBy='retail_price desc';
            this.reLoad();
            break;
          case 2:
            this.arrows_show[2]=true;
            Vue.set(this.arrows_show,2,this.arrows_show[2]);
            this.myData.orderBy='retail_price desc';
            this.reLoad();
            break;
          case 3:
            this.arrows_show[3]=true;
            Vue.set(this.arrows_show,3,this.arrows_show[3]);
            this.myData.orderBy='sales_stock desc';
            this.reLoad();
            break;
          default :

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
      // toCart(){
      //   this.$router.push({path:'/cart',query:{productChoosedList:this.productChoosedList}})
      // }
    },   //方法
    watch: {}      //监听
  }
</script>

<style scoped>

</style>
