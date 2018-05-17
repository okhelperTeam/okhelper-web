/**
* Created by lulu on 2018/5/14.
*/


<template>
  <div>
    <div class="back-bar">
      <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
      </span>
      <div  style="color:white;background: #C20C0C;font-size:16px;padding-top:12px;height: 56px;width: 100%;text-align: center;">
        <div style="display: block;font-size: 20px;">更换头像</div>
      </div>
    </div>
    <div v-if="checkImg" style="margin-top: 40%;margin-left:10%;width: 80%;height: 50%;border: 1px solid black;">
      <img :src="userAvatar | defaultImg" width="100%" height="280px"/>
    </div>
    <div style="width: 100%;text-align: center;padding-bottom: 20px;">
      <van-uploader :after-read="onRead" accept="image/*" multiple>
      <div style="width:100%;border: 1px solid black;border-radius: 5px;height: 40px;padding-left:10px;padding-right:10px;line-height: 40px;text-align: center;margin: 12% auto;">
        <span style="font-size: 15px;">从手机相册中选择</span>
      </div>
      </van-uploader>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Icon,Uploader } from 'vant';
  import {upLoadGoodsImgs} from '@/service/getData.js';
  import { Toast } from 'vant';
  Vue.use(Icon).use(Toast).use(Uploader);
    export default {
        name: "changeUserPhoto",
      data(){
          return{
            userAvatar:'',
            checkImg:false,
          }
      },
      created(){
        this.userAvatar=localStorage.getItem("userAvatar");
        this.checkIsNull();
      },
      methods:{
          checkIsNull(){
            if(this.userAvatar==null)
              this.checkImg=false;
            else
              this.checkImg=true;
          },
        onRead(file) {
          let formData = new FormData();
          this.userAvatar=file.content;
          formData.append('file',file.file);
          upLoadGoodsImgs(formData).then(
            response=>{
              console.log(response.data.url);
              this.userAvatar=response.data.url;//存入图片路径
              Toast({
                position: 'bottom',
                message: '图片上传成功'
              });
              this.$router.push({path:'/user/person'});
            },error=>{
              console.log(error.response.msg);
            }
          )
        },
      }
    }
</script>

<style scoped>

</style>
