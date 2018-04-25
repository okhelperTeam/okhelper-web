/**
* Created by ztt on 2018/4/14.
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
            <input class="header-bar-search-text" type="text" placeholder="查找商品"/>
          </div>
        </div>
        <router-link to="/home" class="header-bar-cancel-btn">取消</router-link>
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
