/**
* Created by ztt on 2018/4/13.
*/
<template>
    <div id="">

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

</style>
