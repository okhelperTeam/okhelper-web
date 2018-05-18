/**
* Created by ztt on 2018/4/13.
*/
<template>
  <div class="container">
    <div id="ok-home-icon" style="height: 200px;width: auto;text-align: center;padding-top: 50px;padding-bottom: 25px;">
      <img src="@/assets/icon/ok-icon-red.png" width="100" height="100">
      <div class="change-font-button" style="color: #C20C0C">
        <span v-if="verification" @click="verification=false">账号密码登陆</span>
        <span v-if="!verification" @click="verification=true">短信验证码登陆</span>
      </div>
    </div>

    <div style="width:95%; margin:0 auto">
      <van-cell-group v-if="!verification">
        <van-cell  >
          <i class="ion-person tlogin-icon" slot="icon"/>
          <van-field slot="title"  style="font-size: 16px;"
            v-model="userName"
            icon="clear"
            placeholder="请输入用户名,店长请使用手机号"
            required
            @click-icon="userName = ''"
          />
        </van-cell>
        <van-cell >
          <i class="ion-unlocked tlogin-icon" slot="icon"/>
          <van-field slot="title"  style="font-size: 16px;"
            v-model="userPassword"
            type="password"
            placeholder="请输入密码"
            icon="clear"
            required
            @click-icon="userPassword = ''"
          />
        </van-cell>
      </van-cell-group>


      <van-cell-group v-if="verification">
        <van-cell  >
          <!-- <i class="ion-person tlogin-icon" slot="icon"/> -->
          <van-field slot="title"  style="font-size: 16px;"
            v-model="userName"
            icon="clear"
            placeholder="请输入手机号"
            required
            @click-icon="userName = ''"
          />
        </van-cell>
        <van-cell >
          <!-- <i class="ion-unlocked tlogin-icon" slot="icon"/> -->
          <van-field
              center
              v-model="sms"
              required
              placeholder="请输入短信验证码"
              icon="clear"
              @click-icon="sms = ''"  style="font-size: 16px;"
            >
          <button slot="button" @click="sendSMs" :disabled="verButtonDisabled" :class="verButtonDisabled ? 'smsDisableClass' : 'smsClass'">&nbsp;&nbsp;{{smsButtonText}}&nbsp;&nbsp;</button>
        </van-field>
        </van-cell>
      </van-cell-group>

      <div style="height: 110px;padding-top:30px;width: 80%;margin:auto;">
        <van-button @click="loginOk" style="background: #C20C0C" type="danger" size="large">登录</van-button>
        <span v-if="loginIsTrue" class="tishixiaoxi disappear" style="color: #C20C0C">{{loginMsg}}</span>
      </div>
      <div style="float: right;margin-top: 50px">
        <router-link to="/user/register">
      <div class="register-icon" style="float:right;margin-right: 55px">
        <i class="ion-person-add"></i>
      </div>
      <div style="margin-right: 43px">
        <span style="float:right;margin-top: -10px;color: #C20C0C">立即注册</span>
      </div>
        </router-link>
      </div>
      <div style="float: left;margin-top: 50px">
        <router-link to="/user/register">
          <div class="register-icon" style="float:left;margin-left: 55px">
            <i class="ion-ios-help"></i>
          </div>
          <div style="margin-left: 43px">
            <span style="float:left;margin-top: -10px;color: #C20C0C" >忘记密码</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Field,Cell, CellGroup ,Row, Col,Button,Icon} from 'vant';
  import {login,sendSMS,smsLogin} from '@/service/getData';
  import router from '@/router/index'
  import { Toast } from 'vant';
  Vue.use(Icon).use(Button).use(Row).use(Col).use(Cell).use(CellGroup).use(Field);
  var code ; //在全局定义验证码
    export default {
        mixins: [],     //混合
        components: {},//注册组件
        data() {         //数据
            return {
              userName:'',
              userPassword:'',
              checkCode:'',
              nameMsg:'',
              pwdMsg:'',
              loginMsg:'',
              nameIsNull:true,
              pwdIsNull:true,
              loginIsTrue:false,
              verification:true,
              sms:'',
              smsButtonText:'发送验证码',
              awaitSmS:false
            };
        },
        computed: {
            verButtonDisabled(){
              let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
              if(!myreg.test(this.userName)||this.awaitSmS){
                return true;
              }else {
                return false;
              }
            }
        },  //计算属性
        created() {

        },   //创建
        mounted() {
        // if (window.plus){plus.navigator.setStatusBarBackground('#ffff');}
          if (window.plus){plus.navigator.setStatusBarBackground('#fff');}
        },   //挂载
        beforeDestroy(){
          if (window.plus){plus.navigator.setStatusBarBackground('#C20C0C');}
        },
        methods: {
          loginOk(){
             if(this.verification){
               this.phoneSmsLogin();
               return;
             }
              if(this.userName != '' && this.userPassword != ''){
            login({
              userName:this.userName,
              userPassword:this.userPassword
            }).then(
              response=>{
                window.localStorage.setItem('token',response.data.token);
                Toast({
                  type:'success',
                  message: '登陆成功',
                  duration:1000
                });
                router.push({path:'/home'});
              },error=>{
                Toast({
                  position: 'bottom',
                  message: '用户名或密码错误'
                });
              }
            )
          }else{
            Toast({
              position: 'bottom',
              message: '请完善信息'
            });
          }

          },
          sendSMs(){
            this.awaitSmS=true;
            sendSMS({number:this.userName}).then(response=>{
              var i=60;
              this.smsButtonText=(i--)+"s后重新获取";
              var interval=setInterval(()=>{
                if(i==0){
                  clearInterval(interval);
                  this.awaitSmS=false;
                  this.smsButtonText="发送验证码";
                }else {
                    this.smsButtonText=(i--)+"s后重新获取";
                }
              },1000);
              Toast({
                position: 'bottom',
                message: '验证码发送成功'
              });
            },error=>{
              Toast({
                type:'fail',
                position: 'middle',
                message: error?error.msg:"网络异常"
              });
              this.awaitSmS=false;
              this.smsButtonText="发送验证码";
          })
        },
        phoneSmsLogin(){
        if(this.userName != '' && this.sms != ''){
              smsLogin({phone:this.userName,code:this.sms}).then(response=>{
                window.localStorage.setItem('token',response.data.token);
                Toast({
                  type:'success',
                  message: '登陆成功',
                  duration:1000
                });
                router.push({path:'/home'});
              },error=>{
                Toast({
                  position: 'bottom',
                  message: '验证码错误'
                });
              })
          }else {
            Toast({
              position: 'bottom',
              message: '请完善信息'
            });
          }

        }

         // // 图片验证码
         // createCode(){
         //   code = "";
         //   var codeLength = 4;//验证码的长度
         //   var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
         //     'S','T','U','V','W','X','Y','Z');//随机数
         //   for(var i = 0; i < codeLength; i++) {//循环操作
         //     var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
         //     code += random[index];//根据索引取得随机数加到code上
         //   }
         //   this.checkCode = code;//把code值赋给验证码
         // },
         // // 失焦验证图和密码
         // checkLpicma(){
         //
         //   this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写
         //   if(this.picLyanzhengma == '') {
         //     this.yanzhengmaMsg="请输入验证码";
         //     this.yanzhengmaIsNull=true;
         //
         //   }else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时
         //     console.log( this.picLyanzhengma.toUpperCase())
         //     console.log(code)
         //     this.yanzhengmaMsg="验证码不正确";
         //     this.yanzhengmaIsNull=true;
         //     this.createCode();//刷新验证码
         //     this.picLyanzhengma = '';
         //   }else { //输入正确时
         //     this.yanzhengmaIsNull=false;
         //     return true;
         //   }
          },   //方法
        watch: {}      //监听
    }
</script>

<style scoped>
  .container{
    background-color:#ffff;
    height:100%;
  }

  .tlogin-icon{
    font-size: 25px;
    color: #dd0a20;
    line-height: 44px;
  }
  .register-icon{
    font-size: 30px;
    color: #dd0a20;
    line-height: 44px;
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
  .smsDisableClass{
    border: 1px solid;
    background: transparent;
    padding: 2px;
    border-radius: 3px;
    font-size: 14px;
  }

  .smsClass{
    border: 1px solid #e33;
    background: transparent;
    color: #e33;
    padding: 2px;
    border-radius: 3px;
    font-size: 14px;
  }

  .change-font-button{
    color: #ff0036;
    width: 100px;
    position: absolute;
    top: 430px;
    right: 45px;
    font-size: 13px;
  }
</style>
