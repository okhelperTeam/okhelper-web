/**
* Created by ztt on 2018/4/25.
*/
<template>
    <div id="">
      <div class="header-bar">
        <div class="header-bar-icon">
          <i class="ion-qr-scanner"></i>
        </div>
        <div class="header-bar-search">
          <div class="header-bar-search2">
            <i class="header-bar-search-icon ion-android-search"></i>
            <input class="header-bar-search-text"  v-model="searchProductName" type="text" placeholder="查找商品"/>
          </div>
        </div>
        <router-link :to="lastPage" class="header-bar-cancel-btn">取消</router-link>
      </div>
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
  import Vue from 'vue'
  import { Search } from 'vant';

  Vue.use(Search);
    export default {
        mixins: [],     //混合
        components: {
          'ok-header':Header,
          'ok-footer':Footer
        },//注册组件
        data() {         //数据
            return {
              lastPage:'',
              searchProductName:''
            };
        },
        computed: {},  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {

        },   //方法
        watch: {
          searchProductName:function (newValue,oldValue) {

          }
        },      //监听
        beforeRouteEnter (to, from, next) {
        next(vm => {
          vm.lastPage=from.fullPath;
        })
      }
    }
</script>

<style scoped>

  .header-bar{
    top: 0;
    position: fixed;
    width: 100%;
    z-index: 100;
    height: 56px;
    background: #C20C0C;
    text-align: center;
    line-height: 56px;
    padding: 10.5px;
  }
  .header-bar-icon{
    width: 15%;
    font-size: 30px;
    height: 35px;
    margin-top:-10px;
    display: block;
    float: left;
    color:white;
  }
  .header-bar-search{
    width: 70%;
    display: block;
    float: left;
    height: 35px;
    border-radius:5px;
    background: white;
    color:chocolate;
    margin: 0 auto;
    font-size: 16px;
  }
  input::-webkit-input-placeholder { /* WebKit browsers */
    color: chocolate;
  }

  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: chocolate;
  }

  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: chocolate;
  }

  input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: chocolate;
  }

  .header-bar-search2{
    width: 100%;
    line-height: 35px;
    height:35px;
    display: block;
    float: left;
  }
  .header-bar-search-icon{
    display: block;
    margin-left:5px;
    margin-right:5px;
    float: left;
    width: 8%;
  }
  .header-bar-search-text{
    font-size:14px;
    height: 30px;
    margin-top:2px;
    display: block;
    float: left;
    width: 80%;
  }
  .header-bar-cancel-btn{
    color: white;
    font-size: 18px;
    display: block;
    float: left;
    margin-left: 10px;
    margin-top: -12px;
  }
</style>
