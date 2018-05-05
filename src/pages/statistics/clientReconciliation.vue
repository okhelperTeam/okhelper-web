/**
* Created by ztt on 2018/5/6.
*--客户对账
*/
<template>
    <div id="">
      <div  style="color:white;background: #C20C0C;font-size:18px;padding-top:12px;height: 56px;width: 100%;text-align: center;">
        <div style="width: 20%;font-size:16px;display: block;float: left;height: 32px;line-height: 32px;">
          <router-link to="/statistics">&lt;&nbsp;返回</router-link>
        </div>

        <div style="width: 60%;display: block;float: left;height: 32px;line-height: 32px;">客户对账</div>
        <div style="width: 20%;display: block;float: left;height: 32px;line-height: 32px;" >
          <!--<router-link to="/product/SearchProduct" style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">-->
            <!--<i class="ion-ios-search"></i>-->
          <!--</router-link>-->
        </div>
      </div>
      <div style="height: 40px;width: 100%;padding: 5px;">
        <div v-if="true" style="margin-left: 5px;margin-right: 5px;">
          <div style="width:100%;color: lightcoral;background: #F2F2F2;height: 100%;text-align: center;height: 30px;line-height: 30px;">
            <i class="ion-android-search"></i>
            <span>姓名/手机号</span>
          </div>
        </div>
        <div v-else>
          <div>
            <i class="ion-android-search"></i>
            <input class="header-bar-search-text"  v-model="searchProductName" type="text" placeholder="姓名/手机号"/>
          </div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div>
        <ul style="width: 100%;list-style:none;">
          <li class="ok-client-li" >
            <span>欠款客户合计:</span><span style="color: orangered;">&nbsp;&nbsp;&nbsp;&nbsp;9</span>
          </li>
          <li class="ok-client-li" >
            <span>欠款金额合计:</span><span style="color: orangered;">&nbsp;&nbsp;&nbsp;&nbsp;￥999.00</span>
          </li>
        </ul>
      </div>
      <div class="ok-model-border"></div>
      <div v-for="item in 9">
        <div style="width: 65%;display: block;float: left;height: 56px;padding-left: 15px;padding-top: 10px;">
          <div>当当当</div>
          <div style="font-size: 12px;color: #888888;">手机号：13838384388</div>
        </div>
        <div style="width: 35%;display: block;float: right;height: 56px;">
          <div style="font-size:12px;margin-right:10px;float: right;background: orangered;height: 24px;width:24px;border-radius:12px;color: white;margin-top: 16px;text-align: center;line-height: 24px;">欠</div>
          <div style="margin-right:10px;float: right;line-height: 56px;">222.00</div>
        </div>
        <div class="ok-model-border"></div>
      </div>

      <div class="ok-model-border"></div>
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
  .ok-client-li{
    width: 50%;
    height: 36px;display: block;float:left;background: white;text-align: center;line-height: 36px;
  }
</style>
