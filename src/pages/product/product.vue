/**
* Created by ztt on 2018/4/22.
*/
<template>
    <div id="">
      <div class="back-bar">
        <router-link to="/sell" style="color: white" class="back-bar-backBtn">&lt;&nbsp;销售
        </router-link>
        <div class="back-bar-name">
          <div style="width: 70%;margin: 0 auto;" @click="categoryShow=!categoryShow" v-model="choosedCategory">{{choosedCategory}}&nbsp;&nbsp;<i class="ion-arrow-down-b"></i> </div>
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
            <span>上架时间</span>
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
          <span>热销</span>
        </div>
      </div>
      </div>
      <div class="ok-model-border"></div>
      <div v-for="(item,index) in myData">
        <ok-product
          :goods-img="item.goodsPhoto"
          :goods-name="item.goodsName"
          :cate-name="item.cateName"
          :discounts="item.youhui"
          :price="item.danjia"
          :addTime="item.shangjiashijian"
          :goodsId="item.goodsId"
          :index="index"
          @addProduct="addProduct"
        ></ok-product>
      </div>
      <div style="position:fixed;bottom:0;height: 30px;width: 100%;border-top: 1px solid #F2F2F2">
        <div style="width: 70%;height: 30px;float: left;padding-left:20px;line-height: 30px;">合计种类：{{productList.length}}</div>
        <div @click="toCart" style="background: #C20C0C;color:white;width:30%;height: 30px;float: left;text-align: center;line-height: 30px;">查看销售单</div>
      </div>


      <transition-group enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
        <div :key="1" v-show="categoryShow" style="z-index:100;background:white;width: 100%;height: 100%;position: absolute;top: 0px; ">
          <div :key="2" style="color: white;height:56px;background:#C20C0C;font-size: 18px;margin: 0 auto;width: 100%;text-align: center;line-height: 56px;">
            <span style="margin-left: 80px">全部分类</span>
            <div :key="3" style="float: right;margin-right: 30px;font-size: 25px;width: 56px;height: 20px;"  @click="categoryShow=!categoryShow" >
              <i :key="4" class="ion-ios-close-empty"></i>
            </div>
          </div>
          <div>
            <!--根分类-->
            <div style="margin-right: 15px;clear: both;">
              <div style="margin-left: 30px;font-size: 18px;height: 36px;line-height: 36px;">全部分类</div>
              <category-tree :data="theData" :name="menuName" @getSubMenu="getSubMenu"></category-tree>
            </div>

          </div>
        </div>
      </transition-group>

    </div>
</template>

<script>
  import Vue from 'vue'
  import { TreeSelect } from 'vant';
  import { Collapse, CollapseItem } from 'vant';
  Vue.use(Collapse).use(CollapseItem);
  import ProductModel from '@/components/common/productModel';

  //分类数据
  const myData = [
    {
      id: '1',
      menuName: '基础管理',
      menuCode: '10',
      children: [
        {
          menuName: '用户管理',
          menuCode: '11'
        },
        {
          id: '12',
          menuName: '角色管理',
          menuCode: '12',
          children: [
            {
              menuName: '管理员',
              menuCode: '121'
            },
            {
              menuName: 'CEO',
              menuCode: '122'
            },
            {
              menuName: 'CFO',
              menuCode: '123'
            },
            {
              menuName: 'COO',
              menuCode: '124'
            },
            {
              menuName: '普通人',
              menuCode: '124'
            }
          ]
        },
        {
          menuName: '权限管理',
          menuCode: '13'
        }
      ]
    },
    {
      id: '2',
      menuName: '商品管理',
      menuCode: '',
      children: [
        {
          menuName: '商品一',
          menuCode: '21'
        },
        {
          id: '22',
          menuName: '商品二',
          menuCode: '22',
          children: [
            {
              menuName: '子类商品1',
              menuCode: '221'
            },
            {
              menuName: '子类商品2',
              menuCode: '222'
            }
          ]
        }
      ]
    },
    {
      id: '3',
      menuName: '订单管理',
      menuCode: '30',
      children: [
        {
          menuName: '订单列表',
          menuCode: '31'
        },
        {
          menuName: '退货列表',
          menuCode: '32',
          children: []
        }
      ]
    },
    {
      id: '4',
      menuName: '商家管理',
      menuCode: '',
      children: []
    }
  ];

  import categoryTree from '@/pages/category/categoryTree'
  import Category from "../category/category";
  Vue.use(TreeSelect);
    export default {
        mixins: [],     //混合
        components: {
          Category,
          'ok-product':ProductModel,
          'category-tree':categoryTree
        },//注册组件
        data() {         //数据
            return {
              choosedCategory:'全部分类',
              theData: myData,
              menuName: 'menuName', // 显示菜单名称的属性
              categoryShow:false,
              totalCount:0,
              arrows_show:[true,false,false,false],
              productList:[],
              myData:[
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
          getSubMenu (categoryItem) {
            this.categoryShow=false;
            console.log(categoryItem.menuName);
            this.choosedCategory=categoryItem.menuName;
          },
          onBuyClicked(){

          },
          onAddCartClicked(){

          },
          onNavClick(index) {
            alert(this.items[index].id);
            this.mainActiveIndex = index;
            alert(index);
            // this.activeId = this.items[index].children[0].id;
          },
          onItemClick(data) {
            this.activeId = data.id;
          },
          arrowsShow(n) {
            for(var i=0;i<this.arrows_show.length;i++){
              this.arrows_show[i]=false;
            }
            switch (n){
              case 0:
                this.arrows_show[0]=true;
                Vue.set(this.arrows_show,0,this.arrows_show[0]);
                break;
              case 1:
                this.arrows_show[1]=true;
                Vue.set(this.arrows_show,1,this.arrows_show[1]);
                break;
              case 2:
                this.arrows_show[2]=true;
                Vue.set(this.arrows_show,2,this.arrows_show[2]);
                break;
              case 3:
                this.arrows_show[3]=true;
                Vue.set(this.arrows_show,3,this.arrows_show[3]);
                break;
              default :

            }
          },
          addProduct(goodsId,isActive){
            console.log(goodsId);
            if(isActive){
              this.productList.push(goodsId);
            }else {
              this.productList.remove(goodsId);
            }
          },
          toCart(){
            this.$router.push({path:'/cart',query:{productList:this.productList}})
          }
        },   //方法
        watch: {}      //监听
    }
</script>

<style scoped>

</style>
