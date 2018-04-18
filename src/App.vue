<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },//注册组件
}
</script>

<style>
  .router-link-active{
    color: rgba(255,255,255,0.9);
  }
</style>
