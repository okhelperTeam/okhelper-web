/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <ok-back></ok-back>
      <div class="employee-info-box" style="background: red;height: 120px;width: auto;display: block;">
        <div style="display: block;float: left;width: 30%;text-align: center;height:120px;line-height: 120px; background: yellow;">
          <img src="@/assets/icon/ok.jpg" width="80px" height="80px"/>
        </div>
        <div style="display: block;float: left;width: 50%;background: aqua;height:120px;">
          <span>名字</span>
          <span class="employee-role">角色</span>
          <span>女</span>
          <span>1322222222</span>
        </div>
        <div style="display: block;float: left;width: 20%;background: green;height:120px;">
          <button style="display: block;">删除</button>
          <button style="display: block;">修改</button>
        </div>
      </div>
    </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
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
