/**
* Created by ztt on 2018/4/13.
*/
<template>
  <div id="">
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div class="back-bar-name">
        OK帮注册
      </div>
    </div>
    <div class="container" style="width:auto;margin-top: 55px;">
      <div style="width:auto;height: 200px; margin:0 auto">

        <van-cell-group>
          <div style="display: block;text-align: center;">
            <div class="login-icon">
              <i class="ion-person"></i>
            </div>
            <div class="login-text">
              <van-field
                v-model="storeManager.userName"
                style="font-size: 20px;"
                icon="clear"
                lable="用户名"
                placeholder="请输入手机号*"
                @blur="checkUserName"
                @click-icon="storeManager.userName = ''"
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
                  v-model="storeManager.userPassword"
                  type="password"
                  style="font-size: 20px"
                  lable="密码"
                  placeholder="请输入密码*"
                  icon="clear"
                  @click-icon="storeManager.userPassword = ''"
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
                  v-model="storeManager.storeName"
                  lable="店铺名"
                  style="font-size: 20px"
                  placeholder="请输入店铺名*"
                  icon="clear"
                  @click-icon="storeManager.storeName = ''"
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
                  v-model="storeManager.storePhone"
                  lable="联系方式"
                  style="font-size: 20px"
                  placeholder="请输入店铺联系方式*"
                  @blur="checkStorePhone"
                  icon="clear"
                  @click-icon="storeManager.storePhone = ''"
                />
                <hr>
              </div>
            </div>
          </div>
        </van-cell-group>
        <div style="height: 110px;padding-top:30px;width: 80%;margin:0 auto;">
          <van-button type="danger" style="background: #C20C0C" size="large" @click="addNewStoreManager">立即开店</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Radio ,Field,Cell, CellGroup ,Row, Col,Button,Icon,NavBar,Toast} from 'vant';
  import {addStoreManager,getCheckName} from '@/service/getData.js'

  Vue.use(Radio).use(Icon).use(Button).use(Row).use(Col).use(Cell).use(CellGroup).use(Field).use(NavBar);
  export default {
    mixins: [],     //混合
    components: {},//注册组件
    data () {
      return{
        storeManager:{userName:'',userPassword:'',storeName:'',storePhone:''},
        verification:false,
      };
    },
    computed: {},  //计算属性
    created() {
    },   //创建
    mounted() {
    },   //挂载
    methods: {
      checkUserName(){
          if(this.storeManager.userName == ''){
            this.verification=false;
            Toast({
              position: 'bottom',
              message: '用户名不能为空'
            });
          }
          else if(this.storeManager.userName.search(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)!=0){
            this.verification=false;
            Toast({
              position: 'bottom',
              message: '请检查手机号是否可用'
            });
          }
          else {
            this.verification=true;
          }
          if(this.verification){
              getCheckName({
                userName: this.storeManager.userName,
              }).then(response => {
                //this.checkedUserNameResult = true;
                return true;
              }, error => {
                Toast({
                  position: 'bottom',
                  message: '用户名已存在'
                });
                //this.checkedUserNameResult = false;
                return false;
              })
          }else{
            return false;
          }
      },
      addNewStoreManager(){
        if(this.checkIsNull()) {
          //alert(this.checkIsNull());
          //alert(this.storeManager.userName)
          addStoreManager({
            userName: this.storeManager.userName,
            userPassword: this.storeManager.userPassword,
            storeName: this.storeManager.storeName,
            storePhone: this.storeManager.storePhone,
          }).then(
            response=> {
            Toast({
              type:'success',
              message: '注册成功',
              duration:1000
            });
            this.$router.push({path:'/user/login'});
          },error => {
            Toast({
              position: 'bottom',
              message: '请检查输入信息是否正确'
            });
          })
        }else{
          Toast({
            position: 'bottom',
            message: '请完善带星号（*）项'
          });
        }
      },
      // 验证登陆手机号格式
      checkStorePhone(){
        if(this.storeManager.storePhone == ''){
          Toast({
            position: 'bottom',
            message: '店铺手机号不能为空'
          });
          return false;
        }
        else if(this.storeManager.storePhone.search(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)!=0){
          Toast({
            position: 'bottom',
            message: '请检查手机号是否可用'
          });
          return false;
        }
        else {
          return true;
        }
      },

      checkIsNull(){
        if(this.checkUserName()==false||this.storeManager.userPassword==''||this.storeManager.storeName==''||this.checkStorePhone()==false){
          return false;
        } else{
          return true;
        }
      },
    },   //方法
    watch: {

    }     //监听
  }
</script>

<style scoped>
  /* .van-button--danger{
    background-color: #C20C0C;
  } */
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
