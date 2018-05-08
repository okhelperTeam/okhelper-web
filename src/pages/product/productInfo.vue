/**
* Created by ztt on 2018/4/22.
*/
<template>
    <div id="">
      <div class="back-bar">
        <router-link to="/product" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
        </router-link>
        <div class="back-bar-name">
          新增商品
        </div>
        <div class="back-bar-cancelBtn">
          <div style="margin-left:8px;display:block;float:left;width: 50px;height: 25px;font-size: 18px;color: white;">
            保存
          </div>
        </div>
      </div>

      <div style="margin-top:56px;width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">名称<span style="color: #dd0a20">*</span></div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="商品名称" type="text"/>
        </div>
      </div>
      <div class="ok-model-border"></div>

      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">货号<span style="color: #dd0a20">*</span></div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="货号" type="text"/>
      </div>
    </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">条码<span style="color: #dd0a20">*</span></div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:55%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="唯一保存后不可修改，可生成" type="text" v-model="barCode"/>
        </div>
        <div @click="generateBarCodeM" style="float: right;background: #2D84FF;margin-right:20px;height: 30px;width: 50px;border-radius: 5px;margin-top: 10px;color: white;text-align: center;line-height: 30px;">生成</div>
      </div>
      <div class="ok-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">采购价<span style="color: #dd0a20">*</span></div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:50%;display: block;float: right;margin-right: 20px;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="￥0.00" type="text"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">批发价<span style="color: #dd0a20">*</span></div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:50%;display: block;float: right;margin-right: 20px;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="￥0.00" type="text"/>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">零售价<span style="color: #dd0a20">*</span></div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:50%;display: block;float: right;margin-right: 20px;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="￥0.00" type="text"/>
        </div>
      </div>
      <div style="height: auto;padding: 20px;background: #F2F2F2;width: 100%;">
        <div v-if="productListShow[index]" v-for="(imgSrc,index) in productImgList" style="margin: 5px;display: block;float: left;">
          <v-touch @press="chooseMainImg(index)" :key="index">
            <div style="width: 20px;height: 20px;background: orange;position: fixed;text-align: center;line-height: 20px;color: white;" v-show="mainImg[index]">主</div>
            <div @click="deleteImg(index)" style="z-index:100;position:relative;margin-left: -20px;width: 20px;height: 20px;background: #C20C0C;text-align: center;line-height: 20px;color: white;float: right;">
              <i class="ion-close-round"></i>
            </div>
            <img width="100px" height="100px" :src="imgSrc"/>
          </v-touch>
        </div>
        <van-uploader :after-read="onRead" accept="image/*" multiple>
          <div style="margin:10px;border: 3px solid #888888;font-size: 50px;width:60px;height: 60px;text-align: center;line-height: 60px;color: #888888;">
            <i class="ion-camera"></i>
          </div>
        </van-uploader>
        <div style="clear:both;color: #888888;font-size: 12px;width:100%;text-align: center;margin-top:20px;">上传图片大小不能超过4M，单个商品最多可添加6张图片</div>
        <div style="clear:both;color: #888888;font-size: 12px;width:100%;text-align: center;">点击图片看大图，【长按】图片设置为商品主图</div>
      </div>

    </div>
</template>

<script>
  import Vue from 'vue'
  var VueTouch = require('vue-touch');
  Vue.use(VueTouch, {name: 'v-touch'});
  import {upLoadGoodsImgs,generateBarCode} from '@/service/getData.js'
  import { Uploader } from 'vant';
  import { Toast } from 'vant';

  Vue.use(Uploader);
    export default {
        mixins: [],     //混合
        components: {},//注册组件
        data() {         //数据
            return {
              productImgList:[],
              mainImg:[],
              productListShow:[],
              imgCount:0,
              barCode:''
            };
        },
        computed: {},  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          chooseMainImg(n){
            for(var i=0;i<this.mainImg.length;i++){
              this.mainImg[i]=false;
            }
            this.mainImg[n]=true;
            Vue.set(this.mainImg,n,this.mainImg[n]);
          },
          deleteImg(index){
            this.productListShow[index]=false;
            Vue.set(this.productListShow,index,this.productListShow[index]);
            this.productImgList.remove(index);
          },
          onRead(file) {
            let formData = new FormData();
            if(file instanceof Array){//instanceof用于判断是否为已知类型
              for(let item of file){
                this.productImgList.push(item.content);
                this.productListShow[this.imgCount]=true;
                this.imgCount++;
                formData.append('file',item.file);
                upLoadGoodsImgs(formData).then(
                  response=>{
                    console.log(response.data.url);
                    Toast({
                      position: 'bottom',
                      message: '图片上传成功'
                    });
                  },error=>{
                    console.log(error.response.msg);
                    Toast(error.response.msg);
                  }
                )
              }
            }else {
              this.productImgList.push(file.content);
              this.productListShow[this.imgCount]=true;
              this.imgCount++;
              formData.append('file',file.file);
              upLoadGoodsImgs(formData).then(
                response=>{
                  console.log(response.data.url);
                  Toast({
                    position: 'bottom',
                    message: '图片上传成功'
                  });
                },error=>{
                  console.log(error.response.msg);
                }
              )
            }

          },
          generateBarCodeM(){
            generateBarCode().then(response=>{
              this.barCode=response.data.barCode;
            },error=>{
              console.log(error.response.msg);
            })
          }
        },   //方法
        watch: {}      //监听
    }
</script>

<style scoped>

</style>
