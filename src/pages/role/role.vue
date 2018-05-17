/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <ok-back></ok-back>
      <div style="height: 70px;width: auto;margin-top: 56px;">
        <div style="margin: 0 auto;">
          <div style="height: 70px;display:block;float:left;margin-right: 20px;width:80%;margin-left: 20px;">
            <div style="margin-top: 12px;font-size: 16px;">注册人&nbsp;&nbsp;&nbsp;<span style="font-size: 12px;color: orange;">拥有人数：1</span></div>
            <div style="color: #888888">注册人拥有最大权限，并且不可修改</div>
          </div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="height: 70px;width: auto;">
        <div style="margin: 0 auto;">
          <div style="height: 70px;display:block;float:left;margin-right: 20px;width:80%;margin-left: 20px;">
            <div style="margin-top: 12px;font-size: 16px;">采购员&nbsp;&nbsp;&nbsp;<span style="font-size: 12px;color: orange;">拥有人数：2</span></div>
            <div style="color: #888888">负责采购事宜，包括新建商品、采购单、采购退货等</div>
          </div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div style="height: 70px;width: auto;">
        <div style="margin: 0 auto;">
          <div style="height: 70px;display:block;float:left;margin-right: 20px;width:80%;margin-left: 20px;">
            <div style="margin-top: 12px;font-size: 16px;">销售员&nbsp;&nbsp;&nbsp;<span style="font-size: 12px;color: orange;">拥有人数：3</span></div>
            <div style="color: #888888">负责销售业务</div>
          </div>
        </div>
      </div>
      <div class="ok-model-border"></div>
      <div class="ok-model-border"></div>
      <div style="height: 70px;width: auto;">
        <div style="margin: 0 auto;">
          <div style="height: 70px;display:block;float:left;margin-right: 20px;width:80%;margin-left: 20px;">
            <div style="margin-top: 12px;font-size: 16px;">仓库管理员&nbsp;&nbsp;&nbsp;<span style="font-size: 12px;color: orange;">拥有人数：1</span></div>
            <div style="color: #888888">负责库存管理、库存盘点、库存调拨等</div>
          </div>
        </div>
      </div>
      <div class="ok-model-border"></div>
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
            return {};
        },
        computed: {},  //计算属性
        created() {
        },   //创建
        mounted() {
        },   //挂载
        methods: {},   //方法
        watch: {}      //监听
    }
</script>

<style scoped>

</style>
