/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <div>返回条</div>
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
              placeholder="请输入角色名称"
              @click-icon="username = ''"
            />
            <hr>
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
                placeholder="请输入角色描述"
                icon="clear"
                @click-icon="yanzhengma = ''"
              />
              <hr>
            </div>
          </div>
        </div>
        <div style="display: block;text-align: center;">
          <div style="display: block;">
            <div class="login-icon">
              <span>仓库管理</span>
            </div>
            <van-switch v-model="storeManagement" />
          </div>
        </div>
      </van-cell-group>
      <div style="height: 110px;padding-top:30px;width: 80%;margin:0 auto;">
        <div style="margin: 0 auto;height: 110px;width: 60%">
          <van-button type="danger">取消</van-button>
          <van-button type="danger">完成修改</van-button>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Field,Cell, CellGroup ,Row, Col,Button,Icon} from 'vant';
  import { Switch } from 'vant';

  Vue.use(Switch);

  Vue.use(Icon).use(Button).use(Row).use(Col).use(Cell).use(CellGroup).use(Field);

    export default {
        mixins: [],     //混合
        components: {},//注册组件
        data() {         //数据
            return {
              storeManagement:true
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
