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
        <van-swipe-item><img height="120px" width="100%" src="@/assets/icon/lunbo1.jpg"/></van-swipe-item>
        <van-swipe-item><img height="120px" width="100%" src="@/assets/icon/lunbo2.jpg"/></van-swipe-item>
        <van-swipe-item>平台广告3</van-swipe-item>
        <van-swipe-item>平台广告4</van-swipe-item>
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
    <div v-if="showMenuModel[0]"  class="sales_order_add home-fun-model">
      <router-link to="/sell/sellTable" class="home-fun-model-a">
        <i class="ion-ios-pricetag home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">分类管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[1]" class="sales_order_add home-fun-model">
      <router-link to="/sell/sellTable" class="home-fun-model-a">
        <i class="ion-ios-pricetag home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">商品管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[2]" class="sales_order_add home-fun-model">
      <router-link to="/sell/sellTable" class="home-fun-model-a">
        <i class="ion-ios-pricetag home-fun-model-a-icon"></i>
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
      <router-link to="/sell/sellTable" class="home-fun-model-a">
        <i class="ion-ios-pricetag home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">入库单</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[5]" class="sales_order_add home-fun-model">
      <router-link to="/sell/sellTable" class="home-fun-model-a">
        <i class="ion-ios-pricetag home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">销售历史</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[6]" class="sales_order_add home-fun-model">
      <router-link to="/sell/sellTable" class="home-fun-model-a">
        <i class="ion-ios-pricetag home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">供应商管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[7]" class="sales_order_add home-fun-model">
      <router-link to="/sell/sellTable" class="home-fun-model-a">
        <i class="ion-ios-pricetag home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">新增销售单</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[8]"  class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i class="ion-ios-cart home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">采购单</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[9]" class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i class="ion-ios-box home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">库存管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[10]"  class="home-fun-model">
      <router-link to="/employee" class="home-fun-model-a">
        <i class="ion-ios-people home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">员工管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[11]"  class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i class="ion-ios-help home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">快速入门</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[12]"  class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i class="ion-ios-help home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">客户管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[13]"  class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i class="ion-ios-help home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">仓库管理</span>
      </router-link>
    </div>
    <div v-if="showMenuModel[14]"  class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i class="ion-ios-help home-fun-model-a-icon"></i>
        <span class="home-fun-model-a-word">角色管理</span>
      </router-link>
    </div>
    <!-- <div class="home-fun-model">
      <router-link to="/home" class="home-fun-model-a">
        <i style="font-size: 35px;display: block;"></i>
        <span class="home-fun-model-a-word">。。。</span>
      </router-link>
    </div> -->
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

  Vue.use(NoticeBar);

  Vue.use(Swipe).use(SwipeItem);
  const Footer = resolve => require(['@/components/footer/footer'], resolve);
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
          showMenuModel:[false,false,false,false,false,false,false,false,false,false,false,true],
          P:{isOpen:false}
        };
      },
      computed: {},  //计算属性
      created() {
        getMenuCodeList().then(
          response=>{
            let menuList=response.data;
            for(let item of menuList){
              switch (item.menuCode) {
                case 'category':this.showMenuModel[0]=true;
                  break;
                case 'customer':this.showMenuModel[12]=true;
                  break;
                case 'employee':this.showMenuModel[10]=true;
                  break;
                case 'goods':this.showMenuModel[1]=true;
                  break;
                case 'report':this.showMenuModel[2]=true;
                  break;
                case 'role':this.showMenuModel[14]=true;
                  break;
                case 'sales_order_add':this.showMenuModel[7]=true;
                  break;
                case 'sales_order_history':this.showMenuModel[5]=true;
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
          },error=>{
            console.log(error.response.msg)
          }
        );
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
          // console.log(code);
          alert(code);
        }
      },   //方法
      watch: {}      //监听
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
    border-right:0.3px solid #cccccc;
    border-bottom:0.3px solid #cccccc;
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
    font-size: 18px;
    display: block;
  }
</style>
