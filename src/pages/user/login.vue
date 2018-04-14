/**
* Created by ztt on 2018/4/13.
*/
<template>
  <div class="container" style="width:auto;">
    <div id="ok-home-icon" style="height: 200px;width: auto;text-align: center;padding-top: 50px;padding-bottom: 25px;">
      <img src="@/assets/icon/ok.jpg" width="100" height="100">
    </div>

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
              <i class="ion-social-apple"></i>
            </div>
            <div class="login-text">
              <van-field
                v-model="yanzhengma"
                style="font-size: 20px"
                placeholder="请输入验证码"
                icon="clear"
                @click-icon="yanzhengma = ''"
              />
              <hr>
            </div>
          </div>
        </div>
      </van-cell-group>
      <div style="height: 110px;padding-top:30px;width: 80%;margin:0 auto;">
        <van-button type="danger" size="large">登陆</van-button>
      </div>
      <div id="user-login-bottom" style="background: aqua;margin-right: 35px">
        <van-button style="float:right" type="danger" size="small"  tag="a" href="@/pages/test/test2" target="_blank">立即注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Field,Cell, CellGroup ,Row, Col,Button,Icon} from 'vant';

  Vue.use(Icon).use(Button).use(Row).use(Col).use(Cell).use(CellGroup).use(Field);
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
  .login-icon{
    width: 30%;
    display: inline;
    font-size: 25px;
    color: #f44;
  }
  .login-text{
    width: 70%;
    display: inline-block;
    margin: 10px 10px 10px 10px;
  }
</style>
