/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <ok-back></ok-back>
      <div class="ok-model-text-box">
        <div class="ok-text-first ok-text-box">
          <div class="ok-text-name">员工账号<span style="color: #C20C0C">*</span></div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" style="" placeholder="由字母数字组成，用于员工登陆" type="text"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div class="ok-text-box">
          <div class="ok-text-name">员工姓名</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" placeholder="请输入员工姓名" type="text"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div class="ok-text-box">
          <div class="ok-text-name">密码*</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" type="password"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div class="ok-text-box">
          <div class="ok-text-name">密码确认</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text"type="password"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
      </div>
      <div class="ok-border"></div>
      <div class="ok-model-text-box">
        <div class="ok-text-box">
          <div class="ok-text-name">邮箱</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" placeholder="请输入邮箱" type="text"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div class="ok-text-box">
          <div class="ok-text-name" style="font-size: 14px">账号是否启用</div>
          <div class="ok-text-textBox">
            <!--<div class="ok-sliding-block-box-active" style="border-radius:5px;margin-top:8px;float: right;height: 30px;width: 60px;background: brown;z-index: 1;">-->
              <!--<div  class="ok-sliding-block-btn-active" style="border-radius:5px;margin-right:2px;box-shadow:1px 1px 3px #888888;float: right;height: 26px;width: 30px;margin-top: 2px;background: white;z-index: 100;"></div>-->
            <!--</div>-->
            <div style="width: auto;height: auto;float: right;margin-top: 10px;">
              <van-switch v-model="checked" />
            </div>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div class="ok-text-box">
          <div class="ok-text-name">备注</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" type="text"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
      </div>
      <div class="ok-border"></div>
      <div style="background:#F2F2F2;width: 100%;height: 35px;padding-top:10px;padding-left: 5px;font-family: '微软雅黑'">
        <span style="font-size: 14px;color: #575757;">所属角色</span>
        <span style="font-size: 12px;color: #575757;">(如需编辑或者新增角色权限，请前往&nbsp;<span @click="$router.push({path:'/role'})" style="color: #108ee9;font-size: 14px">【角色权限】</span>)</span>
      </div>
        <van-checkbox-group v-model="roleId">

          <div style="height: 80px;width: 100%;border-bottom: 1px solid #888888;">
            <van-checkbox
              v-for="(item, index) in roleList"
              :key="item"
              :name="item"
              >
            <div style="width: 80%;height: 80px;padding-right: 10px;display: block;float: left;">
              <div style="width: 100%;font-size: 18px;margin-top: 10px;color: black;">采购员</div>
              <span style="color: #888888">负责采购事宜，包括新建商品、采购单、采购退货、库存盘点等</span>
            </div>
            </van-checkbox>
          </div>
      </van-checkbox-group>


    </div>
</template>

<script>
  import Vue from 'vue';
  import { Checkbox, CheckboxGroup } from 'vant';
  import { Switch } from 'vant';

  Vue.use(Switch);
  Vue.use(Checkbox).use(CheckboxGroup);

  const Back = resolve => require(['@/components/common/backBar'], resolve);

    export default {
        mixins: [],     //混合
        components: {
          'ok-back':Back
        },//注册组件
        data() {         //数据
            return {
              checked: true,
              roleId:['1','2'],
              roleList:['1','2']
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

<style >

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
  .van-checkbox__label{
    width: 80%;
    margin-left: 20px;
  }
  .van-checkbox__icon{
    margin-left: 20px;
  }
  .van-checkbox--checked{
    color: white!important;
  }
</style>
