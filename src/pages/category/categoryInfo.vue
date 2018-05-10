/**
* Created by ztt on 2018/5/9.
*/
<template>
  <transition-group enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
    <div :key="1" id="" style="position: absolute;top:0;height: 100%;width:100%;background:white;z-index: 10000">
      <div style="color: white;height:56px;background:#C20C0C;font-size: 18px;margin: 0 auto;width: 100%;text-align: center;line-height: 56px;">
        <span>新增分类</span>
        <div style="float: left;font-size: 25px;width: 56px;height: 20px;"  @click="Show=false" >
          <i>&nbsp;</i>
        </div>
        <div style="float: right;font-size: 25px;width: 56px;height: 20px;"  @click="closeCategoryInfo" >
          <i class="ion-ios-close-empty"></i>
        </div>
      </div>
      <div class="ok-border"></div>
      <div>
        <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
          <div style="width:30%;display: block;float: left;padding-left: 20px;text-align: center">分类名称<span style="color: #dd0a20">*</span></div>
          <div style="height:43px;border-bottom: 1px solid #2D84FF;width:65%;display: block;float: left;">
            <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="分类名称" type="text" v-model="category.categoryName"/>
          </div>
        </div>
        <div class="ok-model-border"></div>
        <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
          <div style="width:30%;display: block;float: left;padding-left: 20px;text-align: center">上级分类<span style="color: #dd0a20">*</span></div>
          <div style="height:43px;border-bottom: 1px solid #2D84FF;width:65%;display: block;float: left;">
            <div style="height: 30px;font-size: 16px;width: 100%;"  @click="parentData.categoryShow=!parentData.categoryShow" placeholder="选择上级分类">{{parentData.choosedCategoryName}}</div>
          </div>
        </div>
        <category
          :parentData="parentData"
          @getChoosedCategoryId="getChoosedCategoryId"
        ></category>
        <div class="ok-model-border"></div>
        <div style="width: 100%;height: 50px;line-height: 50px;font-size: 16px;color: #888888">
          <div style="width:30%;display: block;float: left;padding-left: 20px;text-align: center">分类描述</div>
          <div style="height:43px;border-bottom: 1px solid #2D84FF;width:65%;display: block;float: left;">
            <input style="height: 30px;font-size: 16px;width: 100%;" placeholder="分类描述...." type="text" v-model="category.remarks"/>
          </div>
        </div>
        <div style="margin-top: 10px;" class="ok-border"></div>
        <div style="padding: 20px;width: 100%">
          <div style="background: #108ee9;height: 40px;width: 80%;margin: 0 auto;border-radius: 5px;color: white;text-align: center;line-height: 40px;font-size: 16px;" @click="saveCategoryInfo">保存</div>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
  import category from "@/pages/category/category";
  import {addCategory} from '@/service/getData.js';
  import { Toast } from 'vant';
    export default {
        name:"ci",
        mixins: [],     //混合
        components: {
          category
        },//注册组件
        data() {//数据
            return {
              isShow:true,
              parentData:{categoryShow:false,choosedCategoryName:'选择上级分类',plusShow:false},
              choosedCategoryId:0,
              category:{
                categoryName:'',
                superId:this.choosedCategoryId,
                remarks:''
              }
            };
        },
        computed: {},  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          getChoosedCategoryId(categoryItem){//获取从子组件来的分类id
            this.parentData.choosedCategoryName=categoryItem.categoryName;
            this.choosedCategoryId=categoryItem.id;
          },
          closeCategoryInfo(){
            this.$emit('closeCategoryInfo',{close:false,reflashCategoryList:true});
          },
          saveCategoryInfo(){
            addCategory({
              superId:this.category.superId,
              categoryName:this.category.categoryName,
              remarks:this.category.remarks
            }).then(response=>{
              alert(response.data)
              Toast({
                position: 'bottom',
                message: '新增分类成功'
              });
            },error=>{

            });
          }
        },   //方法
        watch: {}      //监听
    }
</script>

<style scoped>

</style>
