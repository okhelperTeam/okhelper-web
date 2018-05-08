/**
* Created by ztt on 2018/5/5.
*/
<template>
  <ul class="tree-menu">
    <li v-for="(item, index) in data">
      <span style="float: left;width: 5%;display: block" @click="toggle(item, index)">
        <i :class="['icon', item.categoryVoList && item.categoryVoList.length ? folderIconList[index] : 'file-text']"></i>
      </span>
      <div style="width: 95%;display: block;float: left;" @click="choose(item,index)">
        {{ item[name] || item.categoryName }}
        <i style="float: right;" :class="{'ion-checkmark-round':isChoosed[index]}"></i>
      </div>
      <tree-menu v-if="scope[index]" :data="item.categoryVoList" :chooseId="chooseId" @getSubMenu="getSubMenu"></tree-menu>
    </li>
  </ul>
</template>
<script>
  import Vue from "vue"
  export default {
    name: 'treeMenu',
    props: {
      data: Array,
      name: String,
      chooseId:{}
    },
    data () {
      return {
        folderIconList: [],
        loadingIconList: [],
        scope: {},
        isChoosed:[],//是否选中分类
        theChoosedId:0
      }
    },
    created () {
      setTimeout(()=>{
        this.data.forEach((item, index) => {
          if (item.categoryVoList && item.categoryVoList.length) {
            this.folderIconList[index] = 'ion-arrow-right-b';
          }
        });
      },500)
    },
    methods: {
      choose(categoryItem,index){
        this.$emit('getSubMenu', categoryItem,(id)=>{
          this.theChoosedId=categoryItem.id;
          this.isChoosed=[];
          this.isChoosed[index]=true;
          Vue.set(this.isChoosed,index,this.isChoosed[index]);
        });
      },
      doTask (index) {
        this.$set(this.scope, index, !this.scope[index]);
        this.folderIconList[index] = this.scope[index] ? 'ion-arrow-down-b' : 'ion-arrow-right-b';
      },
      toggle (item, index) {
        if (item.categoryVoList && item.categoryVoList.length) {
          this.doTask(index);
        }
      },
      getSubMenu(item,callback){
        this.$emit('getSubMenu', item,(id)=>{
          callback(id);
        });
      }
    },
    watch:{
      chooseId:function (val,oldVal) {
        // let flag=false;
        // this.data.forEach((item, index) => {
        //   if(item.id==val){
        //     flag=true;
        //   }
        // });
        if(this.theChoosedId!=val){
          this.isChoosed=[];
        }
      }
    }
  }
</script>

<style scoped>
  .tree-menu {
    clear: both;
    list-style: none;
    font-size: 18px;
    /*border-top: 1px solid #F2F2F2;*/
  }
  .tree-menu li {
    clear: both;
    line-height: 2;
    /*border-bottom: 1px solid #F2F2F2;*/
    margin-left: 25px;
  }
  .tree-menu li span {
    cursor: default;
  }
  .icon {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-repeat: no-repeat;
    vertical-align: -2px;
  }
</style>
