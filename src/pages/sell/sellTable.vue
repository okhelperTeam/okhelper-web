/**
* Created by ztt on 2018/4/19.
*/
<template>
    <div id="">
      <div class="back-bar">
        <div class="back-bar-backBtn">&lt;&nbsp;返回
        </div>
        <div class="back-bar-name">
          销售单
        </div>
      </div>
        <div style="width: 100%;height: 60px;margin-top: 56px;">
          <div style="width: 20%;height: 60px;color: #dd0a20;display: block;float: left;text-align: center;line-height: 60px;font-size: 16px;">客户*</div>
          <div style="width: 80%;height: 60px;display: block;float: left;">
            <select style="width: 100%;height: 60px;text-align: center;">
              <option value ="volvo">老王</option>
              <option value ="saab">小美</option>
              <option value="opel">大路</option>
              <option value="audi">Audi</option>
            </select>
            <hr>
          </div>
        </div>
      <div style="width: 100%;height: 50px;">
        <div style="width: 20%;height: 50px;color: #dd0a20;display: block;float: left;text-align: center;line-height: 60px;font-size: 16px;">仓库*</div>
        <div style="width: 80%;height: 50px;display: block;float: left;">
          <select style="width: 100%;height: 50px;text-align: center;">
            <option value ="volvo">Volvo</option>
            <option value ="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <hr>
        </div>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">选择商品</div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888;font-size: 30px;color: cornflowerblue">
        <div style="width: 50%;height: 50px;display: block;float: left;text-align: center;"><i class="ion-android-expand"></i></div>
        <div style="width: 50%;height: 50px;display: block;float: left;text-align: center;"><i class="ion-android-add"></i></div>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">客户实付金额
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="text"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">优惠金额
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="text"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">客户欠款
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="text"/>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">本单客户积分
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0" type="text"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">备注
        <input style="height: 50px;font-size: 16px;width: 70%;margin-left: 20px;" type="text"/>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 40px;bottom: 0;position: fixed;border-top:1px solid #F2F2F2 ">
        <div style="margin-left:20px;font-size: 14px;height: 40px;line-height:40px;background: white;width: 60%;display: block;float: left;">合计：0件&nbsp;&nbsp;&nbsp;<span style="color: orange;">￥0.00</span></div>
        <div style="width: 30%;height: 40px;display: block;float: right;color:white;background: cadetblue;text-align:center;line-height:40px;font-size: 14px;">出售</div>
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
