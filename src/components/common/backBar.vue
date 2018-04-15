/**
* Created by ztt on 2018/4/13.
*/
<template>
    <div id="">
      <div class="back-bar">
        <div class="back-bar-backBtn">&lt;&nbsp;返回</div>
        <div class="back-bar-name">
          店铺信息
          <slot name="backBarName"></slot>
        </div>
        <div class="back-bar-cancelBtn">
          按钮
          <slot name="backBarBtn"></slot>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { NavBar } from 'vant';

  Vue.use(NavBar);
    export default {
        mixins: [],     //混合
        components: {},//注册组件
        data() {         //数据
            return {};
        },
        computed: {},  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          onClickLeft() {
            Toast('返回');
          },
          onClickRight() {
            Toast('按钮');
          }
        },   //方法
        watch: {}      //监听
    }
</script>

<style scoped>
  .back-bar{
    top: 0;
    position: fixed;
    width: 100%;
    z-index: 100;
    height: 56px;
    background: #dd0a20;
    color: white;
  }
  .back-bar-backBtn{
    display:block;
    float:left;
    width: 20%;
    height: 56px;
    text-align: center;
    line-height: 56px;
    font-size: 18px;
  }
  .back-bar-name{
    display:block;
    float:left;
    width: 60%;
    height: 56px;
    text-align: center;
    line-height: 56px;
    font-size: 18px;
  }
  .back-bar-cancelBtn{
    display:block;
    float:left;
    width: 20%;
    height: 56px;
    text-align: center;
    line-height: 56px;
    font-size: 18px;
  }
</style>
