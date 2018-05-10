<template>
  <div id="app" v-cloak>
    <transition     enter-active-class="animated slideInLeft"
    leave-active-class="animated slideOutRight">
  　　　　　　<router-view class="Router"></router-view>
  　　</transition>
  </div>
</template>

<script>
import {getMyUserInfo} from '@/service/getData'
export default {
  name: 'App',
  components: {

  },//注册组件
  created(){
    getMyUserInfo().then(
      response=>{
        this.$router.replace("/home");
        //更新token
        if(response.data.token!=null){
          window.localStorage.setItem('token',response.data.token)
        }
      },error=>{
        //未登录,token失效
        this.$router.replace("/user/login");
      })
  }
}
</script>

<style>
  .router-link-active{
    color: rgba(255,255,255,0.9);
  }
  .Router {
     position: absolute;
     width: 100%;
}

</style>
