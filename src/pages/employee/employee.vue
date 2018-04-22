/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <div class="back-bar">
        <router-link to="/home" style="color: white;" class="back-bar-backBtn">&lt;&nbsp;返回
        </router-link>
        <div class="back-bar-name">
          员工管理
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
      <div class="ok-model-border"></div>
      <div style="margin-top:56px;width: 100%;height: 34px;background: #F2F2F2;padding-top: 3px;padding-right: 10px;padding-left: 10px;">
        <div style="color:white;display:block;float:left;width: 50%;height: 28px;line-height:28px;text-align:center;border-radius:3px;background: brown;border-right: 1px solid #F2F2F2">已启用（4）</div>
        <div style="display:block;float:left;width: 50%;height: 28px;line-height:28px;text-align:center;border-radius:3px;background: white;color:black;border-right: 1px solid #F2F2F2">已停用（0）</div>
      </div>
      <div class="ok-model-border"></div>
      <div class="employee-info-box" style="height: 80px;width: auto;display: block;">
        <div style="display: block;float: left;width: 30%;text-align: center;height:80px;line-height: 80px;">
          <img src="@/assets/icon/ok.jpg" width="70px" height="70px"/>
        </div>
        <div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">
          <div style="display: block;float: left;font-size: 16px;">美丽</div>
          <div style="display: block;float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;margin-left: 10px;">店长</div>
          <div style="display: block;float: left;margin-left: 10px;">女</div>
          <div style="clear: both;">手机号：1322222222</div>
          <div>创建时间：2018-4-19</div>
        </div>
        <div style="font-size:18px;line-height:80px;height:80px;display: block;float: left;width: 20%;height:80px;text-align: center;">
          修改
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="employee-info-box" style="height: 80px;width: auto;display: block;">
      <div style="display: block;float: left;width: 30%;text-align: center;height:80px;line-height: 80px;">
        <img src="@/assets/icon/ok.jpg" width="70px" height="70px"/>
      </div>
      <div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">
        <div style="display: block;float: left;font-size: 16px;">大对对</div>
        <div style="display: block;float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;margin-left: 10px;">小工</div>
        <div style="display: block;float: left;margin-left: 10px;">x</div>
        <div style="clear: both;">手机号：1322222223</div>
        <div>创建时间：2018-4-19</div>
      </div>
      <div style="font-size:18px;line-height:80px;height:80px;display: block;float: left;width: 20%;height:80px;text-align: center;">
        修改
      </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="employee-info-box" style="height: 80px;width: auto;display: block;">
        <div style="display: block;float: left;width: 30%;text-align: center;height:80px;line-height: 80px;">
          <img src="@/assets/icon/ok.jpg" width="70px" height="70px"/>
        </div>
        <div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">
          <div style="display: block;float: left;font-size: 16px;">隔壁老张</div>
          <div style="display: block;float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;margin-left: 10px;">小工</div>
          <div style="display: block;float: left;margin-left: 10px;">x</div>
          <div style="clear: both;">手机号：1322222226</div>
          <div>创建时间：2018-4-19</div>
        </div>
        <div style="font-size:18px;line-height:80px;height:80px;display: block;float: left;width: 20%;height:80px;text-align: center;">
          修改
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="employee-info-box" style="height: 80px;width: auto;display: block;">
        <div style="display: block;float: left;width: 30%;text-align: center;height:80px;line-height: 80px;">
          <img src="@/assets/icon/ok.jpg" width="70px" height="70px"/>
        </div>
        <div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">
          <div style="display: block;float: left;font-size: 16px;">隔壁大潘</div>
          <div style="display: block;float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;margin-left: 10px;">小工</div>
          <div style="display: block;float: left;margin-left: 10px;">x</div>
          <div style="clear: both;">手机号：1322222228</div>
          <div>创建时间：2018-4-19</div>
        </div>
        <div style="font-size:18px;line-height:80px;height:80px;display: block;float: left;width: 20%;height:80px;text-align: center;">
          修改
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
