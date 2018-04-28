/**
* Created by ztt on 2018/4/25.
*/
<template>
    <div id="">
      <ok-header></ok-header>
      <div style="margin-top:56px;height: 100px;width: auto;display: block;">
        <div style="display: block;float: left;width: 30%;text-align: center;height:100px;line-height: 100px;">
          <img src="@/assets/icon/product2.jpg" width="70px" height="70px"/>
        </div>
        <div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">
          <div style="width:100%;display: block;float: left;font-size: 16px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">菀草壹韩版春季宽松春秋蝙蝠袖风衣</div>
          <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background:#2D84FF;border-radius: 5px;margin-right: 5px;">半身裙</div>
          <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: red;border-radius: 5px;">热销</div>
          <div style="clear: both;color: orange;">￥499.00</div>
          <div  style="clear: both;color: #888888;">上架时间：2018-4-20 5:20:22</div>
        </div>
        <div style="font-size:30px;line-height:30px;padding-top:20px;height:80px;display: block;float: left;width: 20%;height:80px;text-align: center;">
          <i style="display: block" class="ion-share"></i>
          <i style="display: block" class="ion-ios-cart"></i>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="height: 100px;width: auto;display: block;">
        <div style="display: block;float: left;width: 30%;text-align: center;height:100px;line-height: 100px;">
          <img src="@/assets/icon/product1.jpg" width="70px" height="70px"/>
        </div>
        <div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">
          <div style="width:100%;display: block;float: left;font-size: 16px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">菀草壹韩版春季宽松春秋蝙蝠袖风衣</div>
          <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background:#2D84FF;border-radius: 5px;margin-right: 5px;">大衣</div>
          <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: red;border-radius: 5px;">热销</div>
          <div style="clear: both;color: orange;">￥599.00</div>
          <div  style="clear: both;color: #888888;">上架时间：2018-4-21 8:20:11</div>
        </div>
        <div style="font-size:30px;line-height:30px;padding-top:20px;height:80px;display: block;float: left;width: 20%;height:80px;text-align: center;">
          <i style="display: block" class="ion-share"></i>
          <i style="display: block" class="ion-ios-cart"></i>
        </div>
      </div>
      <div style="height: 100px;width: auto;display: block;">
        <div style="display: block;float: left;width: 30%;text-align: center;height:100px;line-height: 100px;">
          <img src="@/assets/icon/product3.jpg" width="70px" height="70px"/>
        </div>
        <div style="display: block;float: left;width: 50%;height:80px;padding-top: 8px;">
          <div style="width:100%;display: block;float: left;font-size: 16px;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">菀草壹韩版春季宽松春秋蝙蝠袖风衣</div>
          <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background:#2D84FF;border-radius: 5px;margin-right: 5px;">大衣</div>
          <div style="float: left;width:auto;color:white;padding-left:3px;padding-right:3px;background: red;border-radius: 5px;">热销</div>
          <div style="clear: both;color: orange;">￥699.00</div>
          <div  style="clear: both;color: #888888;">上架时间：2018-4-20 2:20:10</div>
        </div>
        <div style="font-size:30px;line-height:30px;padding-top:20px;height:80px;display: block;float: left;width: 20%;height:80px;text-align: center;">
          <i style="display: block" class="ion-share"></i>
          <i style="display: block" class="ion-ios-cart"></i>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <!--<ok-footer></ok-footer>-->
    </div>
</template>

<script>
  const Header = resolve => require(['@/components/header/header'], resolve);
  const Footer = resolve => require(['@/components/footer/footer'], resolve);
    export default {
        mixins: [],     //混合
        components: {
          'ok-header':Header,
          'ok-footer':Footer
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
