/**
* Created by ztt on 2018/4/22.
*/
<template>
    <div id="">
      <div class="back-bar">
        <router-link to="/sell" style="color: white" class="back-bar-backBtn">&lt;&nbsp;销售
        </router-link>
        <div class="back-bar-name">
          <div style="width: 70%;margin: 0 auto;" @click="categoryShow=!categoryShow">全部分类(51)&nbsp;&nbsp;<i class="ion-arrow-down-b"></i> </div>
        </div>
        <div class="back-bar-cancelBtn">
          <router-link to="/product/productInfo" style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
            <i class="ion-ios-plus-empty"></i>
          </router-link>
          <div style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
            <i class="ion-ios-search"></i>
          </div>
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
        <div style="height: 100px;width: auto;display: block;">
          <div style="display: block;float: left;width: 30%;text-align: center;height:100px;line-height: 100px;">
            <img :src="item.goodsPhoto | defaultImg" width="70px" height="70px"/>
          </div>
          <div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">
            <div style="width:100%;display: block;float: left;font-size: 16px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">{{item.goodsName}}</div>
            <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background:#2D84FF;border-radius: 5px;margin-right: 5px;">{{item.cateName}}</div>
            <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;">{{item.youhui}}</div>
            <div style="clear: both;color: orange;">￥{{item.danjia}}</div>
            <div  style="clear: both;color: #888888;">上架时间：{{item.shangjiashijian}}</div>
          </div>
          <div style="font-size:30px;line-height:30px;padding-top:20px;height:80px;display: block;float: left;width: 20%;height:80px;text-align: center;">
            <i style="display: block" class="ion-share"></i>
            <i :class="{cartActive:isActive[index]}" @click="addProduct(item.goodsId,index)" style="display: block" class="ion-ios-cart"></i>
          </div>
        </div>
        <div class="ok-model-border"></div>
      </div>
      <div style="position:fixed;bottom:0;height: 30px;width: 100%;border-top: 1px solid #F2F2F2">
        <div style="width: 70%;height: 30px;float: left;padding-left:20px;line-height: 30px;">合计种类：{{productList.length}}</div>
        <div @click="toCart" style="background: #C20C0C;color:white;width:30%;height: 30px;float: left;text-align: center;line-height: 30px;">查看购物车</div>
      </div>
      <transition-group enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
        <div :key="1" v-show="categoryShow" style="z-index:100;background:white;width: 100%;height: 100%;position: absolute;top: 0px; ">
          <div :key="2" style="color: white;height:56px;background:#C20C0C;font-size: 18px;margin: 0 auto;width: 100%;text-align: center;line-height: 56px;">
            全部分类
            <div :key="3" style="float: right;margin-right: 30px;font-size: 25px;width: 56px;height: 20px;"  @click="categoryShow=!categoryShow" >
              <i :key="4" class="ion-ios-close-empty"></i>
            </div>
          </div>

            <van-tree-select
              :key="5"
              :items="items"
              :main-active-index="mainActiveIndex"
              :active-id="activeId"
              @navclick="onNavClick"
              @itemclick="onItemClick"
            />

        </div>
      </transition-group>

    </div>
</template>

<script>
  import Vue from 'vue'
  import { TreeSelect } from 'vant';
  Vue.use(TreeSelect);
    export default {
        mixins: [],     //混合
        components: {
          'item':{
             template:`<ul>\\
                     <li v-for="child in model">\\
                         <item-child v-if="child.children" :folder="child"  @transid="getid(arguments[0])"/>\\
                        <p v-else @click="getid(child.id)">{{ child.name }}</p>\\
                      </li>\\
                  </ul>`,
             props:{ model: Object },
             methods:{
                  getid:function(id){
                        this.$emit('transid',id);
                     },
             },
            'item-child':{
             template:`<div>\\
                  <p @click="toggle(folder.children)" @click="getid(folder.id)">{{ folder.name }}<a v-if="folder.children">{{ open ? pack : lanch}}</a></p>\\
                  <item v-if="folder.children" :model="folder.children" v-show="open" @transid="getid(arguments[0])"/>\\
                 </div>`,
             props:{ folder: Object },
            methods:{
                    toggle:function(status){
                       if(status){ this.open = !this.open; }
                    },
                   getid:function(id){
                        this.$emit('transid',id);
                   }
                },
             data:function(){
                 return {
                        open:false,
                       lanch:' [+]',
                       pack:' [-]',
                   }
             },
        }
       }
        },//注册组件
        data() {         //数据
            return {
              items: [
                {
                  id:2000,
                  // 导航名称
                  text: '毛巾',
                  // 该导航下所有的可选项
                  children: [
                    {
                      // 可选项的名称
                      text: '红色',
                      // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
                      id: 2002
                    },
                    {
                      // 可选项的名称
                      text: '绿色',
                      // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
                      id: 2001
                    }
                  ]
                },{
                  id:3000,
                  // 导航名称
                  text: '牙膏',
                  // 该导航下所有的可选项
                  children: [
                    {
                      // 可选项的名称
                      text: '中华',
                      // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
                      id: 3002
                    },
                    {
                      // 可选项的名称
                      text: '佳洁士',
                      // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
                      id: 3001
                    }
                  ]
                }
              ],
              // 左侧高亮元素的index
              mainActiveIndex: 0,
              // 被选中元素的id
              activeId: 1001,
              categoryShow:false,
              isActive:[],
              totalCount:0,
              arrows_show:[true,false,false,false],
              productList:[],
              myData:[
                {goodsId:10000,goodsPhoto:'',goodsName:'菀草壹韩版春季宽松春秋蝙蝠袖风衣',cateName:'大衣',youhui:'特惠',danjia:'599.00',shangjiashijian:'2018-4-20 2:20:10'},
                {goodsId:10001,goodsPhoto:'',goodsName:'菀草壹韩版春季宽松春秋蝙蝠袖风衣',cateName:'大衣',youhui:'特惠',danjia:'499.00',shangjiashijian:'2018-4-20 2:20:10'},
                {goodsId:10002,goodsPhoto:'',goodsName:'菀草壹韩版春季宽松春秋蝙蝠袖风衣',cateName:'大衣',youhui:'特惠',danjia:'699.00',shangjiashijian:'2018-4-20 2:20:10'}
                ]
            };
        },
        computed: {},  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {
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
          addProduct(n,index){
            this.isActive[index]=!this.isActive[index];
            console.log(n);
            if(this.isActive[index]){
              this.productList.push(n);
            }else {
              this.productList.remove(n);
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
  .cartActive{
    color: orange;
  }
</style>
