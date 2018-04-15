/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <ok-back></ok-back>
      <div style="width:auto;height: 200px; margin:0 auto;background: yellow;">
          <div style="display: block;text-align: center;">
            <div class="login-text">
              <span>店铺名</span>
              <input type="text"/>
              <hr>
            </div>
          </div>
          <div style="display: block;text-align: center;">
            <div style="display: block;">
              <div class="login-text">
                <van-field
                  v-model="password"
                  lable="店铺描述"
                  style="font-size: 20px"
                  icon="clear"
                  @click-icon="password = ''"
                />
                <hr>
              </div>
            </div>
          </div>
        <div style="height: 110px;padding-top:30px;width: 80%;margin:0 auto;">
          <van-button type="danger" size="large">立即开店</van-button>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Field,Cell, CellGroup ,Row, Col,Button,Icon} from 'vant';

  const Back = resolve => require(['@/components/common/backBar'], resolve);

  Vue.use(Icon).use(Button).use(Row).use(Col).use(Cell).use(CellGroup).use(Field);
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
