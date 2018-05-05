/**
* Created by ztt on 2018/5/5.
*/
<template>
  <ul class="tree-menu">
    <li v-for="(item, index) in data">
      <span style="float: left;width: 5%;display: block" @click="toggle(item, index)">
        <i :class="['icon', item.children && item.children.length ? folderIconList[index] : 'file-text']"></i>
      </span>
      <div style="width: 95%;display: block;float: left;" @click="choose(item,index)">
        {{ item[name] || item.menuName }}
        <i style="float: right;" :class="{'ion-checkmark-round':isChoosed[index]}"></i>
      </div>
      <tree-menu v-if="scope[index]" :data="item.children" @getSubMenu="getSubMenu"></tree-menu>
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
      loading: Boolean
    },
    data () {
      return {
        folderIconList: [],
        loadingIconList: [],
        scope: {},
        isChoosed:[]//是否选中分类
      }
    },
    created () {
      this.data.forEach((item, index) => {

        if (item.children && item.children.length) {
          console.log(item.children)
          this.folderIconList[index] = 'ion-arrow-right-b';
        }
      });
    },
    methods: {
      choose(categoryItem,index){
        console.log(categoryItem);
        console.log(index);
        this.isChoosed=[];
        this.isChoosed[index]=true;
        Vue.set(this.isChoosed,index,this.isChoosed[index]);
        this.$emit('getSubMenu', categoryItem);
      },
      doTask (index) {
        console.log(index);
        this.$set(this.scope, index, !this.scope[index]);
        this.folderIconList[index] = this.scope[index] ? 'ion-arrow-down-b' : 'ion-arrow-right-b';
      },
      toggle (item, index) {
        if (item.children && item.children.length) {
          this.doTask(index);
        }
      },
      getSubMenu(item){
        this.$emit('getSubMenu', item);
      }
    }
  }
</script>

<style scoped>
  .tree-menu {
    clear: both;
    list-style: none;
    font-size: 18px;
    border-top: 1px solid #F2F2F2;
  }
  .tree-menu li {
    clear: both;
    line-height: 2;
    border-bottom: 1px solid #F2F2F2;
    margin-left: 15px;
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
