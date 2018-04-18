/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <ok-back></ok-back>
      <div class="ok-model-text-box">
        <div class="ok-text-first ok-text-box">
          <div class="ok-text-name">员工账号*</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" style="" placeholder="由字母数字组成，用于员工登陆" type="text"/>
            <hr>
          </div>
        </div>
        <div class="ok-text-box">
          <div class="ok-text-name">员工姓名</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" placeholder="请输入员工姓名" type="text"/>
            <hr>
          </div>
        </div>
        <div class="ok-text-box">
          <div class="ok-text-name">密码*</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" type="text"/>
            <hr>
          </div>
        </div>
        <div class="ok-text-box">
          <div class="ok-text-name">密码确认</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text"type="text"/>
            <hr>
          </div>
        </div>
      </div>
      <div class="ok-border"></div>
      <div class="ok-model-text-box">
        <div class="ok-text-box">
          <div class="ok-text-name">邮箱</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" placeholder="请输入邮箱" type="text"/>
            <hr>
          </div>
        </div>
        <div class="ok-text-box">
          <div class="ok-text-name" style="font-size: 14px">账号是否启用</div>
          <div class="ok-text-textBox">
            <div class="ok-sliding-block-box-active" style="border-radius:5px;margin-top:8px;float: right;height: 30px;width: 60px;background: brown;z-index: 1;">
              <div  class="ok-sliding-block-btn-active" style="border-radius:5px;margin-right:2px;box-shadow:1px 1px 3px #888888;float: right;height: 26px;width: 30px;margin-top: 2px;background: white;z-index: 100;"></div>
            </div>
          </div>
        </div>
        <div class="ok-text-box">
          <div class="ok-text-name">备注</div>
          <div class="ok-text-textBox">
            <input class="ok-text-text" type="text"/>
            <hr>
          </div>
        </div>
      </div>
      <div class="ok-border"></div>
      <div style="background:#F2F2F2;width: 100%;height: 35px;padding-top:10px;padding-left: 5px;font-family: '微软雅黑'">
        <span style="font-size: 16px;color: brown;">所属角色</span>
        <span style="font-size: 12px;color: brown;">(如需编辑或者新增角色权限，请前往&nbsp;<span style="color: cornflowerblue;font-size: 14px">【角色权限】</span>&nbsp;)</span>
      </div>
      <div style="height: 80px;width: 100%;border-bottom: 1px solid #888888">
        <input style="width: 20%;height: 80px;display: block;float: left;" type="radio"/>
        <div style="width: 80%;height: 80px;display: block;float: left;padding-right: 10px;">
          <div style="width: 100%;font-size: 18px;margin-top: 10px;color: black;">采购员</div>
          <span style="color: #888888">负责采购事宜，包括新建商品、采购单、采购退货、库存盘点等</span>
        </div>
      </div>
      <div style="height: 80px;width: 100%;border-bottom: 1px solid #888888">
        <input style="width: 20%;height: 80px;display: block;float: left;" type="radio"/>
        <div style="width: 80%;height: 80px;display: block;float: left;padding-right: 10px;">
          <div style="width: 100%;font-size: 18px;margin-top: 10px;color: black;">采购员</div>
          <span style="color: #888888">负责采购事宜，包括新建商品、采购单、采购退货、库存盘点等</span>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Field,Cell, CellGroup ,Row, Col,Button,Icon} from 'vant';

  const Back = resolve => require(['@/components/common/backBar'], resolve);
  Vue.use(Icon).use(Button).use(Row).use(Col).use(Cell).use(CellGroup).use(Field);

    export default {
        mixins: [],     //混合
        components: {
          'ok-back':Back
        },//注册组件
        data() {         //数据
            return {};
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
