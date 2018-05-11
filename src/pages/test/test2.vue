<template>
  <div>
    <button @click="isShow=true">dfgrfdsdgfd</button>
<van-popup v-model="isShow" position="right" :overlay="false">
  <div>ewfwe</div>

</van-popup>
  </div>
</template>

<script type='text/ecmascript-6'>
import { Popup } from 'vant';
import Vue from 'vue'
Vue.use(Popup);
  export default {
    data() {
      return {
        isShow:false
      }
    },
    props:{

    },
    created(){

    },
    mounted(){

    },
    beforeDestroy(){

    },
    methods: {
    }
  }
</script>
<style scoped>
  .scan {
    height: 100%;
  }

  #bcid {
    width: 100%;
    height: 90%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom:3rem;
    text-align: center;
    color: #fff;
    background-color: #000;
  }

  footer {
    position: absolute;
    left: 0;
    bottom: 1rem;
    height: 2rem;
    line-height: 2rem;
    z-index: 2;
  }
</style>
