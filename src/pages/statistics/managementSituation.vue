/**
* Created by ztt on 2018/5/6.
*/
<template>
    <div id="">
      <div  style="color:white;background: #C20C0C;font-size:18px;padding-top:12px;height: 56px;width: 100%;text-align: center;">
        <div style="width: 20%;font-size:16px;display: block;float: left;height: 32px;line-height: 32px;">
          <router-link to="/statistics">&lt;&nbsp;返回</router-link>
        </div>
        <div style="width: 60%;display: block;float: left;height: 32px;line-height: 32px;">经营概况</div>
        <div style="width: 20%;display: block;float: left;height: 32px;line-height: 32px;"></div>
      </div>
      <div class="ok-border"></div>
      <div style="height: 70px;width: 100%;">
        <div style="height: 32px;width: 100%;padding-left:20px;">
          <span>库存成本：￥42.95万</span>
        </div>
        <div class="ok-model-border"></div>
        <div style="height: 37px;width: 50%;display: block;float: left;padding-left:20px;font-size:10px;border-right: 1px solid #F2F2F2;">
          <div style="">库存总数</div>
          <div style="color: #888888">10002</div>
        </div>
        <div style="height: 37px;width: 50%;float: left;display: block;padding-left:20px;font-size:10px;">
          <div style="">库存预警数</div>
          <div style="color: orangered">2</div>
        </div>
      </div>
    </div>
</template>

<script>
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
