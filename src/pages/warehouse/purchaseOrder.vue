/**
* Created by lulu on 2018/4/26.
*/


<template>
    <div id="">
      <div class="back-bar">
        <router-link to="/warehouse/purchaseHistory" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
        </router-link>
        <div class="back-bar-name">
          采购单
        </div>
      </div>
      <div style="width: 100%;height: 60px;margin-top: 56px;">
        <div style="width: 20%;height: 60px;color: #dd0a20;display: block;float: left;text-align: center;line-height: 60px;font-size: 16px;">供应商*</div>
        <div style="width: 80%;height: 60px;display: block;float: left;">
          <select style="width: 100%;height: 60px;text-align: center;">
            <option value ="volvo">深圳市宝安区西乡凌古服装厂</option>
            <option value ="saab">赤峰金泰医药有限公司</option>
            <option value="opel">上海卓凡服装有限公司</option>
            <option value="audi">北京制药有限公司</option>
          </select>
          <hr>
        </div>
      </div>
      <div style="width: 100%;height: 50px;">
        <div style="width: 20%;height: 50px;color: #dd0a20;display: block;float: left;text-align: center;line-height: 60px;font-size: 16px;">仓库*</div>
        <div style="width: 80%;height: 50px;display: block;float: left;">
          <select style="width: 100%;height: 50px;text-align: center;">
            <option value ="volvo">一号仓库</option>
            <option value ="saab">二号仓库</option>
            <option value="opel">三号仓库</option>
            <option value="audi">四号仓库</option>
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
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">结算账户
        <div style="width: 60%;height: 50px;display: block;float: left;margin-left: 40%;margin-top: -15%">
        <select style="width: 100%;height: 50px;text-align: center;">
          <option value ="">柜台现金</option>
          <option value ="">支付宝</option>
          <option value="">微信</option>
          <option value="">银行卡</option>
        </select>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">实付金额
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="text"/>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">欠供应商款
        <input style="height: 50px;font-size: 16px;width: 20%;margin-right: 20px;float: right;" placeholder="0.00" type="text"/>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;padding-left: 20px;font-size: 16px;color: #888888">业务日期
        <div style="width: 60%;display: block;float: left;margin-left: 40%;margin-top: -15%">
          <van-datetime-picker
            name="orderDate"
            v-model="currentDate"
            type="date"
            :min-date="minDate"
          />
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;color: #888888">备注
        <input style="height: 50px;font-size: 16px;width: 70%;margin-left: 20px;" type="text"/>
      </div>
      <div style="clear: both" class="ok-border"></div>
      <div style="width: 100%;height: 40px;bottom: 0;position: fixed;border-top:1px solid #F2F2F2 ">
        <div style="margin-left:20px;font-size: 14px;height: 40px;line-height:40px;background: white;width: 60%;display: block;float: left;">合计：0件&nbsp;&nbsp;&nbsp;<span style="color: orange;">￥0.00</span></div>
        <div style="width: 30%;height: 40px;display: block;float: right;color:white;background: cadetblue;text-align:center;line-height:40px;font-size: 14px;">采购</div>
      </div>
    </div>
</template>

<script>
  import Vue from 'Vue';
  import { DatetimePicker } from 'vant';

  Vue.use(DatetimePicker);
    export default {
      data() {
        return {
          minDate:new Date(2019, 10, 1),
          currentDate: new Date()
        };
      }
    }
</script>

<style scoped>

</style>
