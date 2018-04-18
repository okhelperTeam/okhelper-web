/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <ok-back></ok-back>
      <div class="ok-text-first ok-text-box">
        <div class="ok-text-name">店铺名*</div>
        <div class="ok-text-textBox">
          <input class="ok-text-text" placeholder="请输入店铺名" type="text"/>
          <hr>
        </div>
      </div>
      <div class="ok-text-box">
        <div class="ok-text-name">联系电话*</div>
        <div class="ok-text-textBox">
          <input class="ok-text-text" placeholder="请输入联系电话" type="text"/>
          <hr>
        </div>
      </div>
      <div class="ok-text-box">
        <div class="ok-text-name">店铺地址</div>
        <div class="ok-text-textBox">
          <input class="ok-text-text" placeholder="请输入店铺地址" type="text"/>
          <hr>
        </div>
      </div>
      <div class="ok-text-box">
        <div class="ok-text-name">负责人</div>
        <div class="ok-text-textBox">
          <input class="ok-text-text" placeholder="请输入负责人姓名" type="text"/>
          <hr>
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

</style>
