/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <div>返回条</div>
      <div>
        恭喜您已成功开店，请牢记店铺编号：XXXXXX,快去上货吧~
      </div>
      <div style="height: 110px;padding-top:30px;width: 80%;margin:0 auto;">
        <van-button type="danger" size="large">返回首页</van-button>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import {Button} from 'vant';
  Vue.use(Button);
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
        methods: {},   //方法
        watch: {}      //监听
    }
</script>

<style scoped>

</style>
