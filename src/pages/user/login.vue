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
            <i class="ion-person" style="float: left;margin-left: 9.5%;margin-top: 5%"></i>
          </div>
          <div class="login-text">
            <van-field
              v-model="userName"
              style="font-size: 20px;"
              icon="clear"
              placeholder="请输入手机号"
              @blur="checkUserName"
            />
            <hr>
            <br>
            <span v-if="nameIsNull" class="tishixiaoxi disappear">{{nameMsg}}</span>
          </div>
        </div>
        <div style="display: block;text-align: center;">
          <div style="display: block;">
            <div class="login-icon">
              <i class="ion-unlocked" style="float: left;margin-left: 9.5%;margin-top: 5%"></i>
            </div>
            <div class="login-text">
              <van-field
                v-model="userPassword"
                type="password"
                style="font-size: 20px"
                placeholder="请输入6-20位字母和数字"
                icon="clear"
                @blur="checkLPwd"
              />
              <hr>
              <br>
              <span v-if="pwdIsNull" class="tishixiaoxi disappear">{{pwdMsg}}</span>
            </div>
          </div>
        </div>
        <div style="display: block;text-align: center;">
          <div style="display: block;">
            <div class="login-icon">
              <i class="ion-social-apple" style="font-size: 35px;float: left;margin-left: 9.5%;margin-top: 3%"></i>
            </div>
            <div class="login-text">
              <input type="text" placeholder="请输入验证码" class="yanzhengma_input" @blur="checkLpicma" v-model="userYanzhengma">
              <input type="button" id="code" @click="createCode" class="verification1" v-model="checkCode" style="border: 1px skyblue solid"/><br>
              <span v-if="yanzhengmaIsNull" class="tishixiaoxi disappear">{{yanzhengmaMsg}}</span>
            </div>
          </div>
        </div>
      </van-cell-group>
      <div style="height: 110px;padding-top:30px;width: 80%;margin:auto;">
        <van-button @click="loginOk" type="danger" size="large">登录</van-button>
        <span v-if="loginIsTrue" class="tishixiaoxi disappear">{{loginMsg}}</span>
      </div>
      <div style="float: right;margin-top: 50px">
        <router-link to="/user/register">
      <div class="register-icon" style="float:right;margin-right: 55px">
        <i class="ion-person-add"></i>
      </div>
      <div class="user-login-bottom" style="margin-right: 43px">
        <van-text style="float:right;margin-top: -10px;color: #dd0a20">立即注册</van-text>
      </div>
        </router-link>
      </div>
      <div style="float: left;margin-top: 50px">
        <router-link to="/user/register">
          <div class="register-icon" style="float:left;margin-left: 55px">
            <i class="ion-ios-help"></i>
          </div>
          <div class="user-login-bottom" style="margin-left: 43px">
            <van-text style="float:left;margin-top: -10px;color: #dd0a20" >忘记密码</van-text>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Field,Cell, CellGroup ,Row, Col,Button,Icon} from 'vant';
  import {login} from '@/service/getData';
  import router from '@/router/index'
  Vue.use(Icon).use(Button).use(Row).use(Col).use(Cell).use(CellGroup).use(Field);
  var code ; //在全局定义验证码
    export default {
        mixins: [],     //混合
        components: {},//注册组件
        data() {         //数据
            return {
              userName:'',
              userPassword:'',
              userYanzhengma:'',
              checkCode:'',
              nameMsg:'',
              pwdMsg:'',
              loginMsg:'',
              yanzhengmaMsg:'',
              nameIsNull:false,
              pwdIsNull:false,
              yanzhengmaIsNull:false,
              loginIsTrue:false
            };
        },
        computed: {},  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          loginOk(){
            // if(this.checkUserName() ==true && this.checkLPwd() == true && this.checkLpicma() == true){
              if(this.checkUserName() ==true && this.checkLPwd() == true){
            login({
              userName:this.userName,
              userPassword:this.userPassword
            }).then(
              response=>{
                window.localStorage.setItem('token',response.data.token);
                router.push({path:'/home'})
              },error=>{
                console.log(error.response.msg);
                this.loginMsg=response.msg;
              }
            )
            }

          },

          // 验证登陆手机号格式
          checkUserName(){
            if(this.userName == ''){
              this.nameMsg="请输入手机号";
              this.nameIsNull=true;
          }
          // else if(this.userName.search(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)!=0){
          //     this.nameMsg="请输入正确手机号";
          //     this.nameIsNull=true;
          //   }
            else {
              return true;
            }
          },


          //验证登陆密码格式
          checkLPwd(){
            if(this.userPassword == ''){
              this.pwdMsg="请输入密码";
              this.pwdIsNull=true;

             }//else if(this.userPassword.search(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/) != 0){
            //   this.pwdMsg="密码必须6-20位，包含字母与数字";
            //   this.pwdIsNull=true;
            // }
              else {
              return true;
            }
          },
          // 图片验证码
          createCode(){
            code = "";
            var codeLength = 4;//验证码的长度
            var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
              'S','T','U','V','W','X','Y','Z');//随机数
            for(var i = 0; i < codeLength; i++) {//循环操作
              var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
              code += random[index];//根据索引取得随机数加到code上
            }
            this.checkCode = code;//把code值赋给验证码
          },
          // 失焦验证图和密码
          checkLpicma(){

            this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写
            if(this.picLyanzhengma == '') {
              this.yanzhengmaMsg="请输入验证码";
              this.yanzhengmaIsNull=true;

            }else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时
              console.log( this.picLyanzhengma.toUpperCase())
              console.log(code)
              this.yanzhengmaMsg="验证码不正确";
              this.yanzhengmaIsNull=true;
              this.createCode();//刷新验证码
              this.picLyanzhengma = '';
            }else { //输入正确时
              this.yanzhengmaIsNull=false;
              return true;
            }
          },
          // Login(){
          //   if(this.checkLPhone() ==true && this.checkLPsd() == true && this.checkLpicma() == true){
          //     var that = this;
          //     $.ajax({
          //       type:"POST",
          //       url:this.HOST+"/user/logincheck",
          //       data:{"loginmobileNo":this.LUserPhone,"loginpassword":this.LUserPsd},
          //       dataType:"json",
          //       success:function(data){
          //         console.log(data);
          //         if(data.resultflag == "F"){
          //           $(".login_content1 span:eq(0)").removeClass("disappear");
          //           $(".login_content1 span:eq(0)").text("手机号或密码错误。")
          //         }else{
          //           that.$router.push({path:"/home"})
          //         }
          //       }
          //     })
          //   }
          // }
          },   //方法
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
  .register-icon{
    display: inline;
    font-size: 30px;
    color: #dd0a20;
  }
  .login-text{
    width: 70%;
    display: inline-block;
    margin: 0 auto;
  }


  /*login和register部分*/

  .tishixiaoxi{
    font-size: 14px;
    color:#ed711f;
    display: block;
    margin-left: 30px;
    line-height: 30px;

  }
  .yanzhengma_input{
    width: 70%;
    float: left;
    font-size: 20px;
    margin-left: 5%;
    margin-top: 3%;
  }
  .disappear{

    float: left;
    margin-top: -1%;
  }
  .register_content p{
    margin-top: 30px;
    font-size: 25px;
    line-height: 18px;
    margin-bottom: 15px;
  }
  .register_content input{
    padding: 5px 0 5px 10px;
    margin-left: 30px;
    height: 30px;
    /*margin-top: 25px;*/
    border: 1px solid #e6e6e6;
  }

  .read_already a{
    color:#053d84;
  }

  /*登录模块*/
  .login_content1 p{
    margin-top: 30px;
    font-size: 25px;
    line-height: 18px;
    margin-bottom: 15px;
  }
  .login_content1 input{
    padding: 5px 0 5px 10px;
    margin-left: 30px;
    height: 30px;
    /*margin-top: 25px;*/
    border: 1px solid #e6e6e6;
  }
  .verification1{
    vertical-align: middle;
    transform: translate(-15px,0);
    width: 102px;
    float: left;
    margin-left: 60%;
    margin-top: -11%;
  }

  .forget a{
    font-size: 14px;
    color:#053d84;
    margin-right: 80px;
  }
  #code{
    font-size: 18px;
    letter-spacing:3px;
    color: #053d84;
    background: #f2f2f5;
  }
</style>





