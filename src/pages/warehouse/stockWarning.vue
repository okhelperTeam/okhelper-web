/**
* Created by lulu on 2018/4/26.
*/


<template>
  <div id="">
    <div class="back-bar">
      <router-link to="/sell" style="color: white" class="back-bar-backBtn">&lt;&nbsp;库存
      </router-link>
      <div class="back-bar-name">
        库存预警
      </div>
      <div class="back-bar-cancelBtn">
        <div style="margin-left:8px;display:block;float:left;width: 25px;height: 25px;font-size: 25px;color: white;font-weight: bolder;">
          <i class="ion-ios-search"></i>
        </div>
      </div>
    </div>
    <div style="margin-top:56px;height: 37px;width: 100%;">
      <div style="width: 25%;height: 37px;display: block;float: left" @click="arrowsShow(0)">
        <div style="width: 80%;margin: 0 auto;height: 37px;line-height: 37px;text-align: center;">
          <i v-show="arrows_show[0]" class="ion-arrow-down-c"></i>
          <span>默认</span>
        </div>
      </div>
      <div style="width: 25%;height: 37px;display: block;float: left" @click="arrowsShow(1)">
        <div style="width: 80%;margin: 0 auto;height: 37px;line-height: 37px;text-align: center;">
          <i v-show="arrows_show[1]" class="ion-arrow-down-c"></i>
          <span>名称</span>
        </div>
      </div>
      <div style="width: 25%;height: 37px;display: block;float: left" @click="arrowsShow(2)">
        <div style="width: 80%;margin: 0 auto;height: 37px;line-height: 37px;text-align: center;">
          <i v-show="arrows_show[2]" class="ion-arrow-down-c"></i>
          <span>货号</span>
        </div>
      </div>
      <div style="width: 25%;height: 37px;display: block;float: left" @click="arrowsShow(3)">
        <div style="width: 80%;margin: 0 auto;height: 37px;line-height: 37px;text-align: center;">
          <i v-show="arrows_show[3]" class="ion-arrow-down-c"></i>
          <span>库存量</span>
        </div>
      </div>
    </div>
    <div class="ok-model-border"></div>
    <div class="employee-info-box" style="height: 100px;width: auto;display: block;">
      <div style="display: block;float: left;width: 30%;text-align: center;height:100px;line-height: 100px;">
        <img src="@/assets/icon/product1.jpg" width="80px" height="80px"/>
      </div>
      <div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">
        <div style="width:100%;display: block;float: left;font-size: 16px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">菀草壹韩版春季宽松春秋蝙蝠袖风衣</div>
        <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background:#2D84FF;border-radius: 5px;margin-right: 5px;">颜色：亚麻</div>
        <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;">尺码：XL</div>
        <div style="clear: both;color: orange;">货号：802</div>
        <div  style="clear: both;color: #888888;">当前库存量：-45件</div>
        <div  style="clear: both;color: #888888;">低于下限值：13件</div>
      </div>
    </div>
    <div class="ok-model-border"></div>

    <div class="employee-info-box" style="height: 100px;width: auto;display: block;">
      <div style="display: block;float: left;width: 30%;text-align: center;height:100px;line-height: 100px;">
        <img src="@/assets/icon/product2.jpg" width="80px" height="80px"/>
      </div>
      <div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">
        <div style="width:100%;display: block;float: left;font-size: 16px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">菀草壹韩版春季宽松春秋蝙蝠袖风衣</div>
        <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background:#2D84FF;border-radius: 5px;margin-right: 5px;">颜色：米白色</div>
        <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;">尺码：XXL</div>
        <div style="clear: both;color: orange;">货号：B0986</div>
        <div  style="clear: both;color: #888888;">当前库存量：-45件</div>
        <div  style="clear: both;color: #888888;">低于下限值：13件</div>
      </div>
    </div>
    <div class="ok-model-border"></div>

    <div class="employee-info-box" style="height: 100px;width: auto;display: block;">
      <div style="display: block;float: left;width: 30%;text-align: center;height:100px;line-height: 100px;">
        <img src="@/assets/icon/product3.jpg" width="80px" height="80px"/>
      </div>
      <div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">
        <div style="width:100%;display: block;float: left;font-size: 16px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">菀草壹韩版春季宽松春秋蝙蝠袖风衣</div>
        <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background:#2D84FF;border-radius: 5px;margin-right: 5px;">颜色：黑色</div>
        <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: orange;border-radius: 5px;">尺码：M</div>
        <div style="clear: both;color: orange;">货号：1328</div>
        <div  style="clear: both;color: #888888;">当前库存量：-45件</div>
        <div  style="clear: both;color: #888888;">低于下限值：13件</div>
      </div>
    </div>
    <div class="ok-model-border"></div>
  </div>
</template>

<script>
  export default {
    mixins: [],     //混合
    components: {},//注册组件
    data() {         //数据
      return {
        arrows_show:[true,false,false,false]
      };
    },
    computed: {},  //计算属性
    created() {
    },   //创建
    mounted() {
    },   //挂载
    methods: {
      arrowsShow:function (n) {
        alert(n);
        this.arrows_show[0]=false;
        this.arrows_show[1]=false;
        this.arrows_show[2]=false;
        this.arrows_show[3]=false;
        this.arrows_show[n]=true;
        alert(n);
      }
    },   //方法
    watch: {}      //监听
  }
</script>

<style scoped>

</style>
