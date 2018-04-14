/**
* Created by ztt on 2018/4/14.
*/
<template>
    <div id="">
      <div>返回条</div>
      <div style="width:auto;height: 200px; margin:0 auto">

        <van-cell-group>
          <div style="display: block;text-align: center;">
            <div class="login-text">
              <van-field
                v-model="shopName"
                style="font-size: 20px;"
                lable="店铺名"
                icon="clear"
                placeholder="请输入店铺名"
                @click-icon="shopName = ''"
              />
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
        </van-cell-group>
        <div style="height: 110px;padding-top:30px;width: 80%;margin:0 auto;">
          <van-button type="danger" size="large">立即开店</van-button>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Field,Cell, CellGroup ,Row, Col,Button,Icon} from 'vant';

  Vue.use(Icon).use(Button).use(Row).use(Col).use(Cell).use(CellGroup).use(Field);
    export default {
        mixins: [],     //混合
        components: {},//注册组件
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
