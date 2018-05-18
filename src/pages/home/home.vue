/**
* Created by 朱婷婷 on 2018/4/11.
*/
<template>
  <div>

    <div style="z-index:100;position:fixed;width: 100%;background: #C20C0C;height: 56px;">
      <div style="width: 17%;text-align: center;float: left;line-height: 56px;">
        <img width="30px" height="30px" src="@/assets/icon/ok-icon-white.png"/>
      </div>
      <div style="width: 66%;height: 56px;float: left;padding-top: 10.5px;">
    <router-link to="/product/searchProduct">
      <div style="color: chocolate;height: 35px;width: 100%;border-radius: 5px;background: white;text-align: center;line-height: 35px;font-size: 14px;">
        <i style="font-size: 16px;" class="header-bar-search-icon ion-android-search"></i>
        &nbsp;<span style="position: relative;top:-1px;">查找商品</span>
      </div>
    </router-link>
      </div>
      <div style="width: 17%;height: 56px;float: left;text-align: center;line-height: 56px;font-size: 30px;color: white;">
        <scan :P="P" @scanover="scanOver"/>
        <i class="ion-qr-scanner" @click="P.isOpen=true"></i>
      </div>

      <div style="height:56px;width:100%"></div>

      <van-swipe :autoplay="3000" style="background: white;">
        <van-swipe-item><img height="120px" width="375px" src="@/assets/icon/ok-ad1.png"/></van-swipe-item>
        <van-swipe-item><img height="120px" width="375px" src="@/assets/icon/ok-ad2.png"/></van-swipe-item>
        <van-swipe-item><img height="120px" width="375px" src="@/assets/icon/ok-ad3.png"/></van-swipe-item>
        <van-swipe-item><img height="120px" width="375px" src="@/assets/icon/ok-ad4.png"/></van-swipe-item>
      </van-swipe>
      <van-notice-bar
        text="号外号外！！！OK帮服务现在免费向大众开放了！！！快来注册吧！！！"
        left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
      />
  </div>
  <div class="home-welcome">
    <div class="home-welcome-word">
      <span>欢迎使用OK帮云仓储系统</span>
    </div>
  </div>
  <div style="margin-top:156px;">
    <!--<div v-if="showMenuModel[0]"  class="sales_order_add home-fun-model">-->
      <!--<router-link to="/sell/sellTable" class="home-fun-model-a">-->
        <!--<i class="ion-ios-pricetag home-fun-model-a-icon"></i>-->
        <!--<span class="home-fun-model-a-word">分类管理</span>-->
      <!--</router-link>-->
    <!--</div>-->
    <div v-if="showMenuModel[1]" class="sales_order_add home-fun-model">
      <router-link to="/product" class="home-fun-model-a">
        <i class="ion-bag home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">商品管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[2]" class="sales_order_add home-fun-model">
      <router-link to="/statistics/sellDetails" class="home-fun-model-a">
        <i style="color: orange" class="ion-ios-pie-outline home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">统计报表</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[3]" class="sales_order_add home-fun-model">
      <router-link to="/sell/sellTable" class="home-fun-model-a">
        <i class="ion-ios-pricetag home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">销售单</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[4]" class="sales_order_add home-fun-model">
      <router-link to="/warehouse/purchaseOrder" class="home-fun-model-a">
        <i class="ion-ios-pricetag home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">入库单</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[5]" class="sales_order_add home-fun-model">
      <router-link to="/sell/sellHistory" class="home-fun-model-a">
        <i class="ion-ios-list home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">销售历史</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[11]"  class="home-fun-model">
      <router-link to="/statistics/hotSell" class="home-fun-model-a">
        <i style="color: #FF3030" class="ion-fireball home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">热销排行</span>
      </router-link>
    </div>
    <!--<div v-if="showMenuModel[8]"  class="home-fun-model">-->
      <!--<router-link to="/home" class="home-fun-model-a">-->
        <!--<i class="ion-ios-cart home-fun-model-a-icon"></i>-->
        <!--<span class="home-fun-model-a-word">采购单</span>-->
      <!--</router-link>-->
    <!--</div>-->
    <div v-if="showMenuModel[9]" class="home-fun-model">
      <router-link to="/warehouse/stock" class="home-fun-model-a">
        <i class="ion-ios-box home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">库存管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[13]"  class="home-fun-model">
      <router-link to="/warehouse/warehouse" class="home-fun-model-a">
        <i style="color: #ff943b" class="ion-ios-home home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">仓库管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[12]"  class="home-fun-model">
      <router-link to="/user/customer" class="home-fun-model-a">
        <i style="color: #EEEE00" class="ion-ios-people home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">客户管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[6]" class="sales_order_add home-fun-model">
      <router-link to="/user/supplier" class="home-fun-model-a">
        <i style="color: #66CD00" class="ion-ios-people-outline home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">供应商管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[10]"  class="home-fun-model">
      <router-link to="/employee" class="home-fun-model-a">
        <i style="color: #108ee9" class="ion-ios-people home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">员工管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[14]"  class="home-fun-model">
      <router-link to="/role" class="home-fun-model-a">
        <i style="color: blueviolet" class="ion-ios-person home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">角色管理</span>
      </router-link>
    </div>
    <!-- <div class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i style="font-size: 35px;display: block;"></i>
        <span class="home-fun-model-a-word">。。。</span>
      </router-link>
    </div> -->
    <div v-if="permissionCount==0"  style="color: #888888;text-align: center;padding: 20px;clear: both;">
      暂无任何权限，请联系老板为你增添权限哟~
    </div>
    <div style="width:100%;height:56px;clear:both;"></div>
  </div>
    <ok-footer></ok-footer>
  </div>

</template>

<script>
  import Vue from 'vue';
  import {getMenuCodeList} from "../../service/getData";
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
  import { Swipe, SwipeItem } from 'vant';
  import { NoticeBar } from 'vant';
  import scan from '@/components/common/scan';
  import { Toast } from 'vant';

  Vue.use(NoticeBar);

  Vue.use(Swipe).use(SwipeItem);
  import Footer from '@/components/footer/footer'

  Vue.use(Icon);

  Vue.use(NavBar);

    export default {
      mixins: [],     //混合
      components: {
        'ok-footer':Footer,
        scan
      },//注册组件
      data() {         //数据
        return {
          goods:"",
          //vue无法直接检测数组的更新，需要使用Vue对象set方法  Vue.set(数组名，i，数组[i])
          showMenuModel:[false,false,false,false,false,false,false,false,false,false,false,false],
          P:{isOpen:false},
          permissionCount:0,
          hasRepertory:false,
          hasSell:false,
          hasStatistics:false
        };
      },
      computed: {},  //计算属性
      created() {
        if (window.plus){plus.navigator.setStatusBarBackground('#C20C0C');}
        var menuList=[];
        getMenuCodeList().then(
          response=>{
           menuList  =response.data;
            for(let item of menuList){
              switch (item.menuCode) {
                case 'category':this.showMenuModel[0]=true;
                  break;
                case 'customer':this.showMenuModel[12]=true;
                  break;
                case 'employee':this.showMenuModel[10]=true;
                  break;
                case 'product':this.showMenuModel[1]=true;
                  break;
                case 'report':this.showMenuModel[11]=true;
                  break;
                case 'sales_order_history':this.showMenuModel[3]=true;this.showMenuModel[5]=true;
                  break;
                case 'role':this.showMenuModel[14]=true;
                  break;
                case 'sales_order_add':this.showMenuModel[7]=true;
                  break;
                case 'stock':this.showMenuModel[9]=true;
                  break;
                case 'supplier':this.showMenuModel[6]=true;
                  break;
                case 'warehouse':this.showMenuModel[13]=true;
                  break;
                default:
                Vue.set(this.showMenuModel,0,this.showMenuModel[0]);
              }
            }
            this.permissionCount=menuList.length;

            var menuListCode = [];
            for(let item of menuList){
              menuListCode.push(item.menuCode);
            }
            let warehosePerList=menuListCode.filter(function(item) {
              if(item=='warehouse'||item=='stock'||item=='delivery_order')
                return item;
            });
            console.log(warehosePerList);
            if(warehosePerList.length==3){
              this.hasRepertory=true;
            }else {
              this.hasRepertory=false;
            }

            let sellPerList=menuListCode.filter(function(item) {
              if(item=='product'||item=='category'||item=='sales_order_add'||item=='sales_order_history'||item=='sales_order')
                return item;
            });
            if(sellPerList.length==5){
              this.hasSell=true;
            }else {
              this.hasSell=false;
            }

            let statisticsPerList=menuListCode.filter(function(item) {
              if(item=='report')
                return item;
            });
            if(statisticsPerList.length==1){
              this.hasStatistics=true;
            }else {
              this.hasStatistics=false;
            }





          },error=>{
            console.log(error.response.msg)
          });



      },   //创建
      mounted() {
      },   //挂载
      methods: {
        showModel(){
          for(var i=0;i<6;i++){
            this.showMenuModel[i]=!this.showMenuModel[i];
            Vue.set(this.showMenuModel,i,this.showMenuModel[i]);
          }

        },
        scanOver(code){
          this.$router.push({path:'/product/searchProduct',query:{barCode:code}});
        }
      },   //方法
      watch: {},      //监听
      beforeRouteLeave(to,from,next){
        if(to.fullPath=='/repertory'&&!this.hasRepertory){
          Toast.fail("你无权访问此模块")
          next({path:'/home'});
          return;
        }
        if(to.fullPath=='/sell'&&!this.hasSell){
          Toast.fail("你无权访问此模块")
          next({path:'/home'});
              return;
        }
        if(to.fullPath=='/statistics'&&!this.hasStatistics){
          Toast.fail("你无权访问此模块")
          next({path:'/home'});
              return;
        }

        next();
      }
    }
</script>

<style scoped>

  .home-welcome{
    height: 56px;
    text-align: center;
    line-height: 56px;
  }
  .home-welcome-word{
    background: #C20C0C;
    color: white;
    text-align: center;
    font-size: 18px;
  }
  .home-fun-model{
    border-right:0.3px solid #F2F2F2;
    border-bottom:0.3px solid #F2F2F2;
    display:block;
    float:left;
    height: 130px;
    width: 33.3%;
    padding-top: 20px;
  }
  .home-fun-model-a{
    color: orangered;
    text-align: center;
  }
  .home-fun-model-a-icon{
    font-size: 35px;
    display: block;
  }
  .home-fun-model-a-word{
    font-size: 14px;
    color: black;
    display: block;
  }
</style>
