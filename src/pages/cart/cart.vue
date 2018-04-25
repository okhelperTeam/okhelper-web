/**
* Created by ztt on 2018/4/25.
*/
<template>
    <div id="">
      <div class="back-bar">
        <router-link to="/sell" style="color: white" class="back-bar-backBtn">&lt;&nbsp;销售
        </router-link>
        <div class="back-bar-name">
          购物车
        </div>
        <div class="back-bar-cancelBtn">
          <!--<div style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">-->
            <!--<i class="ion-ios-plus-empty"></i>-->
          <!--</div>-->
          <router-link to="/product/searchProduct" style="margin-left:16px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
            <i class="ion-ios-search"></i>
          </router-link>
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
