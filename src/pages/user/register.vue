/**
* Created by ztt on 2018/4/13.
*/
<template>
  <div id="">
    <div class="back-bar">
      <router-link to="/user/login" style="color: white;" class="back-bar-backBtn">&lt;&nbsp;返回
      </router-link>
      <div class="back-bar-name">
        OK帮注册
      </div>
    </div>
    <div class="container" style="width:auto;margin-top: 7%">
      <div style="width:auto;height: 200px; margin:0 auto">

        <van-cell-group>
          <div style="display: block;text-align: center;">
            <div class="login-icon">
              <i class="ion-person"></i>
            </div>
            <div class="login-text">
              <van-field
                v-model="username"
                style="font-size: 20px;"
                icon="clear"
                lable="用户名"
                placeholder="请输入手机号"
                @click-icon="username = ''"
              />
              <hr>
            </div>
          </div>
          <div style="display: block;text-align: center;">
            <div style="display: block;">
              <div class="login-icon">
                <i class="ion-unlocked"></i>
              </div>
              <div class="login-text">
                <van-field
                  v-model="password"
                  type="password"
                  style="font-size: 20px"
                  lable="密码"
                  placeholder="请输入密码"
                  icon="clear"
                  @click-icon="password = ''"
                />
                <hr>
              </div>
            </div>
          </div>
          <div style="display: block;text-align: center;">
            <div style="display: block;">
              <div class="login-icon">
                <i class="ion-unlocked"></i>
              </div>
              <div class="login-text">
                <van-field
                  v-model="passwordagn"
                  type="password"
                  style="font-size: 20px"
                  lable="密码确认"
                  placeholder="再次输入密码"
                  icon="clear"
                  @click-icon="passwordagn = ''"
                />
                <hr>
              </div>
            </div>
          </div>
          <div style="display: block;text-align: center;">
            <div style="display: block;">
              <div class="login-icon">
                <i class="ion-android-contact"></i>
              </div>
              <div class="login-text">
                <van-field
                  v-model="nick"
                  lable="昵称"
                  style="font-size: 20px"
                  placeholder="请输入姓名"
                  icon="clear"
                  @click-icon="nick = ''"
                />
                <hr>
              </div>
            </div>
          </div>
          <!--<div style="display: block;text-align: center;">-->
          <!--<div style="display: block;">-->
          <!--<div class="login-icon">-->
          <!--<i class="ion-social-apple"></i>-->
          <!--</div>-->
          <!--<div class="login-text">-->
          <!--<van-radio-group v-model="sex">-->
          <!--<van-radio name="1">女</van-radio>-->
          <!--<van-radio name="2">男</van-radio>-->
          <!--</van-radio-group>-->
          <!--</div>-->
          <!---->
          <!--</div>-->
          <!--</div>-->
        </van-cell-group>
        <div style="height: 110px;padding-top:30px;width: 80%;margin:0 auto;">
          <van-button type="danger" size="large">立即注册</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Radio ,Field,Cell, CellGroup ,Row, Col,Button,Icon,NavBar} from 'vant';

  Vue.use(Radio).use(Icon).use(Button).use(Row).use(Col).use(Cell).use(CellGroup).use(Field).use(NavBar);
  export default {
    mixins: [],     //混合
    components: {},//注册组件
    data() {         //数据
      return {
        username:'',
        password:'',
        passwordagn:'',
        nick:'',
        sex:'1'
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
  .login-icon{
    width: 30%;
    display: inline;
    font-size: 25px;
    color: #dd0a20;
  }
  .login-text{
    width: 70%;
    display: inline-block;
    margin: 15% 10px 10px 10px;
  }
</style>
