/**
* Created by lulu on 2018/4/15.
*/


<template>
    <div class="container" style="width: auto">
      <div>
        <van-nav-bar
          title="个人中心"
          left-text="设置"
          left-arrow
          @click-left="onClickLeft"
        />
      </div>
      <div style="height: 120px;background: #E0FFFF">
        <i class="ion-social-snapchat" style="font-size: 70px;margin-left: 10%"></i>
        <div>
          <router-link to="/user/register" target="_blank">
            <div>
              <van-text style="font-size: 20px;float: left;margin-left: 33%;margin-top: -18%;color: black">用户名</van-text>
            </div>
            <div class="person-icon">
              <i class="ion-chevron-right"></i>
            </div>
          </router-link>
        </div>
      </div>
        <div class="person-manger">
          <router-link to="/user/register" target="_blank">
            <div class="photo-icon" style="color: #CD4F39">
            <i class="ion-social-instagram"></i>
            </div>
            <div>
              <label style="font-size: 23px;float: left;margin-left: 20%;margin-top: -13%;color: black">商品管理</label>
            </div>
            <div class="manger-icon">
              <i class="ion-chevron-right"></i>
            </div>
          </router-link>
          <hr>
        </div>
      <div class="person-manger">
          <router-link to="/user/register" target="_blank">
            <div class="photo-icon" style="color: #EE2C2C">
              <i class="ion-android-home"></i>
            </div>
            <div>
              <label style="font-size: 23px;float: left;margin-left: 20%;margin-top: -13%;color: black">仓库管理</label>
            </div>
            <div class="manger-icon">
              <i class="ion-chevron-right"></i>
            </div>
          </router-link>
          <hr>
      </div>
      <div class="person-manger">
          <router-link to="/user/register" target="_blank">
            <div class="photo-icon" style="color: #8DB6CD">
              <i class="ion-ios-person"></i>
            </div>
            <div>
              <label style="font-size: 23px;float: left;margin-left: 20%;margin-top: -13%;color: black">客户管理</label>
            </div>
            <div class="manger-icon">
              <i class="ion-chevron-right"></i>
            </div>
          </router-link>
          <hr>
      </div>
      <div class="person-manger">
          <router-link to="/user/register" target="_blank">
            <div class="photo-icon" style="color: #9AFF9A">
              <i class="ion-soup-can"></i>
            </div>
            <div>
              <label style="font-size: 23px;float: left;margin-left: 20%;margin-top: -13%;color: black">供应商管理</label>
            </div>
            <div class="manger-icon">
              <i class="ion-chevron-right"></i>
            </div>
          </router-link>
          <hr>
      </div>
      <div class="person-manger">
          <router-link to="/user/register" target="_blank">
            <div class="photo-icon" style="color: #EE9A00">
              <i class="ion-gear-b"></i>
            </div>
            <div>
              <label style="font-size: 23px;float: left;margin-left: 20%;margin-top: -13%;color: black">系统设置</label>
            </div>
            <div class="manger-icon">
              <i class="ion-chevron-right"></i>
            </div>
          </router-link>
          <hr>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Field,Cell, CellGroup ,Row, Col,Button,Icon,NavBar} from 'vant';

  Vue.use(Icon).use(Button).use(Row).use(Col).use(Cell).use(CellGroup).use(Field).use(NavBar);
  export default {
    mixins: [],     //混合
    components: {},//注册组件
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
    methods: {},   //方法
    watch: {}      //监听
  }
</script>

<style scoped>
  .person-icon{
    float: right;
    display: inline;
    font-size: 25px;
    color: #EAEAEA;
    margin-right: 10%;
    margin-top: -18%;
  }
  .manger-icon{
    float: right;
    display: inline;
    font-size: 25px;
    color: #EAEAEA;
    margin-right: 10%;
    margin-top: -13%;
  }
  .photo-icon{
    font-size: 40px;
    margin-left: 5%;
  }
  .person-manger{
    margin-top: 7%;
  }

</style>
