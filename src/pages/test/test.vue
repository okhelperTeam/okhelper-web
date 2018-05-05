/**
* Created by ztt on 2018/5/4.
*/
<template>
  <div id="">
    <div style="margin-right: 15px;clear: both;">
      <div v-if="showMe">
        <my-tree :data="theData" :name="menuName" @getSubMenu="getSubMenu"></my-tree>
      </div>
    </div>

   </div>
</template>

<script>
  //分类数据
  const myData = [
    {
      id: '1',
      menuName: '基础管理',
      menuCode: '10',
      children: [
        {
          menuName: '用户管理',
          menuCode: '11'
        },
        {
          id: '12',
          menuName: '角色管理',
          menuCode: '12',
          children: [
            {
              menuName: '管理员',
              menuCode: '121'
            },
            {
              menuName: 'CEO',
              menuCode: '122'
            },
            {
              menuName: 'CFO',
              menuCode: '123'
            },
            {
              menuName: 'COO',
              menuCode: '124'
            },
            {
              menuName: '普通人',
              menuCode: '124'
            }
          ]
        },
        {
          menuName: '权限管理',
          menuCode: '13'
        }
      ]
    },
    {
      id: '2',
      menuName: '商品管理',
      menuCode: '',
      children: [
        {
          menuName: '商品一',
          menuCode: '21'
        },
        {
          id: '22',
          menuName: '商品二',
          menuCode: '22',
          children: [
            {
              menuName: '子类商品1',
              menuCode: '221'
            },
            {
              menuName: '子类商品2',
              menuCode: '222'
            }
          ]
        }
      ]
    },
    {
      id: '3',
      menuName: '订单管理',
      menuCode: '30',
      children: [
        {
          menuName: '订单列表',
          menuCode: '31'
        },
        {
          menuName: '退货列表',
          menuCode: '32',
          children: []
        }
      ]
    },
    {
      id: '4',
      menuName: '商家管理',
      menuCode: '',
      children: []
    }
  ];

  import myTree from '@/pages/test/testchild'
  export default {
    components: {
      myTree
    },
    data () {
      return {
        showMe:true,
        theData: myData,
        menuName: 'menuName', // 显示菜单名称的属性
        loading: false
      }
    },
    methods: {
      getSubMenu (categoryItem) {
        this.showMe=false;
        console.log(categoryItem.menuName);
      }
    }
  }
</script>

<style scoped>

</style>
