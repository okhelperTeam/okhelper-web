/**
* Created by lulu on 2018/5/7.
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
    <div class="container" style="width:auto;margin-top: 7%">
      <div style="width:auto;height: 200px; margin:0 auto">

        <van-cell-group>
          <div style="display: block;text-align: center;">
            <div class="login-icon">
              <i class="ion-person"></i>
            </div>
            <div class="login-text">
              <van-field
                v-model="storeName"
                style="font-size: 20px;"
                icon="clear"
                lable="店铺名称"
                placeholder="请输入店铺名称"
                @click-icon=" storeName=''"
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
                  v-model="storeAddress"
                  style="font-size: 20px"
                  lable="店铺地址"
                  placeholder="请输入店铺地址"
                  icon="clear"
                  @click-icon="storeAddress='' "
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
                  v-model="storePhone"
                  style="font-size: 20px"
                  lable="店铺联系方式"
                  placeholder="请输入店铺联系方式"
                  icon="clear"
                  @click-icon="storePhone = ''"
                />
                <hr>
              </div>
            </div>
          </div>
          <!--<div style="display: block;text-align: center;">-->
            <!--<div style="display: block;">-->
              <!--<div class="login-icon">-->
                <!--<i class="ion-android-contact"></i>-->
              <!--</div>-->
              <!--<div class="login-text">-->
                <!--<van-field-->
                  <!--v-model="nick"-->
                  <!--lable="昵称"-->
                  <!--style="font-size: 20px"-->
                  <!--placeholder="请输入姓名"-->
                  <!--icon="clear"-->
                  <!--@click-icon="nick = ''"-->
                <!--/>-->
                <!--<hr>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        </van-cell-group>
        <div style="height: 110px;padding-top:30px;width: 80%;margin:0 auto;">
          <van-button type="danger" size="large" @click="">立即注册</van-button>
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
    data () {
      return{}
    },
    computed: {},  //计算属性
    created() {
    },   //创建
    mounted() {
    },   //挂载
    methods: {
      //   submitForm (formName) {
      //     this.$refs[formName].validate((valid) => {
      //       if (valid) {
      //       ...
      //       } else {
      //         return false
      //       }
      //     })
      //   }
      // }
    },   //方法
    watch: {}     //监听
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
