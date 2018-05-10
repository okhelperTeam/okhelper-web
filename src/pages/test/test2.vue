<template>
  <div class="scan" v-if="isOpen">
    <div id="bcid">
      <!-- <div style="height:40%">
      </div> -->
    </div>
    <footer>
      <button @click="setFlash">取消</button>
      <button @click="setFlash">闪光灯</button>
      <button @click="setFlash">从相册中获取</button>
    </footer>
  </div>
</template>

<script type='text/ecmascript-6'>
  let scan = null;
  export default {
    data() {
      return {
        codeUrl: '',
        isFlash:false
      }
    },
    props:{
      isOpen:{default:false}
    },
    created(){

    },
    mounted(){
      this.startRecognize();
      this.startScan();
    },
    beforeDestroy(){
      // this.cancelScan();
      // this.closeScan();
    },
    methods: {
      //创建扫描控件
      startRecognize() {
        let that = this;
        if (!window.plus) {alert("请在手机上使用"); return;}
        plus.navigator.setStatusBarBackground('#000');
        scan = new plus.barcode.Barcode('bcid',
        [plus.barcode.QR,plus.barcode.EAN8,plus.barcode.EAN13],
        {frameColor:'#00bbee',scanbarColor:'#00bbee',background:'#000'});

        scan.onmarked = onmarked;
        function onmarked(type, result, file) {
          switch (type) {
            case plus.barcode.QR:
              type = 'QR';
              break;
            case plus.barcode.EAN13:
              type = 'EAN13';
              break;
            case plus.barcode.EAN8:
              type = 'EAN8';
              break;
            default:
              type = '其它' + type;
              break;
          }
          result = result.replace(/\n/g, '');
          that.codeUrl = result;
          this.$emit('scanover',that.codeUrl);
          that.cancelScan();
          that.closeScan();
        }
      },
      //开始扫描
      startScan(options) {
        if (!window.plus) return;
        scan.start(options);
      },
      //关闭扫描
      cancelScan() {
        if (!window.plus) return;
        scan.cancel();
      },
      //关闭条码识别控件
      closeScan() {
        if (!window.plus) return;
        scan.close();
        plus.navigator.setStatusBarBackground('#C20C0C');
      },
      //闪光灯
      setFlash() {
        if (!window.plus) return;
        this.isFlash=!this.isFlash;
        scan.setFlash(this.isFlash);
      }
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
