/**
* Created by ztt on 2018/5/6.
*/
<template>
    <div id="">
      <div  style="color:white;background: #C20C0C;font-size:18px;padding-top:12px;height: 56px;width: 100%;text-align: center;">
        <div style="width: 20%;font-size:16px;display: block;float: left;height: 32px;line-height: 32px;">
          <div @click="$router.back()">&lt;&nbsp;返回</div>
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

    </div>
</template>

<script>
  import {getSellTotal} from "@/service/getData.js"
    export default {
        mixins: [],     //混合
        components: {},//注册组件
        data() {         //数据
            return {
              isToday:true,
              isYesterday:false,
              isAWeek:false,
              isAMonth:false,
              showDetails:false,
              sellTotal:{saleCount:0,totalSales:0}
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
          },
          getSellTotal(){
            getSellTotal({
              range:'month'
            }).then(response=>{
              this.sellTotal=response.data;
            },error=>{});
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
