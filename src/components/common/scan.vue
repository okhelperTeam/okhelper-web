<template>
<div>
  <transition>
    <div class="scan" v-if="P.isOpen">
      <div id="bcid">
      </div>
      <footer>
        <button @click="cancel">取消</button>
        <button @click="setFlash">闪光灯</button>
        <!-- <button @click="choosePic">从相册中获取</button> -->
      </footer>
    </div>
  </transition>
</div>


</template>

<script type='text/ecmascript-6'>
  let scan = null;
  let that=this;
  export default {
    data() {
      return {
        codeUrl: '',
        isFlash:false
      }
    },
    props:{
      P:{isOpen:{}}
    },
    created(){
    },
    mounted(){
    },
    beforeDestroy(){
      // this.cancelScan();
      // this.closeScan();
    },
    methods: {
      //创建扫描控件
      startRecognize() {
        let that=this;
        if (!window.plus) {alert("请在手机上使用"); that.P.isOpen=false; return;}
        scan = new plus.barcode.Barcode('bcid',
        [plus.barcode.QR,plus.barcode.EAN8,plus.barcode.EAN13],
        {frameColor:'#108ee9',scanbarColor:'#108ee9',background:'#000'});
        plus.navigator.setStatusBarBackground('#000');
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
          that.$emit('scanover',that.codeUrl);
          that.cancelScan();
          that.closeScan();
          that.P.isOpen=false;
          window.localStorage.setItem("hasShow",false);
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
      },
      cancel(){
        this.cancelScan();
        this.closeScan();
        this.P.isOpen=false;
      },
      back(){
          if (!window.plus) return;
          let that=this;
          // Android处理返回键
  				plus.key.addEventListener('backbutton', function() {
            that.cancelScan();
            that.closeScan();
            that.P.isOpen=false;
  				   }, false);
          },
      removeBack(){
            if (!window.plus) return;
            let that=this;
            plus.key.removeEventListener('backbutton',function() {
              that.cancelScan();
              that.closeScan();
              that.P.isOpen=false;
    				   });
          },
          // choosePic(){
          //   let that=this;
          //     if (!window.plus) return;
          //     plus.gallery.pick(path=>{
          //       plus.barcode.scan( path, function (type,result,file) {
          //           switch (type) {
          //             case plus.barcode.QR:
          //               type = 'QR';
          //               break;
          //             case plus.barcode.EAN13:
          //               type = 'EAN13';
          //               break;
          //             case plus.barcode.EAN8:
          //               type = 'EAN8';
          //               break;
          //             default:
          //               type = '其它' + type;
          //               break;
          //           }
          //           result = result.replace(/\n/g, '');
          //                         alert(result)
          //           that.codeUrl = result;
          //           that.$emit('scanover',that.codeUrl);
          //           that.cancelScan();
          //           that.closeScan();
          //           that.P.isOpen=false;
          //           window.localStorage.setItem("hasShow",false);
          //     		}, function (error) {
          //     			console.log(error.message);
          //     		});
          //       },error=>{
	        //        console.log(error.message);
          //      },{filter:"image",multiple:false})
          // }
    },
    watch:{
      'P.isOpen':function(val,oldVal){
        if(val){
          window.localStorage.setItem("hasShow","true");
          this.back();
          this.$nextTick().then(()=>{
          this.startRecognize();
          this.startScan();
          })
        }else {
          window.localStorage.setItem("hasShow","false");
          this.$nextTick().then(()=>{
            this.removeBack();
          })
        }
      }
    }
  }
</script>
<style scoped>
  .scan {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left:0;
    z-index: 100;
    background-color: #000;
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
    width: 100%;
    height: 10%;
    position: absolute;
    left: 0;
    bottom: 0;
    line-height: 6rem;
    z-index: 2;
    background-color: red;
  }
</style>
