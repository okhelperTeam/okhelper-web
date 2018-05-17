/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <ok-back></ok-back>
      <div style="margin-top: 56px;"></div>
      <div v-for="item in roleList">
        <div style="height: 70px;width: auto;">
          <div style="margin: 0 auto;">
            <div style="height: 70px;display:block;float:left;margin-right: 20px;width:90%;margin-left: 20px;">
              <div style="margin-top: 12px;font-size: 16px;">{{item.roleName}}&nbsp;&nbsp;&nbsp;<span style="font-size: 12px;color: orange;">拥有人数：{{item.userCount}}</span></div>
              <div style="color: #888888">{{item.description}}</div>
            </div>
          </div>
        </div>
        <div class="ok-model-border"></div>
      </div>
    </div>
</template>

<script>
  const Back = resolve => require(['@/components/common/backBar'], resolve);
  import {getRoleList} from '@/service/getData'
    export default {
        mixins: [],     //混合
        components: {
          'ok-back':Back
        },//注册组件
        data() {         //数据
            return {
              roleList:[]
            };
        },
        computed: {},  //计算属性
        created() {
          this.getMyRoleList();
        },   //创建
        mounted() {
        },   //挂载
        methods: {
          getMyRoleList(){
            getRoleList({}).then(
              response=>{
                this.roleList=response.data;
              },error=>{

              }
            );
          }
        },   //方法
        watch: {}      //监听
    }
</script>

<style scoped>

</style>
