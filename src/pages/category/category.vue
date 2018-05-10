/**
* Created by ztt on 2018/4/28.
*/
<template>
    <div id="">
      <transition-group enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown" :duration="800">
        <div :key="1" v-show="parentData.categoryShow" style="z-index:100;background:white;width: 100%;height: 100%;position: absolute;top: 0px; ">
          <div :key="2" style="color: white;height:56px;background:#C20C0C;font-size: 18px;margin: 0 auto;width: 100%;text-align: center;line-height: 56px;">
            <span>{{parentData.choosedCategoryName}}</span>
            <div v-if="parentData.plusShow" style="color:white;float: left;font-size: 25px;width: 56px;height: 20px;">
              <div @click="productInfoShow=!productInfoShow" :key="5" style="color: white" >
                <i :key="6" class="ion-ios-plus-empty"></i>
              </div>
            </div>
            <div v-else style="float: left;font-size: 25px;width: 56px;height: 20px;">
              <i>&nbsp;</i>
            </div>
            <div :key="3" style="float: right;font-size: 25px;width: 56px;height: 20px;"  @click="parentData.categoryShow=false" >
              <i :key="4" class="ion-ios-close-empty"></i>
            </div>
          </div>
          <div>
            <!--根分类-->
            <div style="margin-right: 15px;clear: both;">
              <div @click="choosedAllCategory" style="margin-left: 30px;font-size: 18px;height: 36px;line-height: 36px;">全部分类
                <i style="float: right;" :class="{'ion-checkmark-round':isChoosedAll}"></i>
              </div>
              <category-tree :data="categoryList" :name="categoryName" :chooseId="choosedCategoryId" @getSubMenu="getSubMenu"></category-tree>
            </div>
          </div>
        </div>
      </transition-group>

        <div :key="1" v-if="productInfoShow">
          <category-info :key="2" @closeCategoryInfo="closeCategoryInfo"/>
        </div>


    </div>
</template>

<script>
  import categoryTree from '@/pages/category/categoryTree'
  import categoryInfo from '@/pages/category/categoryInfo'
  import {getCategoryList} from '@/service/getData';
    export default {
        mixins: [],     //混合
        components: {
          'category-tree':categoryTree,
          'category-info':categoryInfo
        },//注册组件
        data() {         //数据
            return {
              choosedCategoryName:'全部分类',
              isChoosedAll:true,
              categoryList:[],//分类数据
              categoryName: 'categoryName',
              choosedCategoryId:0,
              productInfoShow:false
            };
        },
        props:{
          parentData:{}
        },
        computed: {},  //计算属性
        created() {
          getCategoryList(0).then(
            response=>{
              this.categoryList=response.data;
            },error=>{
              console.log(error.response.msg)
            }
          )
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          getCategoryList(){//获取菜单列表
            getCategoryList(0).then(
              response=>{
                this.categoryList=response.data;
              },error=>{
                console.log(error.response.msg)
              }
            )
          },
          choosedAllCategory(){
            setTimeout(()=>{
              this.parentData.categoryShow=false;
            },300);
            var categoryItem={categoryName:'全部分类',id:0};
            this.choosedCategoryId=0;
              this.isChoosedAll=true;
            this.$emit('getChoosedCategoryId',categoryItem);
          },
          getSubMenu (categoryItem,callback) {//获取子菜单
            this.choosedCategoryId=categoryItem.id;
            this.isChoosedAll=false;
            this.$emit('getChoosedCategoryId',categoryItem);
            setTimeout(()=>{
              this.parentData.categoryShow=false;
            },300);
            callback(categoryItem.id);
          },
          closeCategoryInfo(childrenData){//关闭新增分类组件
            this.productInfoShow=childrenData.close;
          }
        },   //方法
        watch: {
          'parentData.categoryShow':function (newValue,oldValue) {
            if(newValue){
              this.getCategoryList();
            }
          }   //监听
        }
    }
</script>

<style scoped>

</style>
