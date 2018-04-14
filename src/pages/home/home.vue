/**
* Created by 朱婷婷 on 2018/4/11.
*/
<template>
  <div>
    <div style="height: 46px;text-align: center;line-height: 46px;">
      <div style="background: brown">
        <h1>欢迎来到OK帮~</h1>
      </div>
    </div>
    <div style="height: 300px;text-align: center;line-height: 300px;">
      <div style="display: inline-block;height: 150px;width: 50%;line-height: 150px;">现在开店</div>
      <div style="display: inline-block;height: 150px;width: 49%;line-height: 150px">加入店铺</div>
    </div>

  </div>

</template>

<script>
  import Vue from 'vue';
  import { NavBar } from 'vant';
  import { Icon } from 'vant';

  Vue.use(Icon);

  Vue.use(NavBar);
    export default {

    }
</script>

<style scoped>
  .bottom-bar-content{
    width: 19%;
    display: inline-block;
    height: 56px;
    line-height: 56px;
    text-align: center;
    font-size: 36px;
  }

</style>
