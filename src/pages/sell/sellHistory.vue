/**
* Created by ztt on 2018/4/19.
*/
<template>
    <div id="">
      <div class="back-bar">
        <div class="back-bar-backBtn">&lt;&nbsp;返回
        </div>
        <div class="back-bar-name">
          销售历史
        </div>
        <div class="back-bar-cancelBtn">
          <div style="display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
            <i class="ion-ios-plus-empty"></i>
          </div>
          <div style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
            <i class="ion-ios-search"></i>
          </div>
        </div>
      </div>
      <div style="margin-top:56px;width: 100%;height: 34px;background: #F2F2F2;padding-top: 3px;padding-right: 10px;padding-left: 10px;">
        <div style="color:white;display:block;float:left;width: 50%;height: 28px;line-height:28px;text-align:center;border-radius:3px;background: #dd0a20;border-right: 1px solid #F2F2F2">所有</div>
        <div style="display:block;float:left;width: 50%;height: 28px;line-height:28px;text-align:center;border-radius:3px;background: white;color:black;border-right: 1px solid #F2F2F2">撤销</div>
      </div>
      <div class="employee-info-box" style="height: 80px;width: auto;display: block;padding-left: 20px;">
        <div style="display: block;float: left;width: 70%;height:80px;padding-top: 8px;">
          <div style="display: block;float: left;font-size: 16px;">客户名：隔壁老王</div>
          <div style="display: block;float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;margin-left: 10px;">重点客户</div>
          <div style="clear: both;">销售单号：SN20180419031515</div>
          <div>销售时间：2018-4-19&nbsp;&nbsp;3:15:15</div>
        </div>
        <div style="font-size:14px;padding-top: 8px;height:80px;display: block;float: left;width: 30%;height:80px;text-align: center;">
          <div style="text-decoration: underline;">销：1</div>
          <div style="font-size:12px;color: orange;">￥250.00</div>
          <div style="font-size:12px;color: #888888;">1号仓库</div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="employee-info-box" style="height: 80px;width: auto;display: block;padding-left: 20px;">
        <div style="display: block;float: left;width: 70%;height:80px;padding-top: 8px;">
          <div style="display: block;float: left;font-size: 16px;">客户名：隔壁老张</div>
          <div style="display: block;float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;margin-left: 10px;">重点客户</div>
          <div style="clear: both;">销售单号：SN20180419031515</div>
          <div>销售时间：2018-4-19&nbsp;&nbsp;3:15:15</div>
        </div>
        <div style="font-size:14px;padding-top: 8px;height:80px;display: block;float: left;width: 30%;height:80px;text-align: center;">
          <div style="text-decoration: underline;">销：12</div>
          <div style="font-size:12px;color: orange;">￥250.00</div>
          <div style="font-size:12px;color: #888888;">1号仓库</div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="employee-info-box" style="height: 80px;width: auto;display: block;padding-left: 20px;">
        <div style="display: block;float: left;width: 70%;height:80px;padding-top: 8px;">
          <div style="display: block;float: left;font-size: 16px;">客户名：冷特</div>
          <div style="clear: both;">销售单号：SN20180419031515</div>
          <div>销售时间：2018-4-19&nbsp;&nbsp;3:15:15</div>
        </div>
        <div style="font-size:14px;padding-top: 8px;height:80px;display: block;float: left;width: 30%;height:80px;text-align: center;">
          <div style="text-decoration: underline;">销：1</div>
          <div style="font-size:12px;color: orange;">￥250.00</div>
          <div style="font-size:12px;color: #888888;">1号仓库</div>
        </div>
      </div>
      <div class="ok-model-border"></div>
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
