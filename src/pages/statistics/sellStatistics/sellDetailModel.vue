/**
* Created by ztt on 2018/5/11.
*/
<template>
    <div id="">
      <div style="border-bottom: 1px solid #F2F2F2;color: #888888;font-size: 10px;">
        <div>
          <div style="height: 70px;width: 100%;padding-left: 10px;padding-right: 10px;">
            <div style="width: 20%;height: 70px;float: left;padding: 10px;">
              <img src="@/assets/icon/product1.jpg" width="50" height="50"/>
            </div>
            <div style="width: 60%;height: 70px;float: left;padding-top: 10px;">
              <div style="overflow: hidden;text-overflow:ellipsis;white-space:nowrap;font-size: 15px;color: black;margin-bottom: 5px;">{{}}菀草壹韩版春季宽松春秋蝙蝠袖风衣</div>
              <span>CQ102</span><span style="margin-left: 10px;">{{productColor}}-{{productSize}}</span>
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
            <div>客户：杨红{{customerName}}</div>
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
            return {};
        },
        props:{
          productColor:{},
          productSize:{},
          retailPrice:{},
          productColor:{},
          productColor:{},
          customerName:{}
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
