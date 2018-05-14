/**
* Created by ztt on 2018/4/13.
*/
<template>
    <div id="">
      <div class="back-bar">
        <div @click="$router.back()" class="back-bar-backBtn">&lt;&nbsp;返回
          <slot name="backPageName"></slot>
        </div>
        <div class="back-bar-name">
          角色信息
          <slot name="nowPageName"></slot>
        </div>
        <div class="back-bar-cancelBtn">
          保存
          <slot name="backBarBtn1"></slot>
          <slot name="backBarBtn1"></slot>
        </div>
      </div>
    </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
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
