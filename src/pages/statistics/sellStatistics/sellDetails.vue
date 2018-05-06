/**
* Created by ztt on 2018/5/6.
*/
<template>
    <div id="">
      <div  style="color:white;background: #C20C0C;font-size:18px;padding-top:12px;height: 56px;width: 100%;text-align: center;">
        <div style="width: 20%;font-size:16px;display: block;float: left;height: 32px;line-height: 32px;">
          <router-link to="/statistics">&lt;&nbsp;返回</router-link>
        </div>
        <div style="width: 60%;display: block;float: left;height: 32px;line-height: 32px;">销售明细</div>
        <div style="width: 20%;display: block;float: left;height: 32px;line-height: 32px;"></div>
      </div>
      <div class="ok-model-border"></div>
      <div>
        <ul style="width: 100%;list-style:none;">
          <li @click="sellTime(1)" :class="{timeActive:isToday}" class="ok-hotsell-time-li" >今日</li>
          <li @click="sellTime(2)" :class="{timeActive:isYesterday}" class="ok-hotsell-time-li" >昨日</li>
          <li @click="sellTime(3)" :class="{timeActive:isAWeek}" class="ok-hotsell-time-li" >近7日</li>
          <li @click="sellTime(4)" :class="{timeActive:isAMonth}" class="ok-hotsell-time-li" >本月</li>
        </ul>
      </div>
      <div class="ok-model-border"></div>
      <div>
        <ul style="width: 100%;list-style:none;">
          <li class="statistics-sell-details-total-li">
            <div>单品数</div>
            <div style="color: orangered;">551</div>
          </li>
          <li class="statistics-sell-details-total-li">
            <div>销售额</div>
            <div style="color: orangered;">￥15,200.00</div>
          </li>
          <li class="statistics-sell-details-total-li">
            <div>毛利</div>
            <div style="color: orangered;">￥15,200.00</div>
          </li>
          <li class="statistics-sell-details-total-li">
            <div>毛利率(%)</div>
            <div style="color: orangered;">31.25</div>
          </li>
        </ul>
      </div>
      <div class="ok-model-border"></div>
      <div style="border-bottom: 1px solid #F2F2F2;color: #888888;font-size: 10px;">
        <div>
          <div style="height: 70px;width: 100%;padding-left: 10px;padding-right: 10px;">
            <div style="width: 20%;height: 70px;float: left;padding: 10px;">
              <img src="@/assets/icon/product1.jpg" width="50" height="50"/>
            </div>
            <div style="width: 60%;height: 70px;float: left;padding-top: 10px;">
              <div style="overflow: hidden;text-overflow:ellipsis;white-space:nowrap;font-size: 15px;color: black;margin-bottom: 5px;">菀草壹韩版春季宽松春秋蝙蝠袖风衣</div>
              <span>CQ102</span><span style="margin-left: 10px;">粉色-大号</span>
            </div>
            <div style="width: 20%;height: 70px;float: left;line-height:70px;color: orangered;text-align: center;">
              <span>￥1500.00</span>
            </div>
          </div>
          <div style="height: 50px;width: 100%;padding-left: 20px;padding-right: 10px;">
            <div style="width: 60%;height: 50px;display: block;float: left;">
              <div>单价数量：￥150.00&nbsp;*&nbsp;<span style="color: orangered">10</span></div>
              <div>业务时间：2018-05-06 12:12</div>
            </div>
            <div style="width: 35%;height: 50px;display: block;float: left;">
              <div>毛利：<span style="color: orange">+150.00</span></div>
              <div>销售员：<span style="color: pink">小美</span></div>
            </div>
            <!--@click="showDetails[index]=!showDetails[index]"-->
            <div style="width: 5%;height: 50px;display: block;float: left;">
              <i @click="showDetails=!showDetails" style="margin-top: 10px;color: black;" :class="[showDetails?'ion-chevron-up':'ion-chevron-down']"></i>
            </div>
          </div>
          <div v-if="showDetails" style="height: auto;width: 100%;border-top: 1px dashed #F2F2F2;padding-left: 20px;padding-right: 10px;padding-bottom: 15px;padding-top: 5px;">
            <div>单据编号：ST201805061237001</div>
            <div>客户：杨红</div>
            <div>结算方式：现金</div>
            <div>
              <div style="width: 50%;display: block;float: left;">
                <div>仓库：8号仓库</div>
                <div>单据总金额：￥5,521.00</div>
                <div>品牌：菀草壹</div>
                <div>原价：￥5,521.00</div>
                <div>总金额：￥5,521.00</div>
                <div>采购均价：￥521.00</div>
                <div>毛利：￥521.00</div>
              </div>
              <div style="width: 50%;display: block;float: left;">
                <div>仓库：8号仓库</div>
                <div>实收金额：￥5,521.00</div>
                <div>分类：大衣</div>
                <div>折扣(%)：100.00</div>
                <div>折后金额：￥5,521.00</div>
                <div>成本：￥521.00</div>
                <div>毛利率(%)：21.00</div>
              </div>
            </div>
            <div style="clear: both"></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
</template>

<script>
    export default {
        mixins: [],     //混合
        components: {},//注册组件
        data() {         //数据
            return {
              isToday:true,
              isYesterday:false,
              isAWeek:false,
              isAMonth:false,
              showDetails:false
            };
        },
        computed: {},  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          sellTime(n){
            switch (n){
              case 1:this.isToday=true;this.isYesterday=false;this.isAWeek=false;this.isAMonth=false;break;
              case 2:this.isToday=false;this.isYesterday=true;this.isAWeek=false;this.isAMonth=false;break;
              case 3:this.isToday=false;this.isYesterday=false;this.isAWeek=true;this.isAMonth=false;break;
              case 4:this.isToday=false;this.isYesterday=false;this.isAWeek=false;this.isAMonth=true;break;
              default:this.isToday=true;this.isYesterday=false;this.isAWeek=false;this.isAMonth=false;
            }
          }
        },   //方法
        watch: {}      //监听
    }
</script>

<style scoped>
  .timeActive{
    background: #C20C0C!important;
    color: white!important;
  }
  .ok-hotsell-time-li{
    width: 25%;
    height: 30px;display: block;float:left;background: white;text-align: center;line-height: 30px;
  }
  .statistics-sell-details-total-li{
    width: 25%;height: 56px;font-size: 12px;display: block;float:left;text-align: center;padding-top: 10px;padding-bottom: 10px;color: #888888;
  }
</style>
