/**
* Created by lulu on 2018/4/15.
*/


<template>
  <div style="height: 100%;">
    <div class="container" style="width: auto">
      <div>
        <div  style="color:white;background: #C20C0C;font-size:16px;padding-top:12px;height: 56px;width: 100%;text-align: center;">
          <div style="display: block;font-size: 20px;">个人信息</div>
        </div>
      </div>
    </div>
    <div>
      <i class="ion-social-snapchat" style="font-size: 70px;margin-left: 10%"></i>
      <div>
        <router-link to="/user/register">
          <div>
            <van-field style="font-size: 20px;float: left;margin-left: 33%;margin-top: -18%;color: black">用户名</van-field>
          </div>
          <div class="person-icon">
            <i class="ion-chevron-right"></i>
          </div>
        </router-link>
      </div>
    </div>
    <div style="margin-top: -3%">
      <div class="person-manger">
        <router-link to="/product">
          <div class="photo-icon" style="color: #CD4F39">
            <i class="ion-social-instagram"></i>
          </div>
          <div>
            <label style="font-size: 20px;float: left;margin-left: 20%;margin-top: -11%;color: black">商品管理</label>
          </div>
          <div class="manger-icon">
            <i class="ion-chevron-right"></i>
          </div>
        </router-link>
        <hr>
      </div>
      <div class="person-manger">
        <router-link to="/warehouse/warehouse">
          <div class="photo-icon" style="color: #EE2C2C">
            <i class="ion-android-home"></i>
          </div>
          <div>
            <label style="font-size: 20px;float: left;margin-left: 20%;margin-top: -11%;color: black">仓库管理</label>
          </div>
          <div class="manger-icon">
            <i class="ion-chevron-right"></i>
          </div>
        </router-link>
        <hr>
      </div>
      <div class="person-manger">
        <router-link to="/user/customer">
          <div class="photo-icon" style="color: #8DB6CD">
            <i class="ion-ios-person"></i>
          </div>
          <div>
            <label style="font-size: 20px;float: left;margin-left: 20%;margin-top: -11%;color: black">客户管理</label>
          </div>
          <div class="manger-icon">
            <i class="ion-chevron-right"></i>
          </div>
        </router-link>
        <hr>
      </div>
      <div class="person-manger">
        <router-link to="/user/supplier">
          <div class="photo-icon" style="color: #9AFF9A">
            <i class="ion-soup-can"></i>
          </div>
          <div>
            <label style="font-size: 20px;float: left;margin-left: 20%;margin-top: -11%;color: black">供应商管理</label>
          </div>
          <div class="manger-icon">
            <i class="ion-chevron-right"></i>
          </div>
        </router-link>
        <hr>
      </div>
      <div class="person-manger">
        <router-link to="/user/register">
          <div class="photo-icon" style="color: #EE9A00">
            <i class="ion-gear-b"></i>
          </div>
          <div>
            <label style="font-size: 20px;float: left;margin-left: 20%;margin-top: -11%;color: black">系统设置</label>
          </div>
          <div class="manger-icon">
            <i class="ion-chevron-right"></i>
          </div>
        </router-link>
        <hr>
      </div>
      <!--<div class="person-manger" style="background-color: #F2F2F2;height: 50px;margin-top: -0.1%">-->
        <!--<span @click="exitLogin">-->
          <!--<div>-->
            <!--<label style="font-size: 23px;float: left;margin-left: 2%;margin-top: 2%;color: #C20C0C">退出当前账号</label>-->
          <!--</div>-->
          <!--<div class="manger-icon" style="color: #C20C0C;margin-top: 2%">-->
            <!--<i class="ion-chevron-right"></i>-->
          <!--</div>-->
        <!--</span>-->
      <!--</div>-->
      <div style="width: 100%;text-align: center;padding-bottom: 20px;">
        <div  @click="exitLogin" style="width:30%;border: 1px solid black;border-radius: 5px;height: 40px;padding-left:10px;padding-right:10px;line-height: 40px;text-align: center;margin: 12% auto;">
          <span style="font-size: 15px;">退出登录</span>
        </div>
      </div>
    </div>
    <ok-footer></ok-footer>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Field,Cell, CellGroup ,Row, Col,Button,Icon,NavBar} from 'vant';
  const Footer = resolve => require(['@/components/footer/footer'], resolve);

  Vue.use(Icon).use(Button).use(Row).use(Col).use(Cell).use(CellGroup).use(Field).use(NavBar);
  export default {
    mixins: [],     //混合
    components: {
      'ok-footer':Footer
    },//注册组件
    data() {         //数据
      return {
        username:'',
        password :''
      };
    },
    computed: {},  //计算属性
    created() {
    },   //创建
    mounted() {
    },   //挂载
    methods: {
      exitLogin(){
        window.localStorage.removeItem("token");
        this.$router.push({path:'/user/login'});
      }
    },   //方法
    watch: {}      //监听
  }
</script>

<style scoped>
  .person-icon{
    float: right;
    display: inline;
    font-size: 20px;
    color: #EAEAEA;
    margin-right: 10%;
    margin-top: -18%;
    font-family: 微软雅黑;
  }
  .manger-icon{
    float: right;
    display: inline;
    font-size: 20px;
    color: #EAEAEA;
    margin-right: 10%;
    margin-top: -11%;
    font-family: 微软雅黑;
  }
  .photo-icon{
    font-size: 30px;
    margin-left: 5%;
    font-family: 微软雅黑;
  }
  .person-manger{
    margin-top: 3%;
    font-family: 微软雅黑;
  }

</style>
