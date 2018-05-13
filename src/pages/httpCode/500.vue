/**
* Created by ztt on 2018/5/13.
*/
<template>
    <div id="">
      <div class="back-bar">
        <div @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回</div>
        <div class="back-bar-name">
          遇到错误
        </div>
        <div class="back-bar-cancelBtn"></div>
      </div>
      <ok-footer></ok-footer>
    </div>
</template>

<script>
  const Footer = resolve => require(['@/components/footer/footer'], resolve);
    export default {
        mixins: [],     //混合
        components: {
          'ok-footer':Footer
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
