/**
* Created by ztt on 2018/4/22.
*/
<template>
    <div id="">
      <div class="back-bar">
        <span @click="$router.back()" style="color: white" class="back-bar-backBtn">&lt;&nbsp;返回
        </span>
        <div class="back-bar-name">
          商品信息
        </div>
        <div class="back-bar-cancelBtn">
          <div @click="addNewOrUpdateProduct($route.query.id)" style="margin-left:8px;display:block;float:left;width: 50px;height: 25px;font-size: 18px;color: white;">
            保存
          </div>
        </div>
      </div>

      <div style="margin-top:56px;width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">名称<span style="color: #dd0a20">*</span></div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="商品名称" type="text" v-model="product.productName"/>
        </div>
      </div>
      <div class="ok-model-border"></div>

      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
      <div style="width:25%;display: block;float: left;padding-left: 20px;">货号<span style="color: #dd0a20">*</span></div>
      <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
        <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="货号" type="text"v-model="product.articleNumber"/>
      </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">
          <span>条码</span>
          <span style="color: #dd0a20">*</span>
          <span v-if="$route.query.id!=null&&$route.query.id!=''"></span>
          <span v-else>
            <ok-scan :P="P" @scanover="scanOver"/>
            <i style="color: #108ee9;font-size: 25px;top: 5px;position: relative" class="ion-qr-scanner" @click="P.isOpen=true"></i>
          </span>
        </div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:55%;display: block;float: left;">
          <div v-if="$route.query.id!=null&&$route.query.id!=''">
            <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="唯一保存后不可修改，可生成" disabled type="text" v-model="product.barCode"/>
          </div>
          <div v-else>
            <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="唯一保存后不可修改，可生成" type="text" v-model="product.barCode"/>
          </div>
        </div>
        <div v-if="$route.query.id==null||$route.query.id==''">
          <div @click="generateBarCodeM" style="float: right;background: #2D84FF;margin-right:20px;height: 30px;width: 50px;border-radius: 5px;margin-top: 10px;color: white;text-align: center;line-height: 30px;">生成</div>
        </div>
      </div>
      <div class="ok-border"></div>
      <!--<div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">-->
        <!--<div style="width:25%;display: block;float: left;padding-left: 20px;">采购价<span style="color: #dd0a20">*</span></div>-->
        <!--<div style="height:43px;border-bottom: 1px solid #2D84FF;width:50%;display: block;float: right;margin-right: 20px;">-->
          <!--<input style="height: 30px;font-size: 16px;width: 100%;" placeholder="￥0.00" type="text" v-model="product.productInPrice"/>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="ok-model-border"></div>-->
      <!--<div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">-->
        <!--<div style="width:25%;display: block;float: left;padding-left: 20px;">批发价<span style="color: #dd0a20">*</span></div>-->
        <!--<div style="height:43px;border-bottom: 1px solid #2D84FF;width:50%;display: block;float: right;margin-right: 20px;">-->
          <!--<input style="height: 30px;font-size: 16px;width: 100%;" placeholder="￥0.00" type="text" v-model="product.productOutPrice"/>-->
        <!--</div>-->
      <!--</div>-->
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">分类<span style="color: #dd0a20">*</span></div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
          <div @click="changeCategoryShowStatus" style="height: 30px;font-size: 16px;width: 100%;">{{parentData.choosedCategoryName}}</div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
        <div style="width:25%;display: block;float: left;padding-left: 20px;">零售价<span style="color: #dd0a20">*</span></div>
        <div style="height:43px;border-bottom: 1px solid #2D84FF;width:69%;display: block;float: left;margin-right: 20px;">
          <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="￥0.00" type="text" v-model="product.retailPrice"/>
        </div>
      </div>

      <div style="height: auto;padding: 20px;background: #F2F2F2;width: 100%;">
        <div v-if="productListShow[index]" v-for="(imgSrc,index) in productImgList" style="margin: 5px;display: block;float: left;">
          <v-touch @press="chooseMainImg(index)" :key="index">
            <div  style="position:relative;">
              <div style="width: 20px;height: 20px;background: orange;position:absolute;top:0px;left:0px;z-index:10;float: left;text-align: center;line-height: 20px;color: white;" v-show="mainImg[index]">主</div>
              <div @click="deleteImg(index)" style="z-index:10;position:absolute;top:0px;right:0px;width: 20px;height: 20px;background: #C20C0C;text-align: center;line-height: 20px;color: white;">
                <i class="ion-close-round"></i>
              </div>
              <img style="position:relative;z-index: 5;width: 100px;height: 100px;" :src="imgSrc"/>
            </div>

          </v-touch>
        </div>
        <van-uploader :after-read="onRead" accept="image/*" multiple >
          <div style="margin:10px;border: 3px solid #888888;font-size: 50px;width:60px;height: 60px;text-align: center;line-height: 60px;color: #888888;">
            <i class="ion-camera"></i>
          </div>
        </van-uploader>
        <div style="clear:both;color: #888888;font-size: 12px;width:100%;text-align: center;margin-top:20px;">上传图片大小不能超过4M，单个商品最多可添加6张图片</div>
        <div style="clear:both;color: #888888;font-size: 12px;width:100%;text-align: center;">点击图片看大图，【长按】图片设置为商品主图</div>
      </div>
      <div @click="showProductOtherInfo=!showProductOtherInfo" style="width: 100%;font-size: 16px;color: #108ee9;text-align: center">
        <div v-if="!showProductOtherInfo" style="height:43px;line-height: 43px;">
          显示详细信息<i class="ion-chevron-down"></i>
        </div>
      </div>
      <div v-show="showProductOtherInfo">
        <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
          <div style="width:25%;display: block;float: left;padding-left: 20px;">颜色</div>
          <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
            <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="商品颜色" v-model="product.productColor" type="text"  />
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
          <div style="width:25%;display: block;float: left;padding-left: 20px;">尺码</div>
          <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
            <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="商品尺寸" v-model="product.productSize" type="text" />
          </div>
        </div>
        <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
          <div style="width:25%;display: block;float: left;padding-left: 20px;">品牌</div>
          <div style="height:43px;border-bottom: 1px solid #2D84FF;width:70%;display: block;float: left;">
            <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="商品品牌" v-model="product.productBrand" type="text" />
          </div>
        </div>
        <div class="ok-model-border"></div>

      </div>
      <!--商品删除按钮-->
      <div v-if="$route.query.id!=null&&$route.query.id!=''">
        <div @click="deleteProductById($route.query.id)" style="margin: 15px;width: auto;height: 40px;line-height: 40px;text-align: center;color: white;background: #C20C0C;font-size: 14px;border-radius: 5px;">删除商品</div>
      </div>
      <ok-category
        :parentData="parentData"
        @getChoosedCategoryId="getChoosedCategoryId"
      ></ok-category>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Category from "../category/category";
  var VueTouch = require('vue-touch');
  Vue.use(VueTouch, {name: 'v-touch'});
  import {upLoadGoodsImgs,generateBarCode,addProduct,getProductById,getProductBybarCode,updateProduct,deleteProduct,getCategorySelf} from '@/service/getData.js'
  import { Uploader } from 'vant';
  import { Toast } from 'vant';
  import Scan from '@/components/common/scan';

  Vue.use(Uploader);
    export default {
        mixins: [],     //混合
        components: {
          'ok-category':Category,
          'ok-scan':Scan
        },//注册组件
        data() {         //数据
            return {
              updateProductId:0,
              productImgList:[],
              mainImg:[false],
              productImgPath:[],//商品图片路径
              productListShow:[],
              imgCount:0,
              showCategory:false,
              parentData:{categoryShow:false,choosedCategoryName:'选择分类',plusShow:true},
              choosedCategoryId:0,
              showProductOtherInfo:false,//显示扩展信息
              product:{mainImg:'',subImgs:[],productAttribute:'',productName:'',articleNumber:'',barCode:'',retailPrice:'',productColor:'',productSize:'',productBrand:'',categoryId:1},
              P:{isOpen:false}
            };
        },
        computed: {},  //计算属性
        created() {//keepAlive状态下created钩子不可用

        },   //创建
        mounted() {
        },   //挂载
        methods: {
          deleteProductById(id){//删除商品
            deleteProduct(id).then(
              response=>{
                Toast({
                  position: 'bottom',
                  message: '商品删除成功'
                });
              },
              error=>{}
            );
          },
          getProductDetailById(id){//获取商品信息byId
            getProductById(id).then(response=>{
              var productDetail=JSON.parse(response.data.productAttribute);
              this.product=Object.assign(response.data,productDetail);
              this.productImgList=this.product.subImgs.split(",");
              for(var i=0;i<this.productImgList.length;i++){
                if(this.productImgList[i]==this.product.mainImg){
                  this.mainImg[i]=true;
                }
                this.imgCount=this.productImgList.length;
                this.productListShow[i]=true;
              }
              //查询分类名称
              if(this.product.categoryId!=0){
                getCategorySelf(this.product.categoryId).then(
                  response=>{
                    this.parentData.choosedCategoryName=response.data.categoryName;
                    console.log(this.parentData.choosedCategoryName)
                  },
                  error=>{
                    console.log(error.msg);
                  }
                );
              }else {
                this.parentData.choosedCategoryName="全部分类";
              }
            },error=>{
              console.log(error.msg);
            });
          },
          changeCategoryShowStatus(){
            this.parentData.categoryShow=!this.parentData.categoryShow;
            this.showProductOtherInfo=false;
          },
          chooseMainImg(n){
            for(var i=0;i<this.mainImg.length;i++){
              this.mainImg[i]=false;
            }
            this.mainImg[n]=true;
            Vue.set(this.mainImg,n,this.mainImg[n]);
            this.product.mainImg=this.productImgPath[n];
            // alert(this.product.mainImg)
            // this.productImgPath.remove(this.product.mainImg);//删除副图组中主图
          },
          deleteImg(index){//删除照片
            this.productListShow[index]=false;
            Vue.set(this.productListShow,index,this.productListShow[index]);
            this.productImgList.splice(index,1);
            this.productImgPath.splice(index,1);//删除图片路径
            this.imgCount--;
            this.product.subImgs.splice(index,1);
          },
          onRead(file) {//上传照片
                    // alert(1)
            if(this.productImgList.length<=6){//上传限制6张

              let formData = new FormData();
              if(file instanceof Array){//instanceof用于判断是否为已知类型
                for(let item of file){
                  // alert(item.content)
                  this.productImgList.push(item.content);
                  this.productListShow[this.imgCount]=true;
                  this.imgCount++;
                  formData.append('file',item.file);
                  upLoadGoodsImgs(formData).then(
                    response=>{
                      console.log(response.data.url);
                      this.productImgPath.push(response.data.url);//存入图片路径
                      if(this.productImgPath.length==1){
                        this.mainImg[0]=true;
                        Vue.set(this.mainImg,0,this.mainImg[0]);
                        this.product.mainImg=this.productImgPath[0];
                      }
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
                    this.productImgPath.push(response.data.url);//存入图片路径
                    if(this.productImgPath.length==1){
                      this.mainImg[0]=true;
                      Vue.set(this.mainImg,0,this.mainImg[0]);
                      this.product.mainImg=this.productImgPath[0];
                    }
                    Toast({
                      position: 'bottom',
                      message: '图片上传成功'
                    });
                  },error=>{
                    console.log(error.response.msg);
                  }
                )
              }
            }else{
              Toast({
                position: 'bottom',
                message: '已有6张图片'
              });
            }
          },
          generateBarCodeM(){
            generateBarCode().then(response=>{
              this.product.barCode=response.data.barCode;
            this.product=  Object.assign({},this.product);
            },error=>{
              console.log(error.response.msg);
            })
          },
          getChoosedCategoryId(categoryItem){//获取从子组件来的分类id
            this.parentData.choosedCategoryName=categoryItem.categoryName;
            this.choosedCategoryId=categoryItem.id;
            this.product.categoryId=categoryItem.id;
            this.showProductOtherInfo=true;
          },
          addNewOrUpdateProduct(id){
            this.product.subImgs=this.productImgPath;//数组接收
            var productDetail={
              productColor:this.product.productColor,
              productSize:this.product.productSize,
              productBrand:this.product.productBrand
            };//商品详情属性
            this.product.productAttribute=JSON.stringify(productDetail);//将商品详情转为字符串
            if(id!=null&&id!=''){//id存在为修改操作
              updateProduct(this.product).then(
                response=>{
                  Toast({
                    position: 'bottom',
                    message: '商品修改保存成功'
                  });
                },
                error=>{
                  console.log(error.msg);
                }
              );
            }else{
              //添加商品前判断各项值是否符合接口要求
              if(this.choosedCategoryId==0){
                Toast({
                  position: 'bottom',
                  message: '请选择分类！'
                });
              }else if(this.product.productName==''){
                Toast({
                  position: 'bottom',
                  message: '请填写商品名称！'
                });
              }else if(this.product.retailPrice==''){
                this.product.retailPrice==0;
              }else{
                //发起新增商品请求
                addProduct(this.product).then(
                  response=>{
                    Toast({
                      position: 'bottom',
                      message: '商品保存成功'
                    });
                  },error=>{
                    console.log(error.msg);
                });
              }

            }
          },
          scanOver(barCode){
            getProductBybarCode(barCode).then(response=>{
              //有该商品条码了
              this.product.barCode="";
                this.product=  Object.assign({},this.product);
              Toast({
                type:'fail',
                position: 'middle',
                message: '条码不能重复'
              });
            },error=>{
              if(error.status==404){
                this.product.barCode=barCode;
                    this.product=  Object.assign({},this.product);
              }else{
                Toast({
                  position: 'bottom',
                  message: '验证条码失败！'
                });
              }
            })

          }
        },   //方法
        watch: {},      //监听
        beforeRouteEnter (to, from, next) { // 缓存组件是，此方法还有效
        next(vm => {
          vm.getProductDetailById(vm.$route.query.id);
          if(to.fullPath=='/category/addCategory'){

          }else{
            if(vm.$route.query.id==null||vm.$route.query.id==''){
              //新增商品时数据清空----------------------
              vm.mainImg=[];
              vm.imgCount=0;
              vm.productImgList=[];
              vm.productImgPath=[];//商品图片路径
              vm.productListShow=[];
              vm.product={};
              vm.choosedCategoryId=0;
            }
          }
        })
      }
    }
</script>

<style scoped>
  input{
    line-height: 30px;
  }
</style>
