/**
* Created by LENOVO on 2018/5/6.
*/


<template>
  <transition name='fade'>
    <div class="alert" v-if="showAlert">
      <div class="wrap">
        <div class="head">{{title}}</div>
        <div class="body">
          <slot>
            <p>{{message}}</p>
          </slot>
        </div>
        <div class="foot">
          <div v-if="type === 'confirm'">
            <button class="btn-base" @click="sure">确定</button>
            <button class="btn-gray" @click="cancel">取消</button>
          </div>
          <div v-else-if="type === 'inform'">
            <button class="btn-base" @click="cancel">知道了</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'alert',
    data() {
      return {
        showAlert: false,
      };
    },
    props: {
      title: {
        type: String,
        default: '提示',
      },
      message: {
        type: String,
      },
      type: { // 可以有confirm, 和inform两个类型
        type: String,
        default: 'confirm',
        validator(value) {
          return value === 'confirm' || value === 'inform';
        },
      },
      sureBtn: {
        type: Function,
      },
      cancelBtn: {
        type: Function,
      },
      context: {
        type: Object,
      },
    },
    methods: {
      cancel() {
        if (this.cancelBtn) {
          this.cancelBtn.apply(this.context);
        }
        this.close();
      },
      sure() {
        if (this.sureBtn) {
          this.sureBtn.apply(this.context);
        }
        this.close();
      },
      show() {
        this.showAlert = true;
      },
      close() {
        this.showAlert = false;
      },
    },
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .alert {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0, 0.8);
    z-index: 1000;
    transition: all .3s ease-in-out;
  }
  .wrap {
    position: absolute;
    z-index: 1002;
    min-width: 400px;
    background: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
  }
  .head {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #dedede;
    padding-left: 10px;
    color: #333;
  }
  .body {
    padding: 40px 20px;
    text-align: center;
  }
  .foot {
    height: 50px;
    text-align: center;
    button {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
